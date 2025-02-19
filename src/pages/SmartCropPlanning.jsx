import React, { useState } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Box,
  LinearProgress,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip,
  Paper,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stepper,
  Step,
  StepLabel,
  StepContent
} from '@mui/material';
import OpacityIcon from '@mui/icons-material/Opacity';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import BiotechIcon from '@mui/icons-material/Biotech';
import BugReportIcon from '@mui/icons-material/BugReport';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import ParkIcon from '@mui/icons-material/Park';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import UpdateIcon from '@mui/icons-material/Update';
import BuildIcon from '@mui/icons-material/Build';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ScienceIcon from '@mui/icons-material/Science';
import LightModeIcon from '@mui/icons-material/LightMode';
import RecyclingIcon from '@mui/icons-material/Recycling';
import AirIcon from '@mui/icons-material/Air';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import CloudIcon from '@mui/icons-material/Cloud';
import CloseIcon from '@mui/icons-material/Close';
import SensorsIcon from '@mui/icons-material/Sensors';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import DroneIcon from '@mui/icons-material/FlightTakeoff';
import RouterIcon from '@mui/icons-material/Router';
import ThermostatAutoIcon from '@mui/icons-material/ThermostatAuto';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import TimelineIcon from '@mui/icons-material/Timeline';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';

