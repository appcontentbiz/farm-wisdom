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
  ArrowUpward,
  Home
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
    title: 'Urban Farming',
    image: '/images/urban-farming.jpg',
    description: 'Transform any space into a productive garden',
    benefits: [
      'No land required',
      'Year-round growing',
      'Fresh produce at home',
      'Perfect for beginners'
    ],
    guide: {
      basics: [
        'Choose your space: Balcony, rooftop, or windowsill',
        'Select container-friendly crops',
        'Set up proper drainage systems',
        'Maximize sunlight exposure'
      ],
      equipment: [
        'Containers and grow bags',
        'Quality potting soil',
        'Basic hand tools',
        'Watering system'
      ],
      crops: [
        'Herbs: Basil, mint, parsley',
        'Greens: Lettuce, spinach, kale',
        'Vegetables: Tomatoes, peppers',
        'Edible flowers'
      ],
      tips: [
        'Use vertical space efficiently',
        'Practice companion planting',
        'Implement water conservation',
        'Start small and expand gradually'
      ]
    },
    icon: <Home />
  },
  {
    title: 'Microgreens Farming',
    image: '/images/microgreens-farming.jpg',
    description: 'Grow nutrient-dense miniature vegetables',
    benefits: [
      'Quick harvest cycles',
      'High nutritional value',
      'Minimal space needed',
      'Year-round production'
    ],
    guide: {
      basics: [
        'Understanding growth stages',
        'Selecting seed varieties',
        'Creating ideal growing conditions',
        'Harvesting techniques'
      ],
      equipment: [
        'Growing trays and mats',
        'LED grow lights',
        'Humidity dome',
        'Fine misting system'
      ],
      crops: [
        'Brassicas: Broccoli, radish',
        'Herbs: Cilantro, basil',
        'Grains: Wheat, corn',
        'Legumes: Peas, beans'
      ],
      tips: [
        'Maintain proper air circulation',
        'Monitor humidity levels',
        'Keep growing medium moist',
        'Practice proper sanitization'
      ]
    },
    icon: <LocalFlorist />
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

const professionalFeatures = {
  title: 'Professional Farm-to-Wellness Program',
  description: 'Comprehensive approach to farming, health, and sustainability',
  modules: [
    {
      title: 'Holistic Farming Practices',
      image: '/images/holistic-farming.jpg',
      topics: [
        'Biodynamic farming principles',
        'Ecosystem balance',
        'Natural pest management',
        'Soil vitality enhancement'
      ]
    },
    {
      title: 'Farm-to-Table Nutrition',
      image: '/images/farm-nutrition.jpg',
      topics: [
        'Nutrient density optimization',
        'Crop nutritional profiles',
        'Harvest timing for nutrients',
        'Storage best practices'
      ]
    },
    {
      title: 'Wellness Integration',
      image: '/images/wellness-farming.jpg',
      topics: [
        'Medicinal herb growing',
        'Therapeutic gardens',
        'Stress-reducing layouts',
        'Mindful farming practices'
      ]
    },
    {
      title: 'Farm Fitness Program',
      image: '/images/farm-fitness.jpg',
      topics: [
        'Ergonomic farming techniques',
        'Strength-building activities',
        'Injury prevention',
        'Recovery practices'
      ]
    }
  ],
  analytics: {
    health: [
      'Personal wellness metrics',
      'Activity tracking',
      'Nutrition analysis',
      'Progress monitoring'
    ],
    business: [
      'Revenue forecasting',
      'Expense tracking',
      'Inventory management',
      'Market trend analysis'
    ],
    sustainability: [
      'Carbon footprint tracking',
      'Resource usage analytics',
      'Waste reduction metrics',
      'Environmental impact scores'
    ]
  },
  netsuiteLikeFeatures: {
    financial: [
      'Real-time financial reporting',
      'Automated billing and invoicing',
      'Multi-currency support',
      'Tax compliance tools'
    ],
    inventory: [
      'Seed-to-sale tracking',
      'Automated reordering',
      'Batch tracking',
      'Expiration management'
    ],
    crm: [
      'Customer relationship management',
      'Sales pipeline tracking',
      'Marketing automation',
      'Support ticket system'
    ],
    operations: [
      'Workflow automation',
      'Document management',
      'Employee scheduling',
      'Equipment maintenance'
    ]
  }
};

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
        <>
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
                      {type.guide && (
                        <>
                          <Divider sx={{ my: 2 }} />
                          <Typography variant="h6" gutterBottom>Complete Guide:</Typography>
                          <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                              <Typography variant="subtitle1" color="primary" gutterBottom>
                                Getting Started
                              </Typography>
                              <List dense>
                                {type.guide.basics.map((item) => (
                                  <ListItem key={item}>
                                    <ListItemIcon>
                                      <ChevronRight color="primary" />
                                    </ListItemIcon>
                                    <ListItemText primary={item} />
                                  </ListItem>
                                ))}
                              </List>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Typography variant="subtitle1" color="primary" gutterBottom>
                                Essential Equipment
                              </Typography>
                              <List dense>
                                {type.guide.equipment.map((item) => (
                                  <ListItem key={item}>
                                    <ListItemIcon>
                                      <ChevronRight color="primary" />
                                    </ListItemIcon>
                                    <ListItemText primary={item} />
                                  </ListItem>
                                ))}
                              </List>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Typography variant="subtitle1" color="primary" gutterBottom>
                                Recommended Crops
                              </Typography>
                              <List dense>
                                {type.guide.crops.map((item) => (
                                  <ListItem key={item}>
                                    <ListItemIcon>
                                      <ChevronRight color="primary" />
                                    </ListItemIcon>
                                    <ListItemText primary={item} />
                                  </ListItem>
                                ))}
                              </List>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Typography variant="subtitle1" color="primary" gutterBottom>
                                Pro Tips
                              </Typography>
                              <List dense>
                                {type.guide.tips.map((item) => (
                                  <ListItem key={item}>
                                    <ListItemIcon>
                                      <ChevronRight color="primary" />
                                    </ListItemIcon>
                                    <ListItemText primary={item} />
                                  </ListItem>
                                ))}
                              </List>
                            </Grid>
                          </Grid>
                        </>
                      )}
                      {type.pro && (
                        <Box sx={{ mt: 2 }}>
                          <Divider sx={{ my: 2 }} />
                          <Typography variant="h6" gutterBottom>Professional Features:</Typography>
                          <Grid container spacing={2}>
                            {Object.entries(professionalFeatures.netsuiteLikeFeatures).map(([category, items]) => (
                              <Grid item xs={12} md={6} key={category}>
                                <Typography variant="subtitle1" color="primary" gutterBottom>
                                  {category.charAt(0).toUpperCase() + category.slice(1)}
                                </Typography>
                                <List dense>
                                  {items.map((item) => (
                                    <ListItem key={item}>
                                      <ListItemIcon>
                                        <ChevronRight color="primary" />
                                      </ListItemIcon>
                                      <ListItemText primary={item} />
                                    </ListItem>
                                  ))}
                                </List>
                              </Grid>
                            ))}
                          </Grid>
                          <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={() => navigate('/pricing')}
                            sx={{ mt: 2 }}
                          >
                            Upgrade to Access
                          </Button>
                        </Box>
                      )}
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Professional Wellness Section */}
          <Paper sx={{ p: 4, mt: 4, backgroundColor: 'primary.main', color: 'white' }}>
            <Typography variant="h4" gutterBottom>
              Farm-to-Wellness Program (PRO)
            </Typography>
            <Typography variant="subtitle1" paragraph>
              Transform your farming journey into a complete wellness lifestyle
            </Typography>
            <Grid container spacing={3}>
              {professionalFeatures.modules.map((module) => (
                <Grid item xs={12} md={6} lg={3} key={module.title}>
                  <Card>
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
                              <ChevronRight />
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
            <Box sx={{ mt: 3, textAlign: 'center' }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={() => navigate('/pricing')}
                startIcon={<ArrowUpward />}
              >
                Upgrade to Access Wellness Program
              </Button>
            </Box>
          </Paper>
        </>
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
