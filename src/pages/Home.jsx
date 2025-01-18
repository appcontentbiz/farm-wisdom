import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from '@mui/material';
import {
  CheckCircle,
  Agriculture,
  EmojiNature,
  Timeline,
  MonetizationOn,
  CloudQueue,
  Eco,
} from '@mui/icons-material';

export default function Home() {
  const navigate = useNavigate();
  const { setUserRole } = useUser();

  const selectRole = (role) => {
    setUserRole(role);
    navigate(role === 'beginner' ? '/beginner' : '/professional');
  };

  const features = {
    beginner: [
      { text: 'Step-by-step farming guides', icon: <Agriculture /> },
      { text: 'Basic weather forecasts', icon: <CloudQueue /> },
      { text: 'Community support', icon: <EmojiNature /> },
      { text: 'Sample market prices', icon: <MonetizationOn /> },
    ],
    professional: [
      { text: 'Advanced crop management', icon: <Eco /> },
      { text: 'Real-time market analysis', icon: <MonetizationOn /> },
      { text: 'Professional analytics', icon: <Timeline /> },
      { text: 'Expert consultation', icon: <Agriculture /> },
    ],
  };

  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Hero Section */}
        <Box textAlign="center" mb={8}>
          <Typography
            component="h1"
            variant="h2"
            color="text.primary"
            gutterBottom
            fontWeight="bold"
          >
            Welcome to FarmWisdom
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Your journey to successful farming starts here
          </Typography>
        </Box>

        {/* Main Cards */}
        <Grid container spacing={4} justifyContent="center">
          {/* Beginner Card */}
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="240"
                image="/images/beginner-farming.jpg"
                alt="Beginner Farming"
                sx={{
                  objectFit: 'cover',
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h4" component="h2">
                  Beginner Farmer
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" paragraph>
                  Start your farming journey with comprehensive guides and community support
                </Typography>
                <List>
                  {features.beginner.map((feature) => (
                    <ListItem key={feature.text}>
                      <ListItemIcon sx={{ color: 'success.main' }}>
                        {feature.icon}
                      </ListItemIcon>
                      <ListItemText primary={feature.text} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
              <CardActions sx={{ p: 2, justifyContent: 'center', gap: 2 }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => selectRole('beginner')}
                  sx={{ minWidth: 150 }}
                >
                  Get Started
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => navigate('/pricing')}
                  sx={{ minWidth: 150 }}
                >
                  View Plans
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Professional Card */}
          <Grid item xs={12} md={6}>
            <Card 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                transform: { md: 'scale(1.02)' },
                boxShadow: 6,
              }}
            >
              <CardMedia
                component="img"
                height="240"
                image="/images/professional-farming.jpg"
                alt="Professional Farming"
                sx={{
                  objectFit: 'cover',
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h4" component="h2">
                  Professional Farmer
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" paragraph>
                  Access advanced tools and real-time data for optimal farm management
                </Typography>
                <List>
                  {features.professional.map((feature) => (
                    <ListItem key={feature.text}>
                      <ListItemIcon sx={{ color: 'primary.main' }}>
                        {feature.icon}
                      </ListItemIcon>
                      <ListItemText primary={feature.text} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
              <CardActions sx={{ p: 2, justifyContent: 'center', gap: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => navigate('/pricing')}
                  sx={{ minWidth: 150 }}
                >
                  Upgrade Now
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  onClick={() => selectRole('professional')}
                  sx={{ minWidth: 150 }}
                >
                  Try Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        {/* Bottom CTA */}
        <Paper sx={{ mt: 8, p: 4, textAlign: 'center', backgroundColor: 'primary.main', color: 'primary.contrastText' }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Ready to grow with us?
          </Typography>
          <Typography variant="subtitle1" paragraph>
            Join thousands of farmers who have transformed their farming practices with FarmWisdom
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => navigate('/pricing')}
            sx={{ mt: 2, minWidth: 200 }}
          >
            View Pricing Plans
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}
