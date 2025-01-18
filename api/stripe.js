import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { amount, currency = 'usd', priceId, mode = 'payment' } = JSON.parse(event.body);

    // If priceId is provided, create a subscription checkout session
    if (priceId) {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        mode: 'subscription',
        success_url: `${process.env.URL}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.URL}/pricing`,
      });

      return {
        statusCode: 200,
        body: JSON.stringify({ id: session.id }),
      };
    }

    // If amount is provided, create a one-time payment intent
    if (amount) {
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency
      });

      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret })
      };
    }

    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing required parameters' })
    };
  } catch (error) {
    console.error('Stripe error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
