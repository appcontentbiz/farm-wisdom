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
            },
            {
              label: 'Maintenance',
              content: 'Regular checking and adjusting of support systems',
              details: 'Check weekly for any loose ties or sagging supports. Adjust as plants grow and fruit develops.'
            }
          ],
          aiMonitoring: {
            sensors: ['Tension monitors', 'Growth rate sensors'],
            metrics: ['Plant load distribution', 'Growth pattern analysis'],
            automatedAlerts: ['Support stress warnings', 'Growth pattern anomalies']
          }
        },
        // ... (similar detailed structures for other practices)
      ],
      aiInsights: [
        {
          title: 'Early Blight Detection',
          description: 'AI-powered visual analysis for early disease detection',
          implementation: {
            setup: [
              'Install high-resolution cameras',
              'Configure image processing software',
              'Set up automated scanning schedule'
            ],
            monitoring: [
              'Leaf color analysis',
              'Spot pattern recognition',
              'Growth rate tracking'
            ],
            actions: [
              'Automated alerts for suspicious patterns',
              'Treatment recommendations',
              'Prevention strategies'
            ]
          }
        },
        // ... (similar structures for other insights)
      ]
    },
    // ... (similar detailed structures for other crops)
  };

  const handleInsightClick = (insight) => {
    setSelectedInsight(insight);
    setImplementationOpen(true);
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
                            <Box sx={{ mt: 2 }}>
                              <Typography variant="subtitle2" gutterBottom>
                                AI Monitoring
                              </Typography>
                              <List dense>
                                <ListItem>
                                  <ListItemIcon>
                                    <SensorsIcon />
                                  </ListItemIcon>
                                  <ListItemText 
                                    primary="Active Sensors"
                                    secondary={practice.aiMonitoring.sensors.join(', ')}
                                  />
                                </ListItem>
                                <ListItem>
                                  <ListItemIcon>
                                    <TimelineIcon />
                                  </ListItemIcon>
                                  <ListItemText 
                                    primary="Tracked Metrics"
                                    secondary={practice.aiMonitoring.metrics.join(', ')}
                                  />
                                </ListItem>
                                <ListItem>
                                  <ListItemIcon>
                                    <NotificationsIcon />
                                  </ListItemIcon>
                                  <ListItemText 
                                    primary="Automated Alerts"
                                    secondary={practice.aiMonitoring.automatedAlerts.join(', ')}
                                  />
                                </ListItem>
                              </List>
                            </Box>
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
