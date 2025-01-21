import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Divider,
  Alert,
  CircularProgress,
  FormControlLabel,
  Checkbox,
  InputAdornment,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LockIcon from '@mui/icons-material/Lock';
import SecurityIcon from '@mui/icons-material/Security';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const PLAN_DETAILS = {
  'professional': {
    name: 'Professional Plan',
    price: 99,
    interval: 'month',
    features: [
      'Advanced crop management',
      'Equipment tracking',
      'Financial forecasting',
      'Priority support'
    ]
  },
  'enterprise': {
    name: 'Enterprise Plan',
    price: 299,
    interval: 'month',
    features: [
      'Multi-farm Management',
      'Team Collaboration Tools',
      'Resource Planning',
      'Advanced Security'
    ]
  },
  'enterprise-plus': {
    name: 'Enterprise Pro Plan',
    price: 499,
    interval: 'month',
    features: [
      'AI-Powered Insights',
      'Real-time Analytics Suite',
      'Premium Support',
      'White-label Options'
    ]
  }
};

const Checkout = () => {
  const { plan } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    saveCard: false,
    billingAddress: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  });

  if (!PLAN_DETAILS[plan]) {
    return (
      <Container maxWidth="sm" sx={{ py: 8 }}>
        <Alert severity="error">Invalid plan selected</Alert>
      </Container>
    );
  }

  const handleInputChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'saveCard' ? checked : value
    }));
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const handleCardNumberChange = (e) => {
    const formattedValue = formatCardNumber(e.target.value);
    setFormData(prev => ({
      ...prev,
      cardNumber: formattedValue
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // TODO: Implement actual payment processing
      // This is where you'd integrate with your payment processor (e.g., Stripe)
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulating API call
      
      // On success, you'd typically:
      // 1. Update the user's subscription in your backend
      // 2. Show a success message
      // 3. Redirect to the dashboard
      
      navigate('/dashboard', { 
        state: { 
          success: true, 
          message: `Successfully upgraded to ${PLAN_DETAILS[plan].name}!` 
        }
      });
    } catch (err) {
      setError('Payment processing failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
              Payment Details
            </Typography>

            {error && (
              <Alert severity="error" sx={{ mb: 3 }}>
                {error}
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Name on Card"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CreditCardIcon color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Card Number"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleCardNumberChange}
                    placeholder="1234 5678 9012 3456"
                    inputProps={{ maxLength: 19 }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    label="Expiry Date"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    inputProps={{ maxLength: 5 }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    label="CVV"
                    name="cvv"
                    type="password"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    inputProps={{ maxLength: 4 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockIcon color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="h6" gutterBottom>
                    Billing Address
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Street Address"
                    name="billingAddress"
                    value={formData.billingAddress}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="City"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="State"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="ZIP Code"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="saveCard"
                        checked={formData.saveCard}
                        onChange={handleInputChange}
                        color="primary"
                      />
                    }
                    label="Save card for future payments"
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    disabled={loading}
                    sx={{ mt: 2 }}
                  >
                    {loading ? (
                      <CircularProgress size={24} color="inherit" />
                    ) : (
                      `Pay $${PLAN_DETAILS[plan].price}/month`
                    )}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>

        <Grid item xs={12} md={5}>
          <Paper elevation={3} sx={{ p: 4, bgcolor: 'grey.50' }}>
            <Typography variant="h5" gutterBottom>
              Order Summary
            </Typography>
            
            <Box sx={{ my: 3 }}>
              <Typography variant="h4" color="primary" gutterBottom>
                {PLAN_DETAILS[plan].name}
              </Typography>
              <Typography variant="h3" color="primary" gutterBottom>
                ${PLAN_DETAILS[plan].price}
                <Typography component="span" variant="h6" color="text.secondary">
                  /{PLAN_DETAILS[plan].interval}
                </Typography>
              </Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Typography variant="subtitle1" gutterBottom sx={{ mt: 3 }}>
              Key Features:
            </Typography>
            <List>
              {PLAN_DETAILS[plan].features.map((feature, index) => (
                <ListItem key={index} sx={{ py: 0.5 }}>
                  <ListItemIcon>
                    <CheckCircleIcon color="success" />
                  </ListItemIcon>
                  <ListItemText primary={feature} />
                </ListItem>
              ))}
            </List>

            <Box sx={{ mt: 4 }}>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                <SecurityIcon color="action" />
                <Typography variant="body2" color="text.secondary">
                  Secure Payment Processing
                </Typography>
              </Stack>
              <Typography variant="body2" color="text.secondary">
                Your payment information is encrypted and secure. We never store your full credit card details.
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Checkout;
