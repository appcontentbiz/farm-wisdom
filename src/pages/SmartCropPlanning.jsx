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
  Divider
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

export default function SmartCropPlanning() {
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [insightDialogOpen, setInsightDialogOpen] = useState(false);

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

  const modernFarmingInsights = [
    {
      title: 'AI-Powered Precision Agriculture',
      description: 'Advanced monitoring and analytics for optimal crop management',
      icon: <BiotechIcon />,
      details: [
        { icon: <SensorsIcon />, text: 'Smart sensors for real-time soil and climate monitoring' },
        { icon: <CameraAltIcon />, text: 'Computer vision for early disease detection' },
        { icon: <QueryStatsIcon />, text: 'Predictive analytics for harvest optimization' }
      ]
    },
    {
      title: 'Sustainable Water Management',
      description: 'Smart irrigation and water conservation techniques',
      icon: <WaterDropIcon />,
      details: [
        { icon: <OpacityIcon />, text: 'Automated irrigation based on soil moisture data' },
        { icon: <CloudIcon />, text: 'Rainwater harvesting system integration' },
        { icon: <LocalDrinkIcon />, text: 'Water usage optimization algorithms' }
      ]
    },
    {
      title: 'Modern Farming Technologies',
      description: 'Cutting-edge tools for precision farming',
      icon: <AgricultureIcon />,
      details: [
        { icon: <DroneIcon />, text: 'Drone-based crop monitoring and analysis' },
        { icon: <RouterIcon />, text: 'IoT sensors for environmental control' },
        { icon: <ThermostatAutoIcon />, text: 'Smart climate control systems' }
      ]
    },
    {
      title: 'Climate-Smart Agriculture',
      description: 'Adaptive farming for changing climate conditions',
      icon: <AirIcon />,
      details: [
        { icon: <WbSunnyIcon />, text: 'Weather pattern analysis and prediction' },
        { icon: <ParkIcon />, text: 'Climate-resilient farming techniques' },
        { icon: <RecyclingIcon />, text: 'Sustainable soil management practices' }
      ]
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

      {/* Modern Farming Insights */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Modern Farming Insights
      </Typography>
      <Grid container spacing={3}>
        {modernFarmingInsights.map((insight, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ mr: 2, color: 'primary.main' }}>
                    {insight.icon}
                  </Box>
                  <Typography variant="h6">
                    {insight.title}
                  </Typography>
                </Box>
                <Typography variant="body2" gutterBottom>
                  {insight.description}
                </Typography>
                <List dense>
                  {insight.details.map((detail, idx) => (
                    <ListItem key={idx}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        {detail.icon}
                      </ListItemIcon>
                      <ListItemText primary={detail.text} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Crop Insights Dialog */}
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
                <Grid item xs={12}>
                  <Typography variant="subtitle1" gutterBottom>
                    Sustainable Practices
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {cropSpecificInsights[selectedCrop.name]?.sustainablePractices.map((practice, idx) => (
                      <Chip
                        key={idx}
                        icon={<ParkIcon />}
                        label={practice}
                        color="primary"
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1" gutterBottom>
                    AI-Powered Insights
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {cropSpecificInsights[selectedCrop.name]?.aiInsights.map((insight, idx) => (
                      <Chip
                        key={idx}
                        icon={<BiotechIcon />}
                        label={insight}
                        color="secondary"
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1" gutterBottom>
                    Water Management
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {cropSpecificInsights[selectedCrop.name]?.waterManagement.map((practice, idx) => (
                      <Chip
                        key={idx}
                        icon={<WaterDropIcon />}
                        label={practice}
                        color="info"
                        variant="outlined"
                      />
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
