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
  Collapse,
  CardActions
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
  BarChart,
  ArrowUpward
} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';

const farmingTypes = [
  {
    title: 'Traditional Farming',
    image: '/images/traditional-farming.jpg',
    description: 'Time-tested methods passed down through generations',
    benefits: [
      'Lower initial investment',
      'Natural farming practices',
      'Time-tested techniques',
      'Community knowledge sharing'
    ],
    icon: <Agriculture />
  },
  {
    title: 'Organic Farming',
    image: '/images/organic-farming.jpg',
    description: 'Sustainable farming without synthetic inputs',
    benefits: [
      'Premium market prices',
      'Environmental sustainability',
      'Healthier produce',
      'Growing market demand'
    ],
    icon: <Eco />
  },
  {
    title: 'Hydroponic Farming',
    image: '/images/hydroponic-farming.jpg',
    description: 'Soil-less farming with controlled environments',
    benefits: [
      'Year-round production',
      'Water efficiency',
      'Space optimization',
      'Precise nutrient control'
    ],
    icon: <Water />
  },
  {
    title: 'Smart Farming',
    image: '/images/smart-farming.jpg',
    description: 'Technology-driven precision agriculture',
    benefits: [
      'Data-driven decisions',
      'Automated processes',
      'Resource optimization',
      'Higher yields'
    ],
    icon: <Build />,
    pro: true
  }
];

const learningPaths = [
  {
    title: 'Beginner Basics',
    modules: [
      'Understanding Soil Health',
      'Basic Plant Care',
      'Water Management',
      'Season Planning'
    ]
  },
  {
    title: 'Intermediate Skills',
    modules: [
      'Crop Rotation',
      'Pest Management',
      'Irrigation Systems',
      'Market Planning'
    ]
  },
  {
    title: 'Advanced Techniques',
    modules: [
      'Precision Agriculture',
      'Farm Automation',
      'Data Analytics',
      'Sustainable Practices'
    ],
    pro: true
  }
];

const seasonalGuides = [
  {
    season: 'Spring',
    icon: <LocalFlorist />,
    image: '/images/spring-farming.jpg',
    tasks: [
      'Soil preparation',
      'Seed starting',
      'Early planting',
      'Frost protection'
    ]
  },
  {
    season: 'Summer',
    icon: <WbSunny />,
    image: '/images/summer-farming.jpg',
    tasks: [
      'Irrigation management',
      'Pest control',
      'Succession planting',
      'Heat management'
    ]
  },
  {
    season: 'Fall',
    icon: <Park />,
    image: '/images/fall-farming.jpg',
    tasks: [
      'Harvest planning',
      'Soil amendments',
      'Cover cropping',
      'Storage preparation'
    ]
  },
  {
    season: 'Winter',
    icon: <Science />,
    image: '/images/winter-farming.jpg',
    tasks: [
      'Equipment maintenance',
      'Planning next season',
      'Market research',
      'Skill development'
    ],
    pro: true
  }
];

const analyticsTools = [
  {
    title: 'Yield Tracking',
    description: 'Monitor and analyze crop yields',
    icon: <Timeline />,
    image: '/images/yield-tracking.jpg',
    pro: true
  },
  {
    title: 'Cost Analysis',
    description: 'Track expenses and revenue',
    icon: <BarChart />,
    image: '/images/cost-analysis.jpg',
    pro: true
  }
];

