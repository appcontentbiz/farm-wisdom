import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  Typography,
  Box,
  CircularProgress,
  Alert,
} from '@mui/material';

const PLAN_DETAILS = {
  'professional': {
    name: 'Professional Plan',
    price: 99,
    interval: 'month'
  },
  'enterprise': {
    name: 'Enterprise Plan',
    price: 299,
    interval: 'month'
  },
  'enterprise-plus': {
    name: 'Enterprise Pro Plan',
    price: 499,
    interval: 'month'
  }
};

const Checkout = () => {
  const { plan } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initializeCheckout = async () => {
      try {
        if (!PLAN_DETAILS[plan]) {
          throw new Error('Invalid plan selected');
        }

        // TODO: Initialize your payment platform here
        // Example with Stripe:
        // const stripe = await loadStripe('your-publishable-key');
        // const session = await createCheckoutSession(plan);
        // await stripe.redirectToCheckout({ sessionId: session.id });

        // For now, we'll just simulate the loading
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    initializeCheckout();
  }, [plan]);

  if (error) {
    return (
      <Container maxWidth="sm" sx={{ py: 8 }}>
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
        <Box textAlign="center">
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 2 }}
          >
            Please try again or contact support if the problem persists.
          </Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 200 }}>
            <CircularProgress />
          </Box>
        ) : (
          <Box>
            <Typography variant="h4" gutterBottom>
              {PLAN_DETAILS[plan]?.name}
            </Typography>
            <Typography variant="h3" color="primary" gutterBottom>
              ${PLAN_DETAILS[plan]?.price}
              <Typography component="span" variant="h6" color="text.secondary">
                /{PLAN_DETAILS[plan]?.interval}
              </Typography>
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Processing your payment...
            </Typography>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default Checkout;
