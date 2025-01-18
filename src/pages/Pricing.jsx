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
    description: 'Advanced solutions for large-scale farming',
    features: [
      'All Professional features',
      'Multi-farm management',
      'Advanced analytics & reporting',
      'Climate modeling',
      'Resource optimization AI',
      'Integration with IoT devices',
      'Automated compliance tracking',
      'Priority support',
      'Custom feature development',
      'Team collaboration tools'
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];

const Pricing = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box textAlign="center" mb={6}>
        <Typography
          component="h1"
          variant="h2"
          color="text.primary"
          gutterBottom
        >
          Choose Your Path to Success
        </Typography>
        <Typography variant="h5" color="text.secondary" component="p">
          Select the plan that best fits your farming journey
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
                  transform: 'scale(1.05)',
                  border: '2px solid',
                  borderColor: 'primary.main',
                }),
              }}
            >
              <CardHeader
                title={tier.title}
                subheader={tier.subheader}
                titleTypographyProps={{ align: 'center' }}
                subheaderTypographyProps={{ align: 'center' }}
                sx={{
                  backgroundColor: tier.title === 'Professional' ? 'primary.main' : 'grey.100',
                  color: tier.title === 'Professional' ? 'white' : 'text.primary',
                }}
                action={tier.subheader ? (
                  <Chip
                    label="POPULAR"
                    color="secondary"
                    size="small"
                    sx={{ mt: 1, mr: 1 }}
                  />
                ) : null}
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
                  color={tier.title === 'Professional' ? 'secondary' : 'primary'}
                  onClick={() => navigate('/signup')}
                  sx={{ py: 2 }}
                >
                  {tier.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Enterprise-Grade Features
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Looking for custom solutions? Our enterprise plan includes dedicated support,
          custom integrations, and advanced features tailored to your needs.
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          onClick={() => navigate('/contact')}
        >
          Contact Sales Team
        </Button>
      </Box>
    </Container>
  );
};

export default Pricing;
