import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const tiers = [
  {
    title: 'Basic',
    price: '29',
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
  },
  {
    title: 'Professional',
    subheader: 'Most Popular',
    price: '99',
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
    popular: true
  },
  {
    title: 'Enterprise',
    price: '299',
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
    buttonText: 'Contact Sales',
    buttonVariant: 'outlined',
  },
  {
    title: 'Enterprise Plus',
    price: '499',
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
    buttonText: 'Contact Sales',
    buttonVariant: 'outlined',
  }
];

const PricingTiers = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Pricing Plans
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" component="p" sx={{ mb: 6 }}>
        Choose the plan that best fits your farming needs
      </Typography>
      <Grid container spacing={4} alignItems="flex-end">
        {tiers.map((tier) => (
          <Grid
            item
            key={tier.title}
            xs={12}
            sm={tier.title === 'Enterprise Plus' ? 12 : 6}
            md={3}
          >
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                ...(tier.popular && {
                  border: '2px solid #1976d2',
                  position: 'relative'
                }),
                ...(tier.title === 'Enterprise Plus' && {
                  border: '2px solid #9c27b0',
                  position: 'relative'
                })
              }}
            >
              {tier.popular && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    right: 20,
                    transform: 'translateY(-50%)',
                    backgroundColor: '#e91e63',
                    color: 'white',
                    px: 2,
                    py: 0.5,
                    borderRadius: 1,
                  }}
                >
                  POPULAR
                </Box>
              )}
              <CardHeader
                title={tier.title}
                subheader={tier.subheader}
                titleTypographyProps={{ align: 'center' }}
                subheaderTypographyProps={{ align: 'center' }}
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                      ? theme.palette.grey[200]
                      : theme.palette.grey[700],
                  ...(tier.title === 'Enterprise Plus' && {
                    backgroundColor: '#9c27b0',
                    color: 'white',
                    '& .MuiCardHeader-subheader': {
                      color: 'rgba(255, 255, 255, 0.7)',
                    },
                  }),
                }}
              />
              <CardContent sx={{ flexGrow: 1, pt: 0 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'baseline',
                    mb: 2,
                    pt: 2,
                  }}
                >
                  <Typography component="h2" variant="h3" color="text.primary">
                    ${tier.price}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    /mo
                  </Typography>
                </Box>
                <Typography
                  component="p"
                  variant="subtitle1"
                  align="center"
                  sx={{ mb: 3 }}
                >
                  {tier.description}
                </Typography>
                <List sx={{ mb: 2 }}>
                  {tier.features.map((feature) => (
                    <ListItem key={feature} sx={{ py: 1 }}>
                      <ListItemIcon>
                        <CheckIcon sx={{ color: tier.title === 'Enterprise Plus' ? '#9c27b0' : 'primary.main' }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={feature}
                        sx={{
                          '& .MuiTypography-root': {
                            fontSize: '0.875rem',
                          },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
                <Button
                  fullWidth
                  variant={tier.buttonVariant}
                  color={tier.title === 'Enterprise Plus' ? 'secondary' : 'primary'}
                  sx={{ mt: 'auto' }}
                >
                  {tier.buttonText}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PricingTiers;
