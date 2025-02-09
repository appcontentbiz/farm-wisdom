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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Collapse,
  Paper,
  Stepper,
  Step,
  StepLabel,
  StepContent
} from '@mui/material';
import OpacityIcon from '@mui/icons-material/Opacity';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import BugReportIcon from '@mui/icons-material/BugReport';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import UpdateIcon from '@mui/icons-material/Update';
import ScienceIcon from '@mui/icons-material/Science';
import ParkIcon from '@mui/icons-material/Park';
import LightModeIcon from '@mui/icons-material/LightMode';
import RecyclingIcon from '@mui/icons-material/Recycling';
import AirIcon from '@mui/icons-material/Air';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import BiotechIcon from '@mui/icons-material/Biotech';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
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
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import BuildIcon from '@mui/icons-material/Build';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';

export default function SmartCropPlanning() {
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [insightDialogOpen, setInsightDialogOpen] = useState(false);
  const [selectedInsight, setSelectedInsight] = useState(null);
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
      status: 'Growing well - Day 45',
      icon: <LocalFloristIcon />
    },
    {
      name: 'Bell Peppers',
      status: 'Ready for harvest',
      icon: <LocalFloristIcon />
    },
    {
      name: 'Carrots',
      status: 'Recently planted',
      icon: <LocalFloristIcon />
    },
    {
      name: 'Spinach',
      status: 'Growing well - Day 20',
      icon: <LocalFloristIcon />
    }
  ];

  const aiSystemFeatures = {
    precisionAgriculture: {
      title: 'AI-Powered Precision Agriculture',
      features: [
        {
          name: 'Smart Sensor Network',
          description: 'Real-time monitoring of soil conditions, climate, and plant health',
          implementation: [
            'Install IoT sensor network throughout the farm',
            'Configure sensor data collection intervals',
            'Set up automated alerts for condition changes'
          ]
        },
        {
          name: 'Computer Vision Analysis',
          description: 'Automated visual inspection of crops for disease and growth monitoring',
          implementation: [
            'Deploy camera systems at strategic locations',
            'Train AI models on crop-specific visual patterns',
            'Implement real-time image processing pipeline'
          ]
        },
        {
          name: 'Predictive Analytics',
          description: 'AI-driven predictions for harvest timing and yield optimization',
          implementation: [
            'Collect historical crop data',
            'Train machine learning models',
            'Set up automated prediction reports'
          ]
        }
      ]
    },
    waterManagement: {
      title: 'Smart Water Management',
      features: [
        {
          name: 'Automated Irrigation',
          description: 'AI-controlled irrigation based on real-time soil moisture data',
          implementation: [
            'Install smart irrigation controllers',
            'Configure soil moisture thresholds',
            'Set up automated watering schedules'
          ]
        },
        {
          name: 'Water Conservation',
          description: 'Advanced techniques for water usage optimization',
          implementation: [
            'Implement drip irrigation systems',
            'Install rainwater collection systems',
            'Set up water usage monitoring'
          ]
        }
      ]
    },
    modernTechnology: {
      title: 'Modern Farming Technologies',
      features: [
        {
          name: 'Drone Monitoring',
          description: 'Aerial crop assessment and mapping',
          implementation: [
            'Acquire agricultural drones',
            'Train operators on flight patterns',
            'Set up automated image processing'
          ]
        },
        {
          name: 'IoT Integration',
          description: 'Connected devices for farm automation',
          implementation: [
            'Install IoT gateways',
            'Deploy sensor networks',
            'Configure automated controls'
          ]
        }
      ]
    }
  };

  const cropSpecificInsights = {
    'Tomatoes': {
      sustainablePractices: [
        {
          title: 'Sustainable Trellising Methods',
          description: 'Advanced techniques for supporting tomato growth naturally',
          steps: [
            {
              label: 'Select Natural Materials',
              content: 'Use bamboo poles or recycled wood for trellis construction',
              details: 'Choose materials that are both sustainable and durable. Bamboo is ideal as it\'s renewable and naturally resistant to decay.'
            },
            {
              label: 'Design Implementation',
              content: 'Create a Florida weave or A-frame system',
              details: 'The Florida weave uses less material and allows for better airflow. A-frames work well for determinate varieties.'
            },
            {
              label: 'Installation Process',
              content: 'Set up support posts and connecting lines',
              details: 'Install posts 2-3 feet deep, space them 4-6 feet apart. Use natural twine for connecting lines.'
            }
          ]
        },
        {
          title: 'Natural Pest Control',
          description: 'Organic methods for controlling common tomato pests',
          steps: [
            {
              label: 'Companion Planting',
              content: 'Plant basil and marigolds nearby',
              details: 'These plants naturally repel many tomato pests while attracting beneficial insects.'
            },
            {
              label: 'Organic Sprays',
              content: 'Create neem oil and soap solution',
              details: 'Mix 2 tsp neem oil and 1 tsp liquid soap per quart of water. Apply weekly.'
            }
          ]
        }
      ],
      aiInsights: [
        {
          title: 'Early Blight Detection',
          description: 'AI-powered visual analysis for early disease detection',
          implementation: {
            setup: [
              'Install high-resolution cameras at key monitoring points',
              'Configure image processing software for leaf analysis',
              'Set up automated daily scanning schedule'
            ],
            monitoring: [
              'Continuous leaf color and pattern analysis',
              'Spot pattern recognition and tracking',
              'Growth rate comparison with healthy baselines'
            ],
            actions: [
              'Immediate alerts for suspicious patterns',
              'Automated treatment recommendations',
              'Historical pattern analysis for prevention'
            ]
          }
        },
        {
          title: 'Growth Optimization',
          description: 'AI-driven growth rate and health monitoring',
          implementation: {
            setup: [
              'Deploy growth monitoring sensors',
              'Install environmental control system',
              'Configure AI prediction models'
            ],
            monitoring: [
              'Real-time growth rate tracking',
              'Nutrient uptake analysis',
              'Environmental condition correlation'
            ],
            actions: [
              'Automated growth adjustment recommendations',
              'Nutrient schedule optimization',
              'Climate control automation'
            ]
          }
        }
      ]
    },
    'Bell Peppers': {
      sustainablePractices: [
        {
          title: 'Companion Planting Strategy',
          description: 'Optimal plant combinations for pepper growth',
          steps: [
            {
              label: 'Plant Selection',
              content: 'Choose compatible companion plants',
              details: 'Basil, onions, and marigolds are ideal companions for peppers.'
            },
            {
              label: 'Spacing',
              content: 'Arrange plants with proper spacing',
              details: 'Plant companions 12-18 inches from peppers for optimal growth.'
            }
          ]
        }
      ],
      aiInsights: [
        {
          title: 'Yield Prediction',
          description: 'AI-based harvest forecasting',
          implementation: {
            setup: [
              'Install fruit counting cameras',
              'Deploy weight sensors',
              'Configure prediction algorithms'
            ],
            monitoring: [
              'Daily fruit development tracking',
              'Size and color analysis',
              'Growth rate monitoring'
            ],
            actions: [
              'Harvest timing recommendations',
              'Yield optimization alerts',
              'Resource allocation planning'
            ]
          }
        }
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

  const handleInsightClick = (insight) => {
    setSelectedInsight(insight);
    setImplementationOpen(true);
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
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {crop.name}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <LocalFloristIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="body2">
                      {crop.status}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                  <Button
                    variant="outlined"
                    startIcon={<VisibilityIcon />}
                    size="small"
                    onClick={() => handleOpenInsights(crop)}
                  >
                    AI Insights
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<UpdateIcon />}
                    size="small"
                  >
                    Update
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <IconButton
                size="large"
                sx={{ 
                  bgcolor: 'primary.main',
                  color: 'white',
                  '&:hover': { bgcolor: 'primary.dark' },
                  mb: 2
                }}
              >
                <AddIcon />
              </IconButton>
              <Typography>Add New Crop</Typography>
            </CardContent>
          </Card>
        </Grid>
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
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6">AI Insights for {selectedCrop.name}</Typography>
                <IconButton onClick={() => setInsightDialogOpen(false)}>
                  <CloseIcon />
                </IconButton>
              </Box>
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
                          label={practice.title}
                          color="primary"
                          variant="outlined"
                          onClick={() => handleInsightClick(practice)}
                          sx={{ mb: 1 }}
                        />
                        <Collapse in={selectedInsight === practice && implementationOpen}>
                          <Paper sx={{ p: 2, mt: 1 }}>
                            <Typography variant="subtitle2" gutterBottom>
                              {practice.description}
                            </Typography>
                            <Stepper orientation="vertical">
                              {practice.steps.map((step, stepIdx) => (
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

                {/* AI-Powered Insights Section */}
                <Grid item xs={12}>
                  <Typography variant="subtitle1" gutterBottom>
                    AI-Powered Insights
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {cropSpecificInsights[selectedCrop.name]?.aiInsights.map((insight, idx) => (
                      <Box key={idx}>
                        <Chip
                          icon={<BiotechIcon />}
                          label={insight.title}
                          color="secondary"
                          variant="outlined"
                          onClick={() => handleInsightClick(insight)}
                          sx={{ mb: 1 }}
                        />
                        <Collapse in={selectedInsight === insight && implementationOpen}>
                          <Paper sx={{ p: 2, mt: 1 }}>
                            <Typography variant="subtitle2" gutterBottom>
                              {insight.description}
                            </Typography>
                            <List dense>
                              <ListItem>
                                <ListItemIcon>
                                  <BuildIcon />
                                </ListItemIcon>
                                <ListItemText 
                                  primary="Setup Requirements"
                                  secondary={
                                    <List dense>
                                      {insight.implementation.setup.map((step, stepIdx) => (
                                        <ListItem key={stepIdx}>
                                          <ListItemText primary={step} />
                                        </ListItem>
                                      ))}
                                    </List>
                                  }
                                />
                              </ListItem>
                              <ListItem>
                                <ListItemIcon>
                                  <AssessmentIcon />
                                </ListItemIcon>
                                <ListItemText 
                                  primary="Monitoring Process"
                                  secondary={
                                    <List dense>
                                      {insight.implementation.monitoring.map((step, stepIdx) => (
                                        <ListItem key={stepIdx}>
                                          <ListItemText primary={step} />
                                        </ListItem>
                                      ))}
                                    </List>
                                  }
                                />
                              </ListItem>
                              <ListItem>
                                <ListItemIcon>
                                  <SettingsIcon />
                                </ListItemIcon>
                                <ListItemText 
                                  primary="Automated Actions"
                                  secondary={
                                    <List dense>
                                      {insight.implementation.actions.map((step, stepIdx) => (
                                        <ListItem key={stepIdx}>
                                          <ListItemText primary={step} />
                                        </ListItem>
                                      ))}
                                    </List>
                                  }
                                />
                              </ListItem>
                            </List>
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
