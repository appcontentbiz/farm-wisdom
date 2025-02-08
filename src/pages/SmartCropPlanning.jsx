import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  Button,
  Box,
  LinearProgress,
  Alert,
  IconButton,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Divider,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import NotificationsIcon from '@mui/icons-material/Notifications';
import OpacityIcon from '@mui/icons-material/Opacity';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import PestControlIcon from '@mui/icons-material/PestControl';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import ScienceIcon from '@mui/icons-material/Science';
import YardIcon from '@mui/icons-material/Yard';
import SpaIcon from '@mui/icons-material/Spa';
import LightModeIcon from '@mui/icons-material/LightMode';

// Mock data for demonstration
const mockCrops = [
  {
    id: 1,
    name: 'Tomatoes',
    variety: 'Beefsteak',
    plantingDate: '2025-03-15',
    growthStage: 'Vegetative',
    progress: 45,
    health: 'Good',
    nextAction: 'Fertilize',
    nextActionDate: '2025-01-30',
    soilMoisture: 65,
    temperature: 72,
    pestRisk: 'Low',
    soilHealth: 'Good',
    lightExposure: '6.5 hours',
    companionPlants: ['Basil', 'Marigolds'],
  },
  {
    id: 2,
    name: 'Lettuce',
    variety: 'Romaine',
    plantingDate: '2025-01-01',
    growthStage: 'Harvest Ready',
    progress: 95,
    health: 'Excellent',
    nextAction: 'Harvest',
    nextActionDate: '2025-01-29',
    soilMoisture: 70,
    temperature: 68,
    pestRisk: 'Low',
    soilHealth: 'Excellent',
    lightExposure: '5 hours',
    companionPlants: ['Carrots', 'Radishes'],
  },
  {
    id: 3,
    name: 'Bell Peppers',
    variety: 'California Wonder',
    plantingDate: '2025-02-15',
    growthStage: 'Flowering',
    progress: 60,
    health: 'Good',
    nextAction: 'Prune',
    nextActionDate: '2025-02-10',
    soilMoisture: 68,
    temperature: 75,
    pestRisk: 'Medium',
    soilHealth: 'Good',
    lightExposure: '7 hours',
    companionPlants: ['Basil', 'Onions'],
  },
  {
    id: 4,
    name: 'Carrots',
    variety: 'Nantes',
    plantingDate: '2025-01-20',
    growthStage: 'Root Development',
    progress: 40,
    health: 'Excellent',
    nextAction: 'Thin Seedlings',
    nextActionDate: '2025-02-12',
    soilMoisture: 72,
    temperature: 65,
    pestRisk: 'Low',
    soilHealth: 'Good',
    lightExposure: '4 hours',
    companionPlants: ['Rosemary', 'Peas'],
  },
  {
    id: 5,
    name: 'Spinach',
    variety: 'Bloomsdale',
    plantingDate: '2025-02-01',
    growthStage: 'Leaf Development',
    progress: 35,
    health: 'Good',
    nextAction: 'Fertilize',
    nextActionDate: '2025-02-15',
    soilMoisture: 75,
    temperature: 62,
    pestRisk: 'Low',
    soilHealth: 'Very Good',
    lightExposure: '5.5 hours',
    companionPlants: ['Strawberries', 'Peas'],
  },
  {
    id: 6,
    name: 'Cucumber',
    variety: 'Marketmore',
    plantingDate: '2025-03-01',
    growthStage: 'Seedling',
    progress: 15,
    health: 'Good',
    nextAction: 'Install Trellis',
    nextActionDate: '2025-03-10',
    soilMoisture: 70,
    temperature: 73,
    pestRisk: 'Low',
    soilHealth: 'Good',
    lightExposure: '6 hours',
    companionPlants: ['Sunflowers', 'Dill'],
  },
];

const weatherAlerts = [
  {
    type: 'Frost Warning',
    message: 'Potential frost tonight. Consider protecting sensitive crops.',
    severity: 'warning',
  },
  {
    type: 'Optimal Planting',
    message: 'Ideal conditions for planting tomatoes in the next 3 days.',
    severity: 'success',
  },
];

