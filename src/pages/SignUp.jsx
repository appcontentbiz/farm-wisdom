import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Alert,
  FormControlLabel,
  Checkbox,
  CircularProgress
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const steps = ['Account Details', 'Farm Information', 'Payment'];

function SignUp() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const isProfessional = searchParams.get('plan') === 'professional';

  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    farmName: '',
    farmSize: '',
    farmType: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    agreeToTerms: false
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: event.target.type === 'checkbox' ? checked : value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep = () => {
    const newErrors = {};
    
    if (activeStep === 0) {
      if (!formData.email) newErrors.email = 'Email is required';
      if (!formData.password) newErrors.password = 'Password is required';
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
      if (!formData.firstName) newErrors.firstName = 'First name is required';
      if (!formData.lastName) newErrors.lastName = 'Last name is required';
    }
    
    if (activeStep === 1) {
      if (!formData.farmName) newErrors.farmName = 'Farm name is required';
      if (!formData.farmSize) newErrors.farmSize = 'Farm size is required';
      if (!formData.farmType) newErrors.farmType = 'Farm type is required';
    }
    
    if (activeStep === 2 && isProfessional) {
      if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required';
      if (!formData.expiryDate) newErrors.expiryDate = 'Expiry date is required';
      if (!formData.cvv) newErrors.cvv = 'CVV is required';
      if (!formData.agreeToTerms) {
        newErrors.agreeToTerms = 'You must agree to the terms and conditions';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      if (activeStep === steps.length - 1) {
        handleSubmit();
      } else {
        setActiveStep((prevStep) => prevStep + 1);
      }
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Navigate to success page or dashboard
      navigate('/dashboard', { 
        state: { 
          message: `Welcome to Farm Wisdom ${isProfessional ? 'Professional' : 'Free'} tier!`,
          newUser: true
        }
      });
    } catch (error) {
      setErrors({ submit: 'Failed to create account. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                error={!!errors.firstName}
                helperText={errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                error={!!errors.lastName}
                helperText={errors.lastName}
              />
            </Grid>
          </Grid>
        );
      
      case 1:
        return (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Farm Name"
                name="farmName"
                value={formData.farmName}
                onChange={handleChange}
                error={!!errors.farmName}
                helperText={errors.farmName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Farm Size (acres)"
                name="farmSize"
                type="number"
                value={formData.farmSize}
                onChange={handleChange}
                error={!!errors.farmSize}
                helperText={errors.farmSize}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Farm Type"
                name="farmType"
                select
                SelectProps={{ native: true }}
                value={formData.farmType}
                onChange={handleChange}
                error={!!errors.farmType}
                helperText={errors.farmType}
              >
                <option value="">Select farm type</option>
                <option value="crop">Crop Farming</option>
                <option value="livestock">Livestock</option>
                <option value="mixed">Mixed Farming</option>
                <option value="urban">Urban Farming</option>
                <option value="organic">Organic Farming</option>
              </TextField>
            </Grid>
          </Grid>
        );
      
      case 2:
        return isProfessional ? (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Card Number"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                error={!!errors.cardNumber}
                helperText={errors.cardNumber}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Expiry Date"
                name="expiryDate"
                placeholder="MM/YY"
                value={formData.expiryDate}
                onChange={handleChange}
                error={!!errors.expiryDate}
                helperText={errors.expiryDate}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="CVV"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                error={!!errors.cvv}
                helperText={errors.cvv}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                  />
                }
                label="I agree to the terms and conditions"
              />
              {errors.agreeToTerms && (
                <Typography color="error" variant="caption" display="block">
                  {errors.agreeToTerms}
                </Typography>
              )}
            </Grid>
          </Grid>
        ) : (
          <Alert severity="success">
            You're all set! Click Finish to create your free account.
          </Alert>
        );
      
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Card>
        <CardContent>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" gutterBottom align="center">
              Sign Up for Farm Wisdom
              {isProfessional && ' Professional'}
            </Typography>
            <Typography variant="subtitle1" align="center" color="text.secondary">
              {isProfessional
                ? 'Start your 14-day free trial'
                : 'Create your free account'}
            </Typography>
          </Box>

          <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {errors.submit && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {errors.submit}
            </Alert>
          )}

          {renderStepContent(activeStep)}

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
            {activeStep !== 0 && (
              <Button onClick={handleBack} sx={{ mr: 1 }}>
                Back
              </Button>
            )}
            <Button
              variant="contained"
              onClick={handleNext}
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={24} />
              ) : activeStep === steps.length - 1 ? (
                'Finish'
              ) : (
                'Next'
              )}
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default SignUp;
