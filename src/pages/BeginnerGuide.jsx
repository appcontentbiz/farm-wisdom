import React, { useState } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Box,
  Button,
  Tabs,
  Tab,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  CardMedia,
  CardActionArea,
  IconButton,
  Collapse
} from '@mui/material';
import {
  Agriculture,
  WbSunny,
  Water,
  Eco,
  Build,
  People,
  ExpandMore,
  ChevronRight,
  LocalFlorist,
  Pets,
  Grass,
  EmojiNature,
  Park,
  Science,
  Timeline,
  BarChart
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const farmingTypes = [
  {
    title: 'Traditional Farming',
    image: '/images/traditional-farming.jpg',
    description: 'Time-tested methods passed down through generations',
    benefits: [
      'Lower initial investment',
      'Natural farming practices',
      'Proven techniques'
    ],
    challenges: [
      'Labor intensive',
      'Weather dependent',
      'Lower yields'
    ]
  },
  {
    title: 'Organic Farming',
    image: '/images/organic-farming.jpg',
    description: 'Chemical-free farming focusing on natural processes',
    benefits: [
      'Premium product prices',
      'Environmental sustainability',
      'Growing market demand'
    ],
    challenges: [
      'Certification process',
      'Pest management',
      'Initial yield reduction'
    ]
  },
  {
    title: 'Hydroponic Farming',
    image: '/images/hydroponic-farming.jpg',
    description: 'Soil-less farming using nutrient-rich water',
    benefits: [
      'Year-round production',
      'Water efficiency',
      'Space optimization'
    ],
    challenges: [
      'High setup costs',
      'Technical knowledge required',
      'Energy dependent'
    ]
  },
  {
    title: 'Smart Farming',
    image: '/images/smart-farming.jpg',
    description: 'Technology-driven precision agriculture',
    benefits: [
      'Data-driven decisions',
      'Resource optimization',
      'Higher yields'
    ],
    challenges: [
      'Initial investment',
      'Technical expertise needed',
      'Internet connectivity'
    ]
  }
];

const learningPaths = [
  {
    title: 'Fundamentals',
    icon: <Agriculture />,
    modules: [
      'Understanding Soil Health',
      'Basic Plant Biology',
      'Farm Planning 101',
      'Essential Tools & Equipment'
    ]
  },
  {
    title: 'Growing Techniques',
    icon: <LocalFlorist />,
    modules: [
      'Seed Selection & Storage',
      'Planting Methods',
      'Irrigation Systems',
      'Crop Rotation'
    ]
  },
  {
    title: 'Livestock Management',
    icon: <Pets />,
    modules: [
      'Animal Health Basics',
      'Feed Management',
      'Housing Requirements',
      'Breeding Fundamentals'
    ]
  },
  {
    title: 'Sustainable Practices',
    icon: <Eco />,
    modules: [
      'Composting Methods',
      'Natural Pest Control',
      'Water Conservation',
      'Soil Conservation'
    ]
  }
];

const seasonalGuides = {
  Spring: [
    'Soil preparation techniques',
    'Early season planting guide',
    'Frost protection methods',
    'Spring pest management'
  ],
  Summer: [
    'Irrigation scheduling',
    'Heat stress management',
    'Summer crop maintenance',
    'Pest and disease control'
  ],
  Fall: [
    'Harvest planning',
    'Fall crop selection',
    'Soil amendments',
    'Winter preparation'
  ],
  Winter: [
    'Greenhouse management',
    'Equipment maintenance',
    'Planning next season',
    'Winter crop options'
  ]
};

const BeginnerGuide = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [expandedCard, setExpandedCard] = useState(null);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleExpandClick = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Your Journey to Successful Farming
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Discover different farming approaches and find your path
        </Typography>
      </Box>

      <Paper sx={{ mb: 6 }}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Farming Types" icon={<Park />} />
          <Tab label="Learning Paths" icon={<Timeline />} />
          <Tab label="Seasonal Guides" icon={<WbSunny />} />
          <Tab label="Analytics & Tools" icon={<BarChart />} />
        </Tabs>
      </Paper>

      {/* Farming Types Tab */}
      {selectedTab === 0 && (
        <Grid container spacing={4}>
          {farmingTypes.map((type, index) => (
            <Grid item xs={12} md={6} key={type.title}>
              <Card>
                <CardActionArea onClick={() => handleExpandClick(index)}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={type.image}
                    alt={type.title}
                  />
                  <CardContent>
                    <Typography variant="h5" component="h2" gutterBottom>
                      {type.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {type.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <Collapse in={expandedCard === index}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>Benefits:</Typography>
                    <List dense>
                      {type.benefits.map((benefit) => (
                        <ListItem key={benefit}>
                          <ListItemIcon>
                            <ChevronRight color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={benefit} />
                        </ListItem>
                      ))}
                    </List>
                    <Typography variant="h6" gutterBottom>Challenges:</Typography>
                    <List dense>
                      {type.challenges.map((challenge) => (
                        <ListItem key={challenge}>
                          <ListItemIcon>
                            <ChevronRight color="error" />
                          </ListItemIcon>
                          <ListItemText primary={challenge} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Learning Paths Tab */}
      {selectedTab === 1 && (
        <Grid container spacing={4}>
          {learningPaths.map((path) => (
            <Grid item xs={12} md={6} key={path.title}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ mr: 2, color: 'primary.main' }}>{path.icon}</Box>
                    <Typography variant="h5" component="h2">
                      {path.title}
                    </Typography>
                  </Box>
                  <List>
                    {path.modules.map((module) => (
                      <ListItem key={module}>
                        <ListItemIcon>
                          <Chip
                            size="small"
                            label="PRO"
                            color="primary"
                            variant="outlined"
                          />
                        </ListItemIcon>
                        <ListItemText primary={module} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Seasonal Guides Tab */}
      {selectedTab === 2 && (
        <Grid container spacing={4}>
          {Object.entries(seasonalGuides).map(([season, guides]) => (
            <Grid item xs={12} md={6} key={season}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {season}
                  </Typography>
                  <List>
                    {guides.map((guide) => (
                      <ListItem key={guide}>
                        <ListItemIcon>
                          <EmojiNature color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={guide} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Analytics & Tools Tab */}
      {selectedTab === 3 && (
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Science sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
          <Typography variant="h5" gutterBottom>
            Advanced Tools & Analytics
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Unlock powerful tools and analytics to optimize your farming operations
          </Typography>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', backgroundColor: 'primary.light' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom color="primary.contrastText">
                    Soil Analysis
                  </Typography>
                  <Typography variant="body2" color="primary.contrastText">
                    Professional soil testing and recommendations
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', backgroundColor: 'secondary.light' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom color="secondary.contrastText">
                    Yield Predictions
                  </Typography>
                  <Typography variant="body2" color="secondary.contrastText">
                    AI-powered crop yield forecasting
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', backgroundColor: 'success.light' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom color="success.contrastText">
                    Market Analysis
                  </Typography>
                  <Typography variant="body2" color="success.contrastText">
                    Real-time market data and trends
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      )}

      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Ready to Take Your Farming to the Next Level?
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Get full access to all guides, tools, and expert support
        </Typography>
        <Button
          component={Link}
          to="/pricing"
          variant="contained"
          color="primary"
          size="large"
          sx={{ mr: 2 }}
        >
          View Pricing Plans
        </Button>
        <Button
          component={Link}
          to="/signup"
          variant="outlined"
          color="primary"
          size="large"
        >
          Start Free Trial
        </Button>
      </Box>
    </Container>
  );
};

export default BeginnerGuide;
