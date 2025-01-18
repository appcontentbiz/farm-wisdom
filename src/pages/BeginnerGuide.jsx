import React from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Button
} from '@mui/material';
import {
  Agriculture,
  WbSunny,
  Water,
  Eco,
  Build,
  People
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const guides = [
  {
    title: 'Getting Started',
    icon: <Agriculture />,
    items: [
      'Understanding basic farming concepts',
      'Choosing the right crops',
      'Planning your farm layout',
      'Essential equipment needed'
    ]
  },
  {
    title: 'Weather & Seasons',
    icon: <WbSunny />,
    items: [
      'Reading weather patterns',
      'Seasonal planting guide',
      'Frost protection',
      'Climate considerations'
    ]
  },
  {
    title: 'Soil & Water',
    icon: <Water />,
    items: [
      'Soil testing basics',
      'Irrigation methods',
      'Soil improvement techniques',
      'Water conservation'
    ]
  },
  {
    title: 'Crop Care',
    icon: <Eco />,
    items: [
      'Basic plant care',
      'Pest management',
      'Disease prevention',
      'Natural fertilizers'
    ]
  },
  {
    title: 'Tools & Equipment',
    icon: <Build />,
    items: [
      'Essential hand tools',
      'Basic machinery',
      'Tool maintenance',
      'Safety guidelines'
    ]
  },
  {
    title: 'Community & Resources',
    icon: <People />,
    items: [
      'Local farming groups',
      'Online resources',
      'Mentorship programs',
      'Farmers markets'
    ]
  }
];

const BeginnerGuide = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Beginner's Guide to Farming
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Start your farming journey with our comprehensive guides and resources.
      </Typography>

      <Grid container spacing={3}>
        {guides.map((guide) => (
          <Grid item xs={12} md={6} key={guide.title}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ mr: 2, color: 'primary.main' }}>{guide.icon}</Box>
                  <Typography variant="h6" component="h2">
                    {guide.title}
                  </Typography>
                </Box>
                <List>
                  {guide.items.map((item) => (
                    <ListItem key={item}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        •
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="body1" paragraph>
          Ready to take your farming to the next level?
        </Typography>
        <Button
          component={Link}
          to="/signup"
          variant="contained"
          color="primary"
          size="large"
        >
          Sign Up for Full Access
        </Button>
      </Box>
    </Container>
  );
};

export default BeginnerGuide;
