import React from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  CardActions,
} from '@mui/material';
import { Check, Close } from '@mui/icons-material';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const plans = [
  {
    id: 'basic',
    name: 'Basic',
    price: 0,
    period: 'Free Forever',
    features: [
      'Basic Farming Guides',
      'Community Access',
      'Plant Recognition (5/month)',
      'Weather Updates',
      'Basic Market Prices',
    ],
    notIncluded: [
      'Professional Tools',
      'ERP System',
      'Advanced Analytics',
      'Voice Commands',
      'Priority Support',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 29.99,
    period: 'per month',
    features: [
      'Everything in Basic',
      'Full ERP System Access',
      'Workforce Management',
      'Supply Chain Tools',
      'Advanced Analytics',
      'Voice Commands',
      'Priority Support',
      'Unlimited Plant Recognition',
      'Real-time Market Data',
      'Custom Reports',
    ],
    notIncluded: [
      'White Label Solution',
      'API Access',
      'Custom Integration',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 99.99,
    period: 'per month',
    features: [
      'Everything in Professional',
      'White Label Solution',
      'API Access',
      'Custom Integration',
      'Dedicated Account Manager',
      'Custom Training',
      'SLA Support',
      'Multi-farm Management',
      'Advanced Security',
      'Custom Analytics',
    ],
    notIncluded: [],
  },
];

const PricingPlans = () => {
  const handleSubscribe = async (planId) => {
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          planId,
        }),
      });

      const session = await response.json();
      const stripe = await stripePromise;
      
      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (error) {
        console.error('Error:', error);
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };

  const renderPlanCard = (plan) => (
    <Card 
      className={`h-full ${
        plan.id === 'professional' ? 'border-2 border-primary' : ''
      }`}
    >
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {plan.name}
        </Typography>
        <Typography variant="h3" component="p" gutterBottom>
          ${plan.price}
          <Typography variant="subtitle1" component="span" color="textSecondary">
            /{plan.period}
          </Typography>
        </Typography>

        <Typography variant="subtitle1" color="primary" gutterBottom>
          Included Features:
        </Typography>
        <List dense>
          {plan.features.map((feature, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <Check color="success" />
              </ListItemIcon>
              <ListItemText primary={feature} />
            </ListItem>
          ))}
        </List>

        {plan.notIncluded.length > 0 && (
          <>
            <Typography variant="subtitle1" color="error" gutterBottom>
              Not Included:
            </Typography>
            <List dense>
              {plan.notIncluded.map((feature, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <Close color="error" />
                  </ListItemIcon>
                  <ListItemText 
                    primary={feature}
                    className="text-gray-500"
                  />
                </ListItem>
              ))}
            </List>
          </>
        )}
      </CardContent>
      <CardActions className="p-4">
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => handleSubscribe(plan.id)}
        >
          {plan.price === 0 ? 'Get Started' : 'Subscribe Now'}
        </Button>
      </CardActions>
    </Card>
  );

  return (
    <Elements stripe={stripePromise}>
      <Box className="p-8">
        <Typography variant="h4" align="center" gutterBottom>
          Choose Your Plan
        </Typography>
        <Typography 
          variant="subtitle1" 
          align="center" 
          color="textSecondary"
          className="mb-8"
        >
          Scale your farming operations with our flexible plans
        </Typography>

        <Grid container spacing={4}>
          {plans.map((plan) => (
            <Grid item xs={12} md={4} key={plan.id}>
              {renderPlanCard(plan)}
            </Grid>
          ))}
        </Grid>

        <Box className="mt-8 text-center">
          <Typography variant="body2" color="textSecondary">
            All plans include updates and basic support.
            Enterprise plans include custom features and dedicated support.
          </Typography>
        </Box>
      </Box>
    </Elements>
  );
};

export default PricingPlans;