// Smart farming recommendations
const smartRecommendations = [
  {
    title: 'Companion Planting Analysis',
    icon: <SpaIcon />,
    description: 'AI-powered suggestions for optimal companion planting combinations to enhance growth and pest resistance.',
    actions: ['View Combinations', 'Update Plants'],
  },
  {
    title: 'Soil Health Optimization',
    icon: <ScienceIcon />,
    description: 'Real-time soil nutrient analysis and recommendations for organic amendments based on crop needs.',
    actions: ['View Analysis', 'Order Amendments'],
  },
  {
    title: 'Light Exposure Optimization',
    icon: <LightModeIcon />,
    description: 'Track and optimize sunlight exposure for each crop with AI-powered placement suggestions.',
    actions: ['View Report', 'Adjust Layout'],
  },
  {
    title: 'Sustainable Practices',
    icon: <YardIcon />,
    description: 'Personalized recommendations for sustainable farming practices based on your crops and local conditions.',
    actions: ['View Tips', 'Track Impact'],
  },
];

export default function SmartCropPlanning() {
  const [crops, setCrops] = useState(mockCrops);
  const [alerts, setAlerts] = useState(weatherAlerts);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [newCrop, setNewCrop] = useState({
    name: '',
    variety: '',
    plantingDate: '',
  });
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState({ title: '', content: '' });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCrops(prevCrops =>
        prevCrops.map(crop => ({
          ...crop,
          soilMoisture: Math.max(0, Math.min(100, crop.soilMoisture + (Math.random() - 0.5) * 5)),
          temperature: crop.temperature + (Math.random() - 0.5) * 2,
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleRecommendationAction = (title, action) => {
    let content = '';
    switch (title) {
      case 'Companion Planting Analysis':
        if (action === 'View Combinations') {
          content = (
            <Box>
              <Typography variant="h6" gutterBottom>Optimal Companion Planting Pairs</Typography>
              {crops.map(crop => (
                <Box key={crop.id} sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" color="primary">
                    {crop.name} ({crop.variety})
                  </Typography>
                  <Typography variant="body2">
                    Current companions: {crop.companionPlants.join(', ')}
                  </Typography>
                  <Typography variant="body2">
                    Recommended additions: {['Marigolds', 'Nasturtiums', 'Herbs'].filter(p => !crop.companionPlants.includes(p)).join(', ')}
                  </Typography>
                </Box>
              ))}
            </Box>
          );
        } else {
          content = 'Update your companion planting arrangement based on the analysis.';
        }
        break;

      case 'Soil Health Optimization':
        if (action === 'View Analysis') {
          content = (
            <Box>
              <Typography variant="h6" gutterBottom>Soil Analysis Results</Typography>
              {crops.map(crop => (
                <Box key={crop.id} sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" color="primary">
                    {crop.name} Plot
                  </Typography>
                  <Typography variant="body2">
                    Soil Health: {crop.soilHealth}
                  </Typography>
                  <Typography variant="body2">
                    Recommended Amendments:
                    {crop.soilHealth !== 'Excellent' ? 
                      ' Add organic compost, maintain moisture levels' : 
                      ' Current soil conditions are optimal'}
                  </Typography>
                </Box>
              ))}
            </Box>
          );
        } else {
          content = 'Place an order for recommended soil amendments.';
        }
        break;

      case 'Light Exposure Optimization':
        if (action === 'View Report') {
          content = (
            <Box>
              <Typography variant="h6" gutterBottom>Light Exposure Analysis</Typography>
              {crops.map(crop => (
                <Box key={crop.id} sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" color="primary">
                    {crop.name}
                  </Typography>
                  <Typography variant="body2">
                    Current Exposure: {crop.lightExposure}
                  </Typography>
                  <Typography variant="body2">
                    Optimal Range: 6-8 hours
                  </Typography>
                  <Typography variant="body2">
                    Recommendation: {
                      parseFloat(crop.lightExposure) < 6 ? 
                        'Consider relocating to a sunnier spot' : 
                        'Current location is optimal'
                    }
                  </Typography>
                </Box>
              ))}
            </Box>
          );
        } else {
          content = 'Adjust crop layout based on light exposure recommendations.';
        }
        break;

      case 'Sustainable Practices':
        if (action === 'View Tips') {
          content = (
            <Box>
              <Typography variant="h6" gutterBottom>Sustainable Farming Recommendations</Typography>
              <Typography variant="subtitle1" color="primary" gutterBottom>
                Current Practices Impact
              </Typography>
              <Typography variant="body2" paragraph>
                • Water Usage: Efficient (using moisture sensors)
              </Typography>
              <Typography variant="body2" paragraph>
                • Pest Management: Natural (companion planting)
              </Typography>
              <Typography variant="body2" paragraph>
                • Soil Health: Organic amendments only
              </Typography>
              <Typography variant="subtitle1" color="primary" gutterBottom>
                Recommended Improvements
              </Typography>
              <Typography variant="body2" paragraph>
                • Install rainwater harvesting system
              </Typography>
              <Typography variant="body2" paragraph>
                • Implement crop rotation plan
              </Typography>
              <Typography variant="body2">
                • Start composting program
              </Typography>
            </Box>
          );
        } else {
          content = (
            <Box>
              <Typography variant="h6" gutterBottom>Sustainability Metrics</Typography>
              <Typography variant="body2" paragraph>
                Water Conservation: 25% reduction
              </Typography>
              <Typography variant="body2" paragraph>
                Soil Improvement: 15% increase in organic matter
              </Typography>
              <Typography variant="body2">
                Biodiversity: 30% increase in beneficial insects
              </Typography>
            </Box>
          );
        }
        break;
    }
    setDialogContent({ title: `${title} - ${action}`, content });
    setOpenDialog(true);
  };

  const handleAddCrop = () => {
    const crop = {
      ...newCrop,
      id: crops.length + 1,
      growthStage: 'Seedling',
      progress: 0,
      health: 'Good',
      nextAction: 'Water',
      nextActionDate: new Date().toISOString().split('T')[0],
      soilMoisture: 70,
      temperature: 70,
      pestRisk: 'Low',
      soilHealth: 'Good',
      lightExposure: '6 hours',
      companionPlants: ['Basil', 'Marigolds'],
    };
    setCrops([...crops, crop]);
    setOpenAddDialog(false);
    setNewCrop({ name: '', variety: '', plantingDate: '' });
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" component="h1">
          Smart Crop Planning
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setOpenAddDialog(true)}
        >
          Add Crop
        </Button>
      </Box>

      {/* Alerts Section */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {alerts.map((alert, index) => (
          <Grid item xs={12} key={index}>
            <Alert
              severity={alert.severity}
              icon={<NotificationsIcon />}
              action={
                <Button color="inherit" size="small">
                  View
                </Button>
              }
            >
              <Typography variant="subtitle1">{alert.type}</Typography>
              {alert.message}
            </Alert>
          </Grid>
        ))}
      </Grid>

      {/* Crop Cards */}
      <Typography variant="h5" gutterBottom>
        Active Crops
      </Typography>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {crops.map((crop) => (
          <Grid item xs={12} md={6} key={crop.id}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="h6">{crop.name}</Typography>
                  <Chip label={crop.growthStage} color="primary" size="small" />
                </Box>
                <Typography color="textSecondary" gutterBottom>
                  Variety: {crop.variety}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body2" gutterBottom>
                    Growth Progress
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={crop.progress}
                    sx={{ mb: 2 }}
                  />
                </Box>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <OpacityIcon color="primary" />
                      <Typography variant="body2">
                        Moisture: {Math.round(crop.soilMoisture)}%
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <DeviceThermostatIcon color="primary" />
                      <Typography variant="body2">
                        Temp: {Math.round(crop.temperature)}°F
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <PestControlIcon color="primary" />
                      <Typography variant="body2">
                        Pest Risk: {crop.pestRisk}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <ShowChartIcon color="primary" />
                      <Typography variant="body2">
                        Health: {crop.health}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body2" color="textSecondary">
                  Next Action: {crop.nextAction} (Due: {new Date(crop.nextActionDate).toLocaleDateString()})
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Smart Recommendations */}
      <Typography variant="h5" gutterBottom>
        Smart Farming Recommendations
      </Typography>
      <Grid container spacing={3}>
        {smartRecommendations.map((recommendation, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ mr: 2, color: 'primary.main' }}>
                    {recommendation.icon}
                  </Box>
                  <Typography variant="h6" component="h3">
                    {recommendation.title}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {recommendation.description}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  {recommendation.actions.map((action, i) => (
                    <Button
                      key={i}
                      size="small"
                      variant={i === 0 ? "contained" : "outlined"}
                      onClick={() => handleRecommendationAction(recommendation.title, action)}
                    >
                      {action}
                    </Button>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Recommendation Dialog */}
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>{dialogContent.title}</DialogTitle>
        <DialogContent dividers>
          {dialogContent.content}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Add Crop Dialog */}
      <Dialog open={openAddDialog} onClose={() => setOpenAddDialog(false)}>
        <DialogTitle>Add New Crop</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Crop Name"
            fullWidth
            value={newCrop.name}
            onChange={(e) => setNewCrop({ ...newCrop, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Variety"
            fullWidth
            value={newCrop.variety}
            onChange={(e) => setNewCrop({ ...newCrop, variety: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Planting Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={newCrop.plantingDate}
            onChange={(e) => setNewCrop({ ...newCrop, plantingDate: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAddDialog(false)}>Cancel</Button>
          <Button onClick={handleAddCrop} variant="contained">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
