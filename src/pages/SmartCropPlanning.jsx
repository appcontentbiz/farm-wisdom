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
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import BugReportIcon from '@mui/icons-material/BugReport';
import TimelineIcon from '@mui/icons-material/Timeline';
import ScienceIcon from '@mui/icons-material/Science';
import EcoIcon from '@mui/icons-material/Eco';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import Brightness5Icon from '@mui/icons-material/Brightness5';

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
    icon: <LocalFloristIcon />,
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
    icon: <Brightness5Icon />,
    description: 'Track and optimize sunlight exposure for each crop with AI-powered placement suggestions.',
    actions: ['View Report', 'Adjust Layout'],
  },
  {
    title: 'Sustainable Practices',
    icon: <EcoIcon />,
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
                      <WaterDropIcon color="primary" />
                      <Typography variant="body2">
                        Moisture: {Math.round(crop.soilMoisture)}%
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <ThermostatIcon color="primary" />
                      <Typography variant="body2">
                        Temp: {Math.round(crop.temperature)}°F
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <BugReportIcon color="primary" />
                      <Typography variant="body2">
                        Pest Risk: {crop.pestRisk}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <TimelineIcon color="primary" />
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