export default function SmartCropPlanning() {
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [insightDialogOpen, setInsightDialogOpen] = useState(false);
  const [selectedInsight, setSelectedInsight] = useState(null);
  const [selectedInsightType, setSelectedInsightType] = useState(null);
  const [implementationOpen, setImplementationOpen] = useState(false);

  const alerts = [
    {
      type: 'warning',
      title: 'Frost Warning',
      message: 'Potential frost conditions expected tonight. Consider protective measures for sensitive crops.'
    },
    {
      type: 'info',
      title: 'Optimal Planting Time',
      message: 'Next week will provide ideal conditions for planting winter vegetables.'
    }
  ];

  const activeCrops = [
    {
      name: 'Tomatoes',
      moisture: 75,
      temperature: 24,
      pestRisk: 'Low',
      health: 90
    },
    {
      name: 'Lettuce',
      moisture: 65,
      temperature: 18,
      pestRisk: 'Medium',
      health: 85
    },
    {
      name: 'Carrots',
      moisture: 70,
      temperature: 20,
      pestRisk: 'Low',
      health: 95
    },
    {
      name: 'Bell Peppers',
      moisture: 68,
      temperature: 23,
      pestRisk: 'Medium',
      health: 88
    },
    {
      name: 'Spinach',
      moisture: 72,
      temperature: 17,
      pestRisk: 'Low',
      health: 92
    },
    {
      name: 'Cucumbers',
      moisture: 78,
      temperature: 22,
      pestRisk: 'Low',
      health: 87
    },
    {
      name: 'Broccoli',
      moisture: 70,
      temperature: 19,
      pestRisk: 'Medium',
      health: 89
    },
    {
      name: 'Sweet Potatoes',
      moisture: 65,
      temperature: 21,
      pestRisk: 'Low',
      health: 94
    },
    {
      name: 'Green Beans',
      moisture: 73,
      temperature: 20,
      pestRisk: 'Low',
      health: 91
    },
    {
      name: 'Eggplant',
      moisture: 69,
      temperature: 23,
      pestRisk: 'Medium',
      health: 86
    }
  ];

  const cropSpecificInsights = {
    'Bell Peppers': {
      sustainablePractices: [
        'Companion planting with basil and marigolds',
        'Natural calcium supplementation for strong growth',
        'Vertical growing systems for space optimization'
      ],
      aiInsights: [
        'Disease prediction based on humidity patterns',
        'Automated pollination monitoring',
        'Yield prediction using computer vision'
      ],
      waterManagement: [
        'Precision drip irrigation scheduling',
        'Mulching recommendations',
        'Water stress monitoring'
      ]
    },
    'Tomatoes': {
      sustainablePractices: [
        'Companion planting with carrots and basil',
        'Natural pest control using neem oil',
        'Sustainable trellising methods'
      ],
      aiInsights: [
        'Early blight detection using image analysis',
        'Growth rate optimization',
        'Nutrient deficiency prediction'
      ],
      waterManagement: [
        'Smart watering based on fruit development stage',
        'Soil moisture threshold monitoring',
        'Root zone irrigation optimization'
      ]
    },
    'Lettuce': {
      sustainablePractices: [
        'Intercropping with tall plants for shade',
        'Organic pest management using beneficial insects',
        'Succession planting schedule'
      ],
      aiInsights: [
        'Leaf quality assessment via computer vision',
        'Harvest time prediction',
        'Growth rate analysis'
      ],
      waterManagement: [
        'Misting system automation',
        'Hydroponic solution monitoring',
        'Water quality management'
      ]
    },
    'Carrots': {
      sustainablePractices: [
        'Companion planting with onions and leeks',
        'Natural soil aeration techniques',
        'Cover cropping strategies'
      ],
      aiInsights: [
        'Root development monitoring using soil sensors',
        'Size and quality prediction',
        'Optimal harvest timing'
      ],
      waterManagement: [
        'Deep watering schedule optimization',
        'Soil moisture gradient monitoring',
        'Water retention improvement'
      ]
    },
    'Spinach': {
      sustainablePractices: [
        'Crop rotation with nitrogen-fixing plants',
        'Natural frost protection methods',
        'Organic fertilizer management'
      ],
      aiInsights: [
        'Leaf health monitoring',
        'Bolting prediction system',
        'Nutrient content analysis'
      ],
      waterManagement: [
        'Cool-season irrigation patterns',
        'Leaf moisture monitoring',
        'Drought stress prevention'
      ]
    },
    'Cucumbers': {
      sustainablePractices: [
        'Companion planting with sunflowers',
        'Natural pollinator attraction methods',
        'Vertical growing techniques'
      ],
      aiInsights: [
        'Vine growth pattern analysis',
        'Fruit development tracking',
        'Disease resistance monitoring'
      ],
      waterManagement: [
        'Humidity-based irrigation control',
        'Root zone temperature monitoring',
        'Water uptake optimization'
      ]
    },
    'Broccoli': {
      sustainablePractices: [
        'Companion planting with aromatic herbs',
        'Natural caterpillar control methods',
        'Cool season growing techniques'
      ],
      aiInsights: [
        'Head formation prediction',
        'Side shoot development tracking',
        'Optimal harvest window prediction'
      ],
      waterManagement: [
        'Even moisture distribution system',
        'Temperature-based irrigation',
        'Root development monitoring'
      ]
    },
    'Sweet Potatoes': {
      sustainablePractices: [
        'Natural vine training methods',
        'Organic slip production',
        'Soil warming techniques'
      ],
      aiInsights: [
        'Tuber development monitoring',
        'Growth rate optimization',
        'Size distribution prediction'
      ],
      waterManagement: [
        'Moisture gradient management',
        'Drought tolerance monitoring',
        'Root zone irrigation control'
      ]
    },
    'Green Beans': {
      sustainablePractices: [
        'Nitrogen-fixing promotion',
        'Natural trellis systems',
        'Companion planting with corn'
      ],
      aiInsights: [
        'Pod development tracking',
        'Yield prediction modeling',
        'Plant stress detection'
      ],
      waterManagement: [
        'Flowering stage irrigation control',
        'Humidity management system',
        'Water stress prevention'
      ]
    },
    'Eggplant': {
      sustainablePractices: [
        'Companion planting with herbs',
        'Natural pest deterrent methods',
        'Heat management techniques'
      ],
      aiInsights: [
        'Fruit development monitoring',
        'Color change prediction',
        'Growth pattern analysis'
      ],
      waterManagement: [
        'Deep root irrigation system',
        'Moisture consistency monitoring',
        'Heat stress management'
      ]
    }
  };

  const recommendations = [
    {
      title: 'Soil Analysis',
      description: 'Schedule a comprehensive soil analysis to optimize nutrient levels',
      icon: <ScienceIcon />
    },
    {
      title: 'Sustainable Practices',
      description: 'Implement companion planting to improve pest resistance naturally',
      icon: <ParkIcon />
    },
    {
      title: 'Resource Management',
      description: 'Install drip irrigation system to improve water efficiency',
      icon: <RecyclingIcon />
    }
  ];

  const handleInsightClick = (insight, type) => {
    if (selectedInsight === insight && selectedInsightType === type) {
      setImplementationOpen(!implementationOpen);
    } else {
      setSelectedInsight(insight);
      setSelectedInsightType(type);
      setImplementationOpen(true);
    }
  };

  const getImplementationGuide = (insight, type) => {
    switch (type) {
      case 'sustainable':
        const sustainableGuides = {
          'Sustainable Trellising Methods': {
            title: 'Sustainable Trellising Methods Guide',
            definition: 'Trellising is a plant support system that uses vertical structures to guide plant growth, maximize space usage, and improve air circulation. Sustainable trellising specifically uses eco-friendly, reusable materials and methods that minimize environmental impact while maximizing crop yield.',
            benefits: [
              'Improved air circulation reducing disease risk',
              'Better light exposure for all plant parts',
              'Efficient use of garden space',
              'Easier harvest and maintenance'
            ],
            steps: [
              {
                label: 'Planning',
                content: 'Choose your trellising system',
                details: 'Select from options like bamboo stakes, recycled metal frames, or natural twine systems based on your crop needs. For tomatoes, consider sturdy metal cages or Florida weave system using biodegradable twine.'
              },
              {
                label: 'Setup',
                content: 'Install your trellising system',
                details: 'Set up main support posts, ensure proper anchoring, and install cross-supports or wires. Use sustainable materials like bamboo, recycled metal, or natural fiber twine.'
              },
              {
                label: 'Maintenance',
                content: 'Regular maintenance tasks',
                details: 'Guide plant growth through the trellis, remove damaged materials, and adjust supports as plants grow. Inspect weekly for stability and plant health.'
              }
            ]
          },
          'Companion Planting': {
            title: 'Companion Planting Guide',
            definition: 'Companion planting is the strategic placement of different plant species that benefit each other through nutrient provision, pest control, or improved growth conditions. This method maximizes garden efficiency while reducing the need for chemical interventions.',
            benefits: [
              'Natural pest control',
              'Improved soil fertility',
              'Enhanced crop flavor',
              'Better resource utilization'
            ],
            steps: [
              {
                label: 'Planning',
                content: 'Select compatible companion plants',
                details: 'Research and choose plants that work well together. For example, tomatoes benefit from basil (pest control) and carrots (soil aeration).'
              },
              {
                label: 'Setup',
                content: 'Plant layout and spacing',
                details: 'Arrange companions considering mature plant sizes, sun exposure, and root depths. Maintain appropriate spacing for air circulation.'
              },
              {
                label: 'Maintenance',
                content: 'Monitor plant interactions',
                details: 'Observe plant growth patterns, pest presence, and soil health. Adjust spacing or replant as needed for optimal benefits.'
              }
            ]
          }
        };
        
        return sustainableGuides[insight] || {
          title: 'Implementation Guide',
          definition: 'A sustainable farming practice that promotes environmental stewardship while maintaining productive agricultural systems.',
          benefits: [
            'Reduced environmental impact',
            'Long-term soil health',
            'Resource efficiency',
            'Economic sustainability'
          ],
          steps: [
            {
              label: 'Planning',
              content: `Plan your ${insight.toLowerCase()} implementation`,
              details: 'Assess your current setup and identify required materials and timeline.'
            },
            {
              label: 'Setup',
              content: 'Initial setup and configuration',
              details: 'Follow best practices for installation and configuration.'
            },
            {
              label: 'Maintenance',
              content: 'Regular maintenance tasks',
              details: 'Schedule regular checks and maintenance to ensure optimal performance.'
            }
          ]
        };
      case 'ai':
        return {
          title: 'AI Implementation Guide',
          setup: [
            'Install required sensors and monitoring equipment',
            'Configure software and data collection systems',
            'Set up automated alerts and notifications'
          ],
          monitoring: [
            'Regular data collection and analysis',
            'Pattern recognition and trend analysis',
            'Performance optimization'
          ],
          actions: [
            'Automated response system setup',
            'Alert handling procedures',
            'Continuous improvement process'
          ]
        };
      case 'water':
        return {
          title: 'Water Management Guide',
          steps: [
            {
              label: 'System Setup',
              content: 'Install water management components',
              details: 'Set up sensors, controls, and monitoring systems.'
            },
            {
              label: 'Optimization',
              content: 'Fine-tune water usage',
              details: 'Adjust settings based on crop needs and environmental conditions.'
            }
          ]
        };
      default:
        return null;
    }
  };

  const handleOpenInsights = (crop) => {
    setSelectedCrop(crop);
    setInsightDialogOpen(true);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Smart Crop Planning
      </Typography>

      {/* Alerts Section */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {alerts.map((alert, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ bgcolor: alert.type === 'warning' ? '#fff3e0' : '#e3f2fd' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {alert.title}
                </Typography>
                <Typography variant="body2">
                  {alert.message}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Active Crops Section */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Active Crops
      </Typography>
      <Grid container spacing={3}>
        {activeCrops.map((crop, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {crop.name}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <OpacityIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="body2">
                      Moisture: {crop.moisture}%
                    </Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={crop.moisture} sx={{ mb: 2 }} />

                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <DeviceThermostatIcon sx={{ mr: 1, color: 'error.main' }} />
                    <Typography variant="body2">
                      Temperature: {crop.temperature}°C
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <BugReportIcon sx={{ mr: 1, color: 'warning.main' }} />
                    <Typography variant="body2">
                      Pest Risk: {crop.pestRisk}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <FavoriteIcon sx={{ mr: 1, color: 'success.main' }} />
                    <Typography variant="body2">
                      Health: {crop.health}%
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={crop.health}
                    sx={{ mt: 1, '& .MuiLinearProgress-bar': { bgcolor: 'success.main' } }}
                  />
                </Box>
                <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    startIcon={<BiotechIcon />}
                    onClick={() => handleOpenInsights(crop)}
                  >
                    AI Insights
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<UpdateIcon />}
                  >
                    Update
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Smart Farming Recommendations */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Smart Farming Recommendations
      </Typography>
      <Grid container spacing={3}>
        {recommendations.map((recommendation, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ mr: 2, color: 'primary.main' }}>
                    {recommendation.icon}
                  </Box>
                  <Typography variant="h6">
                    {recommendation.title}
                  </Typography>
                </Box>
                <Typography variant="body2">
                  {recommendation.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Enhanced Crop Insights Dialog */}
      <Dialog
        open={insightDialogOpen}
        onClose={() => setInsightDialogOpen(false)}
        maxWidth="md"
        fullWidth
      >
        {selectedCrop && (
          <>
            <DialogTitle>
              AI Insights for {selectedCrop.name}
              <IconButton
                aria-label="close"
                onClick={() => setInsightDialogOpen(false)}
                sx={{ position: 'absolute', right: 8, top: 8 }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers>
              <Grid container spacing={3}>
                {/* Sustainable Practices Section */}
                <Grid item xs={12}>
                  <Typography variant="subtitle1" gutterBottom>
                    Sustainable Practices
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {cropSpecificInsights[selectedCrop.name]?.sustainablePractices.map((practice, idx) => (
                      <Box key={idx}>
                        <Chip
                          icon={<ParkIcon />}
                          label={practice}
                          color="primary"
                          variant="outlined"
                          onClick={() => handleInsightClick(practice, 'sustainable')}
                          sx={{ mb: 1 }}
                        />
                        <Collapse in={selectedInsight === practice && selectedInsightType === 'sustainable' && implementationOpen}>
                          <Paper sx={{ p: 2, mt: 1 }}>
                            <Typography variant="h6" gutterBottom>
                              {getImplementationGuide(practice, 'sustainable').title}
                            </Typography>
                            <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
                              {getImplementationGuide(practice, 'sustainable').definition}
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom>
                              Benefits:
                            </Typography>
                            <List dense>
                              {getImplementationGuide(practice, 'sustainable').benefits.map((benefit, idx) => (
                                <ListItem key={idx}>
                                  <ListItemIcon>
                                    <CheckCircleOutlineIcon color="success" />
                                  </ListItemIcon>
                                  <ListItemText primary={benefit} />
                                </ListItem>
                              ))}
                            </List>
                            <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>
                              Implementation Steps:
                            </Typography>
                            <Stepper orientation="vertical">
                              {getImplementationGuide(practice, 'sustainable').steps.map((step, stepIdx) => (
                                <Step key={stepIdx} active={true}>
                                  <StepLabel>
                                    <Typography variant="subtitle2">{step.label}</Typography>
                                  </StepLabel>
                                  <StepContent>
                                    <Typography>{step.content}</Typography>
                                    <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                                      {step.details}
                                    </Typography>
                                  </StepContent>
                                </Step>
                              ))}
                            </Stepper>
                          </Paper>
                        </Collapse>
                      </Box>
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setInsightDialogOpen(false)}>Close</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Container>
  );
}
