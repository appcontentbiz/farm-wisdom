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
    icon: <Agriculture />,
    description: 'Time-tested methods passed down through generations',
    benefits: [
      'Proven techniques',
      'Lower initial costs',
      'Natural processes',
      'Community knowledge'
    ],
    guide: {
      basics: [
        'Understanding soil composition',
        'Natural pest control methods',
        'Crop rotation principles',
        'Water conservation'
      ],
      equipment: [
        'Basic hand tools',
        'Manual irrigation systems',
        'Natural fertilizers',
        'Storage solutions'
      ],
      crops: [
        'Root vegetables',
        'Leafy greens',
        'Grains and cereals',
        'Fruit trees'
      ],
      tips: [
        'Start with local varieties',
        'Learn from experienced farmers',
        'Keep detailed records',
        'Practice sustainable methods'
      ]
    }
  },
  {
    title: 'Urban Farming',
    image: '/images/urban-farming.jpg',
    icon: <Home />,
    description: 'Modern solutions for city-based agriculture',
    benefits: [
      'Space efficiency',
      'Year-round growing',
      'Fresh local produce',
      'Community building'
    ],
    guide: {
      basics: [
        'Container gardening',
        'Vertical farming techniques',
        'Light management',
        'Space optimization'
      ],
      equipment: [
        'Growing containers',
        'Vertical structures',
        'LED grow lights',
        'Automated watering systems'
      ],
      crops: [
        'Herbs',
        'Microgreens',
        'Dwarf vegetables',
        'Climbing plants'
      ],
      tips: [
        'Maximize sunlight exposure',
        'Use companion planting',
        'Monitor water carefully',
        'Focus on high-value crops'
      ]
    }
  },
  {
    title: 'Smart Farming',
    image: '/images/smart-farming.jpg',
    icon: <Science />,
    description: 'Technology-driven precision agriculture',
    benefits: [
      'Data-driven decisions',
      'Resource optimization',
      'Higher yields',
      'Reduced waste'
    ],
    guide: {
      basics: [
        'Sensor deployment',
        'Data collection methods',
        'Automation basics',
        'System integration'
      ],
      equipment: [
        'IoT sensors',
        'Automated systems',
        'Mobile apps',
        'Weather stations'
      ],
      crops: [
        'High-value crops',
        'Research varieties',
        'Climate-adapted plants',
        'Experimental hybrids'
      ],
      tips: [
        'Regular system maintenance',
        'Data backup practices',
        'Stay updated with tech',
        'Network with experts'
      ]
    }
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
          'pH testing and adjustment',
          'Organic matter management',
          'Nutrient cycles and balance',
          'Soil microorganisms',
          'Composting techniques',
          'Soil improvement strategies',
          'Erosion prevention'
        ]
      },
      {
        title: 'Basic Plant Care',
        image: '/images/plant-care-guide.jpg',
        topics: [
          'Seed selection and storage',
          'Proper planting techniques',
          'Growth stage monitoring',
          'Watering requirements',
          'Fertilization schedules',
          'Pruning methods',
          'Disease identification',
          'Plant stress management'
        ]
      },
      {
        title: 'Water Management',
        image: '/images/water-guide.jpg',
        topics: [
          'Irrigation system types',
          'Water conservation methods',
          'Rainwater harvesting',
          'Moisture monitoring',
          'Drainage solutions',
          'Water quality testing',
          'Drought management',
          'Sustainable practices'
        ]
      },
      {
        title: 'Season Planning',
        image: '/images/season-guide.jpg',
        topics: [
          'Climate zone understanding',
          'Planting calendars',
          'Frost protection methods',
          'Succession planting',
          'Crop rotation planning',
          'Weather monitoring',
          'Season extension techniques',
          'Harvest scheduling'
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
        image: '/images/crop-guide.jpg',
        topics: [
          'Rotation planning basics',
          'Plant family groups',
          'Soil improvement cycles',
          'Companion planting',
          'Cover crop integration',
          'Nutrient management',
          'Pest prevention strategies',
          'Yield optimization'
        ]
      },
      {
        title: 'Pest Management',
        image: '/images/pest-guide.jpg',
        topics: [
          'Common pest identification',
          'Natural control methods',
          'Beneficial insects',
          'Integrated pest management',
          'Disease prevention',
          'Organic solutions',
          'Monitoring techniques',
          'Prevention strategies'
        ]
      },
      {
        title: 'Irrigation Systems',
        image: '/images/irrigation-guide.jpg',
        topics: [
          'System types and selection',
          'Installation guidelines',
          'Maintenance procedures',
          'Water efficiency metrics',
          'Automated systems',
          'Troubleshooting guide',
          'Seasonal adjustments',
          'Cost optimization'
        ]
      },
      {
        title: 'Market Planning',
        image: '/images/market-guide.jpg',
        topics: [
          'Market research methods',
          'Pricing strategies',
          'Distribution channels',
          'Customer relationships',
          'Product presentation',
          'Sales tracking',
          'Marketing techniques',
          'Business planning'
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
        image: '/images/precision-guide.jpg',
        topics: [
          'GPS mapping systems',
          'Soil sampling methods',
          'Variable rate application',
          'Yield monitoring tools',
          'Data collection systems',
          'Remote sensing',
          'Equipment calibration',
          'Analysis techniques'
        ]
      },
      {
        title: 'Farm Automation',
        image: '/images/automation-guide.jpg',
        topics: [
          'Smart irrigation systems',
          'Climate control methods',
          'Automated feeding systems',
          'Monitoring equipment',
          'System integration',
          'Data logging',
          'Remote management',
          'Maintenance protocols'
        ]
      },
      {
        title: 'Data Analytics',
        image: '/images/analytics-guide.jpg',
        topics: [
          'Data collection methods',
          'Performance metrics',
          'Trend analysis',
          'Predictive modeling',
          'Resource optimization',
          'ROI calculations',
          'Reporting systems',
          'Decision support tools'
        ]
      },
      {
        title: 'Sustainable Practices',
        image: '/images/sustainable-practices.jpg',
        topics: [
          'Resource optimization',
          'Carbon footprint reduction',
          'Renewable energy integration',
          'Waste management',
          'Water conservation',
          'Biodiversity promotion',
          'Soil conservation',
          'Eco-certification'
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
                            {Object.entries(type.guide).map(([section, items]) => (
                              <Grid item xs={12} md={6} key={section}>
                                <Typography variant="subtitle1" color="primary" gutterBottom sx={{ textTransform: 'capitalize' }}>
                                  {section}:
                                </Typography>
                                <List dense>
                                  {items.map((item) => (
                                    <ListItem key={item}>
                                      <ListItemIcon>
                                        <ChevronRight color="primary" fontSize="small" />
                                      </ListItemIcon>
                                      <ListItemText primary={item} />
                                    </ListItem>
                                  ))}
                                </List>
                              </Grid>
                            ))}
                          </Grid>
                        </>
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
                  }}
                >
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h4" gutterBottom>
                      {path.title}
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
