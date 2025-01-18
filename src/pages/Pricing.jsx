import React from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
} from '@mui/material';
import { Check as CheckIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: 'Get started with basic farming knowledge',
    features: [
      'Basic farming guides',
      'Community forum access',
      'Weather forecasts',
      'Sample market prices',
      'Basic crop calendar'
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Professional',
    subheader: 'Most Popular',
    price: '29',
    description: 'Everything you need for successful farming',
    features: [
      'All Free features',
      'Real-time market prices',
      'Advanced crop management',
      'Soil analysis tools',
      'Equipment tracking',
      'Yield predictions',
      'Pest & disease alerts',
      'Custom planting schedules',
      'Expert consultation access'
    ],
    buttonText: 'Start 14-day trial',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '99',
    description: 'Advanced solutions for large-scale operations',
    features: [
      'All Professional features',
      'Multi-farm management',
      'Advanced analytics',
      'Custom reporting',
      'API access',
      'Dedicated support',
      'Employee accounts',
      'Integration support',
      'Custom features'
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];

function Pricing() {
  const navigate = useNavigate();

  const handleSubscribe = (tier) => {
    if (tier.title === 'Free') {
      navigate('/signup');
    } else if (tier.title === 'Enterprise') {
      // Implement contact form or redirect to contact page
      navigate('/contact');
    } else {
      // Implement subscription flow
      navigate('/signup?plan=professional');
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box textAlign="center" mb={6}>
        <Typography
          component="h1"
          variant="h2"
          color="text.primary"
          gutterBottom
        >
          Pricing Plans
        </Typography>
        <Typography variant="h5" color="text.secondary" component="p">
          Choose the perfect plan for your farming needs
        </Typography>
      </Box>
      <Grid container spacing={4} alignItems="flex-end">
        {tiers.map((tier) => (
          <Grid
            item
            key={tier.title}
            xs={12}
            sm={tier.title === 'Professional' ? 12 : 6}
            md={4}
          >
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                ...(tier.title === 'Professional' && {
                  transform: { sm: 'scale(1.05)' },
                  zIndex: 1,
                  boxShadow: 8,
                }),
              }}
            >
              <CardHeader
                title={tier.title}
                subheader={tier.subheader}
                titleTypographyProps={{ align: 'center' }}
                subheaderTypographyProps={{ align: 'center' }}
                sx={{
                  backgroundColor: (theme) =>
                    tier.title === 'Professional'
                      ? theme.palette.primary.main
                      : theme.palette.grey[200],
                  color: (theme) =>
                    tier.title === 'Professional'
                      ? theme.palette.primary.contrastText
                      : null,
                }}
                action={
                  tier.title === 'Professional' && (
                    <Chip
                      label="POPULAR"
                      color="secondary"
                      size="small"
                      sx={{ mt: 1, mr: 1 }}
                    />
                  )
                }
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
                  variant="subtitle1"
                  align="center"
                  color="text.secondary"
                  component="p"
                  sx={{ mb: 3 }}
                >
                  {tier.description}
                </Typography>
                <List>
                  {tier.features.map((feature) => (
                    <ListItem key={feature} sx={{ py: 1 }}>
                      <ListItemIcon>
                        <CheckIcon sx={{ color: 'success.main' }} />
                      </ListItemIcon>
                      <ListItemText primary={feature} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant={tier.buttonVariant}
                  color={
                    tier.title === 'Professional' ? 'secondary' : 'primary'
                  }
                  onClick={() => handleSubscribe(tier)}
                  size="large"
                  sx={{ mt: 'auto' }}
                >
                  {tier.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="subtitle1" color="text.secondary" component="p">
          All plans include a 14-day money-back guarantee
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Need help choosing? Contact our team for a personalized recommendation
        </Typography>
      </Box>
    </Container>
  );
}

export default Pricing;
