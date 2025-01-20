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
    price: '0',
    description: 'Get started with basic farming knowledge',
    features: [
      'Access to basic farming guides',
      'Community forum access',
      'Basic crop planning tools',
      'Limited article access'
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Professional',
    subheader: 'Most Popular',
    price: '15',
    description: 'Everything in Basic, plus advanced features',
    features: [
      'All Basic features',
      'Advanced farming guides',
      'Expert consultation (2/month)',
      'Crop yield tracking',
      'Weather integration',
      'Market price updates'
    ],
    buttonText: 'Start free trial',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: 'Custom solutions for large operations',
    features: [
      'All Professional features',
      'Custom farming plans',
      'Unlimited expert consultation',
      'Advanced analytics',
      'Equipment management',
      'Supply chain integration',
      'Priority support'
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
  {
    title: 'Enterprise Plus',
    subheader: 'Maximum Support',
    price: '50',
    description: 'Complete farming ecosystem with AI assistance',
    features: [
      'All Enterprise features',
      'AI-powered farming insights',
      'Automated monitoring systems',
      'Drone integration',
      'Smart irrigation control',
      'Real-time soil analysis',
      'Climate control automation',
      'Dedicated success manager',
      'Custom API access',
      'White-label options'
    ],
    buttonText: 'Contact us',
    buttonVariant: 'contained',
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
            sm={6}
            md={3}
          >
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                  transform: 'scale(1.02)',
                  transition: 'transform 0.2s ease-in-out',
                },
              }}
            >
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
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'baseline',
                    mb: 2,
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
                <List>
                  {tier.features.map((feature) => (
                    <ListItem key={feature} sx={{ py: 1 }}>
                      <ListItemIcon>
                        <CheckIcon sx={{ color: 'primary.main' }} />
                      </ListItemIcon>
                      <ListItemText primary={feature} />
                    </ListItem>
                  ))}
                </List>
                <Button
                  fullWidth
                  variant={tier.buttonVariant}
                  color="primary"
                  sx={{ mt: 2 }}
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
