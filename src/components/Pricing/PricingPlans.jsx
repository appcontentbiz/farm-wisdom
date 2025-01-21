import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import DiamondIcon from '@mui/icons-material/Diamond';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const plans = [
  {
    title: 'Basic',
    price: '29',
    icon: CheckCircleIcon,
    description: 'Essential farm management tools',
    features: [
      'Basic farm management tools',
      'Weather forecasts',
      'Crop planning calendar',
      'Basic analytics',
      'Community support',
      'Mobile app access'
    ],
    buttonText: 'Start Free Trial',
    buttonVariant: 'outlined',
    color: '#2196f3',
    path: '/signup'
  },
  {
    title: 'Professional',
    price: '99',
    icon: StarIcon,
    description: 'Advanced features for growing farms',
    features: [
      'All Basic features',
      'Advanced crop management',
      'Equipment tracking',
      'Financial forecasting',
      'Priority support',
      'Custom reports',
      'Mobile app access'
    ],
    buttonText: 'Upgrade to Pro',
    buttonVariant: 'contained',
    popular: true,
    color: '#e91e63',
    path: '/checkout/professional'
  },
  {
    title: 'Enterprise',
    price: '299',
    icon: DiamondIcon,
    description: 'Multi-farm management and team collaboration',
    features: [
      'All Professional features',
      'Multi-farm Management',
      'Team Collaboration Tools',
      'Resource Planning',
      'Inventory Management',
      'Quality Control',
      'Financial Analytics',
      'Role-based Access',
      'Data Encryption',
      'Audit Logs'
    ],
    buttonText: 'Upgrade to Enterprise',
    buttonVariant: 'outlined',
    color: '#9c27b0',
    path: '/checkout/enterprise'
  },
  {
    title: 'Enterprise Plus',
    price: '499',
    icon: RocketLaunchIcon,
    description: 'Complete solution with AI and advanced analytics',
    features: [
      'All Enterprise features',
      'Real-time Analytics Suite',
      'AI-Powered Insights',
      'Predictive Maintenance',
      'Drone Data Integration',
      'Smart Irrigation Control',
      'Advanced Security Features',
      'Premium Support Package',
      'Custom API Access',
      'White-label Options'
    ],
    buttonText: 'Upgrade to Enterprise Pro',
    buttonVariant: 'contained',
    premium: true,
    color: '#4caf50',
    path: '/checkout/enterprise-plus'
  }
];

const PricingPlans = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handlePlanSelection = (path) => {
    navigate(path);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box textAlign="center" mb={8}>
        <Typography
          component="h1"
          variant="h2"
          color="text.primary"
          gutterBottom
          fontWeight="bold"
        >
          Pricing Plans
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Choose the perfect plan for your farming needs
        </Typography>
      </Box>

      <Grid container spacing={4} alignItems="stretch">
        {plans.map((plan) => {
          const Icon = plan.icon;
          return (
            <Grid
              item
              key={plan.title}
              xs={12}
              sm={6}
              md={3}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 40px rgba(0,0,0,0.1)',
                  },
                  ...(plan.popular && {
                    border: `2px solid ${plan.color}`,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  }),
                  ...(plan.premium && {
                    background: `linear-gradient(135deg, #ffffff 0%, ${plan.color}0d 100%)`,
                    border: `2px solid ${plan.color}`,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  })
                }}
              >
                {(plan.popular || plan.premium) && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 12,
                      right: 12,
                      backgroundColor: plan.color,
                      color: 'white',
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontSize: '0.75rem',
                      fontWeight: 'bold',
                    }}
                  >
                    {plan.popular ? 'MOST POPULAR' : 'PREMIUM'}
                  </Box>
                )}

                <CardHeader
                  avatar={
                    <Icon sx={{ fontSize: 32, color: plan.color }} />
                  }
                  title={
                    <Typography variant="h5" component="div" fontWeight="bold">
                      {plan.title}
                    </Typography>
                  }
                  subheader={
                    <Box sx={{ mt: 1 }}>
                      <Typography variant="h3" component="div" fontWeight="bold" color={plan.color}>
                        ${plan.price}
                        <Typography component="span" variant="h6" color="text.secondary">
                          /mo
                        </Typography>
                      </Typography>
                    </Box>
                  }
                  sx={{
                    textAlign: 'center',
                    pb: 0
                  }}
                />

                <CardContent sx={{ flexGrow: 1, pt: 2 }}>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    align="center"
                    sx={{ mb: 3, minHeight: 48 }}
                  >
                    {plan.description}
                  </Typography>

                  <List sx={{ mb: 2 }}>
                    {plan.features.map((feature) => (
                      <ListItem key={feature} sx={{ py: 1 }}>
                        <ListItemIcon>
                          <CheckCircleIcon sx={{ color: plan.color }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={feature}
                          primaryTypographyProps={{
                            fontSize: '0.875rem',
                            fontWeight: 500
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>

                  <Button
                    fullWidth
                    variant={plan.buttonVariant}
                    color={plan.premium ? 'success' : 'primary'}
                    size="large"
                    onClick={() => handlePlanSelection(plan.path)}
                    sx={{
                      mt: 2,
                      py: 1.5,
                      ...(plan.premium && {
                        backgroundColor: plan.color,
                        '&:hover': {
                          backgroundColor: `${plan.color}dd`,
                        }
                      })
                    }}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default PricingPlans;
