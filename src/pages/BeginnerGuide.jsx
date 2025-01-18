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
  Nature,
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
    icon: <Nature />
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
    description: 'Master the fundamental principles of farming with hands-on guidance',
    modules: [
      {
        title: 'Understanding Soil Health',
        image: '/images/soil-health.jpg',
        topics: [
          'Soil composition and structure',
          'pH levels and testing',
          'Organic matter importance',
          'Nutrient cycles'
        ]
      },
      {
        title: 'Basic Plant Care',
        image: '/images/basic-plant-care.jpg',
        topics: [
          'Seed selection and storage',
          'Planting techniques',
          'Growth stages monitoring',
          'Basic troubleshooting'
        ]
      },
      {
        title: 'Water Management',
        image: '/images/water-management.jpg',
        topics: [
          'Watering schedules',
          'Moisture monitoring',
          'Conservation techniques',
          'Drainage solutions'
        ]
      },
      {
        title: 'Season Planning',
        image: '/images/season-planning.jpg',
        topics: [
          'Climate considerations',
          'Planting calendars',
          'Frost protection',
          'Harvest timing'
        ]
      }
    ]
  },
  {
    title: 'Intermediate Skills',
    description: 'Expand your farming knowledge with advanced techniques',
    modules: [
      {
        title: 'Crop Rotation',
        image: '/images/crop-rotation.jpg',
        topics: [
          'Rotation planning',
          'Companion planting',
          'Soil improvement',
          'Pest prevention'
        ]
      },
      {
        title: 'Pest Management',
        image: '/images/pest-management.jpg',
        topics: [
          'Identification guides',
          'Natural solutions',
          'Prevention strategies',
          'Beneficial insects'
        ]
      },
      {
        title: 'Irrigation Systems',
        image: '/images/irrigation-systems.jpg',
        topics: [
          'System types',
          'Installation guides',
          'Maintenance tips',
          'Water efficiency'
        ]
      },
      {
        title: 'Market Planning',
        image: '/images/market-planning.jpg',
        topics: [
          'Market research',
          'Pricing strategies',
          'Distribution channels',
          'Customer relations'
        ]
      }
    ]
  },
  {
    title: 'Advanced Techniques',
    description: 'Leverage technology and data for optimal farming results',
    modules: [
      {
        title: 'Precision Agriculture',
        image: '/images/precision-agriculture.jpg',
        topics: [
          'GPS mapping',
          'Soil sampling',
          'Variable rate application',
          'Yield monitoring'
        ]
      },
      {
        title: 'Farm Automation',
        image: '/images/farm-automation.jpg',
        topics: [
          'Smart irrigation',
          'Climate control',
          'Automated feeders',
          'Monitoring systems'
        ]
      },
      {
        title: 'Data Analytics',
        image: '/images/data-analytics.jpg',
        topics: [
          'Data collection',
          'Performance metrics',
          'Trend analysis',
          'Decision support'
        ]
      },
      {
        title: 'Sustainable Practices',
        image: '/images/sustainable-practices.jpg',
        topics: [
          'Resource optimization',
          'Carbon footprint',
          'Renewable energy',
          'Waste management'
        ]
      }
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
        <>
          <Grid container spacing={4}>
            {learningPaths.map((path) => (
              <Grid item xs={12} key={path.title}>
                <Paper 
                  sx={{ 
                    p: 3, 
                    mb: 3,
                    ...(path.pro && {
                      border: '2px solid',
                      borderColor: 'primary.main',
                    })
                  }}
                >
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h4" gutterBottom>
                      {path.title}
                      {path.pro && (
                        <Chip
                          label="PRO"
                          color="primary"
                          size="small"
                          sx={{ ml: 2 }}
                        />
                      )}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" gutterBottom>
                      {path.description}
                    </Typography>
                  </Box>
                  
                  <Grid container spacing={3}>
                    {path.modules.map((module) => (
                      <Grid item xs={12} md={6} lg={3} key={module.title}>
                        <Card sx={{ height: '100%' }}>
                          <CardMedia
                            component="img"
                            height="160"
                            image={module.image}
                            alt={module.title}
                          />
                          <CardContent>
                            <Typography variant="h6" gutterBottom>
                              {module.title}
                            </Typography>
                            <List dense>
                              {module.topics.map((topic) => (
                                <ListItem key={topic}>
                                  <ListItemIcon>
                                    <ChevronRight color="primary" />
                                  </ListItemIcon>
                                  <ListItemText primary={topic} />
                                </ListItem>
                              ))}
                            </List>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                  
                  {path.pro && (
                    <Box sx={{ mt: 3, textAlign: 'center' }}>
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={() => navigate('/pricing')}
                        startIcon={<ArrowUpward />}
                      >
                        Upgrade to Access Advanced Content
                      </Button>
                    </Box>
                  )}
                </Paper>
              </Grid>
            ))}
          </Grid>

          {/* Quick Start Guide */}
          <Paper sx={{ p: 4, mt: 4, backgroundColor: 'primary.main', color: 'white' }}>
            <Typography variant="h4" gutterBottom>
              Quick Start Guide
            </Typography>
            <Typography variant="subtitle1" paragraph>
              Not sure where to begin? Follow our recommended learning path:
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Agriculture sx={{ fontSize: 40 }} />
                <Box>
                  <Typography variant="h6">Week 1-2: Fundamentals</Typography>
                  <Typography>Master soil basics and plant care essentials</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Water sx={{ fontSize: 40 }} />
                <Box>
                  <Typography variant="h6">Week 3-4: Water & Planning</Typography>
                  <Typography>Learn irrigation basics and season planning</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Build sx={{ fontSize: 40 }} />
                <Box>
                  <Typography variant="h6">Month 2: Intermediate Skills</Typography>
                  <Typography>Explore crop rotation and pest management</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Timeline sx={{ fontSize: 40 }} />
                <Box>
                  <Typography variant="h6">Month 3+: Advanced Techniques</Typography>
                  <Typography>Dive into precision farming and analytics</Typography>
                </Box>
              </Box>
            </Box>
          </Paper>
        </>
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
