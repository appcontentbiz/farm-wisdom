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
    pro: true
  },
  {
    title: 'Cost Analysis',
    description: 'Track expenses and revenue',
    icon: <BarChart />,
    pro: true
  }
];

function BeginnerGuide() {
  const [activeTab, setActiveTab] = useState(0);
  const [expanded, setExpanded] = useState({});

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleExpandClick = (index) => {
    setExpanded({ ...expanded, [index]: !expanded[index] });
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Beginner's Guide to Farming
      </Typography>
      
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={activeTab} onChange={handleTabChange} aria-label="guide sections">
          <Tab label="Farming Types" />
          <Tab label="Learning Paths" />
          <Tab label="Seasonal Guides" />
          <Tab label="Analytics & Tools" />
        </Tabs>
      </Box>

      {/* Farming Types */}
      {activeTab === 0 && (
        <Grid container spacing={3}>
          {farmingTypes.map((type, index) => (
            <Grid item xs={12} md={6} key={type.title}>
              <Card>
                <CardActionArea onClick={() => handleExpandClick(index)}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={type.image}
                    alt={type.title}
                  />
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      {type.icon}
                      <Typography variant="h6" sx={{ ml: 1 }}>
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
                    <Typography color="text.secondary">
                      {type.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <Collapse in={expanded[index]}>
                  <CardContent>
                    <List>
                      {type.benefits.map((benefit) => (
                        <ListItem key={benefit}>
                          <ListItemIcon>
                            <ChevronRight />
                          </ListItemIcon>
                          <ListItemText primary={benefit} />
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

      {/* Learning Paths */}
      {activeTab === 1 && (
        <Grid container spacing={3}>
          {learningPaths.map((path) => (
            <Grid item xs={12} md={4} key={path.title}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {path.title}
                    {path.pro && (
                      <Chip
                        label="PRO"
                        color="primary"
                        size="small"
                        sx={{ ml: 1 }}
                      />
                    )}
                  </Typography>
                  <List>
                    {path.modules.map((module) => (
                      <ListItem key={module}>
                        <ListItemIcon>
                          <ChevronRight />
                        </ListItemIcon>
                        <ListItemText primary={module} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
                {path.pro && (
                  <CardActions>
                    <Button
                      component={Link}
                      to="/pricing"
                      color="primary"
                      variant="contained"
                      fullWidth
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
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    {season.icon}
                    <Typography variant="h6" sx={{ ml: 1 }}>
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
                          <ChevronRight />
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
        <Grid container spacing={3}>
          {analyticsTools.map((tool) => (
            <Grid item xs={12} md={6} key={tool.title}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    {tool.icon}
                    <Typography variant="h6" sx={{ ml: 1 }}>
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
                  <Typography color="text.secondary">
                    {tool.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    component={Link}
                    to="/pricing"
                    color="primary"
                    variant="contained"
                    fullWidth
                  >
                    Upgrade to Access
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Call to Action */}
      <Paper sx={{ mt: 4, p: 3, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Ready to take your farming to the next level?
        </Typography>
        <Typography color="text.secondary" paragraph>
          Upgrade to PRO for access to advanced features, tools, and expert guidance.
        </Typography>
        <Button
          component={Link}
          to="/pricing"
          variant="contained"
          color="primary"
          size="large"
        >
          View Pricing Plans
        </Button>
      </Paper>
    </Container>
  );
}

export default BeginnerGuide;