function BeginnerGuide() {
  const [activeTab, setActiveTab] = useState(0);
  const [expanded, setExpanded] = useState({});
  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleExpandClick = (index) => {
    setExpanded({ ...expanded, [index]: !expanded[index] });
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Hero Section */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
          Your Journey to Successful Farming
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Discover different farming approaches and find your path to success
        </Typography>
      </Box>
      
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs 
          value={activeTab} 
          onChange={handleTabChange} 
          aria-label="guide sections"
          variant="fullWidth"
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab label="Farming Types" icon={<Agriculture />} />
          <Tab label="Learning Paths" icon={<Timeline />} />
          <Tab label="Seasonal Guides" icon={<WbSunny />} />
          <Tab label="Analytics & Tools" icon={<BarChart />} />
        </Tabs>
      </Box>

      {/* Farming Types */}
      {activeTab === 0 && (
        <Grid container spacing={3}>
          {farmingTypes.map((type, index) => (
            <Grid item xs={12} md={6} key={type.title}>
              <Card 
                sx={{ 
                  height: '100%',
                  ...(type.pro && {
                    border: '2px solid',
                    borderColor: 'primary.main',
                  })
                }}
              >
                <CardActionArea onClick={() => handleExpandClick(index)}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={type.image}
                    alt={type.title}
                  />
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Box sx={{ color: 'primary.main', mr: 1 }}>{type.icon}</Box>
                      <Typography variant="h5">
                        {type.title}
                      </Typography>
                      {type.pro && (
                        <Chip
                          label="PRO"
                          color="primary"
                          size="small"
                          sx={{ ml: 1 }}
                        />
                      )}
                    </Box>
                    <Typography color="text.secondary" variant="subtitle1">
                      {type.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <Collapse in={expanded[index]}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>Key Benefits:</Typography>
                    <List>
                      {type.benefits.map((benefit) => (
                        <ListItem key={benefit}>
                          <ListItemIcon>
                            <ChevronRight color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={benefit} />
                        </ListItem>
                      ))}
                    </List>
                    {type.pro && (
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={() => navigate('/pricing')}
                        sx={{ mt: 2 }}
                      >
                        Upgrade to Access
                      </Button>
                    )}
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Learning Paths */}
      {activeTab === 1 && (
        <Grid container spacing={3}>
          {learningPaths.map((path) => (
            <Grid item xs={12} md={4} key={path.title}>
              <Card 
                sx={{ 
                  height: '100%',
                  ...(path.pro && {
                    border: '2px solid',
                    borderColor: 'primary.main',
                  })
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h5" component="h2">
                      {path.title}
                    </Typography>
                    {path.pro && (
                      <Chip
                        label="PRO"
                        color="primary"
                        size="small"
                        sx={{ ml: 1 }}
                      />
                    )}
                  </Box>
                  <List>
                    {path.modules.map((module) => (
                      <ListItem key={module}>
                        <ListItemIcon>
                          <ChevronRight color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={module} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
                {path.pro && (
                  <CardActions>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      onClick={() => navigate('/pricing')}
                    >
                      Upgrade to Access
                    </Button>
                  </CardActions>
                )}
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Seasonal Guides */}
      {activeTab === 2 && (
        <Grid container spacing={3}>
          {seasonalGuides.map((season) => (
            <Grid item xs={12} md={3} key={season.season}>
              <Card 
                sx={{ 
                  height: '100%',
                  ...(season.pro && {
                    border: '2px solid',
                    borderColor: 'primary.main',
                  })
                }}
              >
                <CardMedia
                  component="img"
                  height="160"
                  image={season.image}
                  alt={`${season.season} Farming`}
                />
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ color: 'primary.main', mr: 1 }}>{season.icon}</Box>
                    <Typography variant="h5">
                      {season.season}
                    </Typography>
                    {season.pro && (
                      <Chip
                        label="PRO"
                        color="primary"
                        size="small"
                        sx={{ ml: 1 }}
                      />
                    )}
                  </Box>
                  <List>
                    {season.tasks.map((task) => (
                      <ListItem key={task}>
                        <ListItemIcon>
                          <ChevronRight color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={task} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
                {season.pro && (
                  <CardActions>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      onClick={() => navigate('/pricing')}
                    >
                      Upgrade to Access
                    </Button>
                  </CardActions>
                )}
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Analytics & Tools */}
      {activeTab === 3 && (
        <>
          <Grid container spacing={3}>
            {analyticsTools.map((tool) => (
              <Grid item xs={12} md={6} key={tool.title}>
                <Card 
                  sx={{ 
                    height: '100%',
                    ...(tool.pro && {
                      border: '2px solid',
                      borderColor: 'primary.main',
                    })
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={tool.image}
                    alt={tool.title}
                  />
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box sx={{ color: 'primary.main', mr: 1 }}>{tool.icon}</Box>
                      <Typography variant="h5">
                        {tool.title}
                      </Typography>
                      {tool.pro && (
                        <Chip
                          label="PRO"
                          color="primary"
                          size="small"
                          sx={{ ml: 1 }}
                        />
                      )}
                    </Box>
                    <Typography color="text.secondary" variant="subtitle1">
                      {tool.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      onClick={() => navigate('/pricing')}
                    >
                      Upgrade to Access
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Pro Features Highlight */}
          <Paper sx={{ mt: 4, p: 4, backgroundColor: 'primary.main', color: 'white' }}>
            <Typography variant="h4" gutterBottom>
              Unlock Professional Analytics
            </Typography>
            <Typography variant="subtitle1" paragraph>
              Take your farming to the next level with advanced analytics and tools
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => navigate('/pricing')}
              startIcon={<ArrowUpward />}
            >
              Upgrade to Pro
            </Button>
          </Paper>
        </>
      )}

      {/* Bottom CTA */}
      <Paper sx={{ mt: 6, p: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Ready to enhance your farming journey?
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          Get access to all premium features and take your farming to the next level
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => navigate('/pricing')}
          sx={{ minWidth: 200 }}
        >
          View Pricing Plans
        </Button>
      </Paper>
    </Container>
  );
}

export default BeginnerGuide;
