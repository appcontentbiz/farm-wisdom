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
} from '@mui/material';
import {
  Add as AddIcon,
  Notifications as NotificationsIcon,
  WaterDrop as WaterIcon,
  Thermostat as TempIcon,
  BugReport as PestIcon,
  Timeline as GrowthIcon,
} from '@mui/icons-material';

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
    };
    setCrops([...crops, crop]);
    setOpenAddDialog(false);
    setNewCrop({ name: '', variety: '', plantingDate: '' });
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Header */}
        <Grid item xs={12}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h4" component="h1" gutterBottom>
              Smart Crop Planning & Monitoring
            </Typography>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => setOpenAddDialog(true)}
            >
              Add Crop
            </Button>
          </Box>
        </Grid>

        {/* Alerts */}
        <Grid item xs={12}>
          {alerts.map((alert, index) => (
            <Alert
              key={index}
              severity={alert.severity}
              sx={{ mb: 2 }}
              action={
                <IconButton size="small">
                  <NotificationsIcon />
                </IconButton>
              }
            >
              <strong>{alert.type}:</strong> {alert.message}
            </Alert>
          ))}
        </Grid>

        {/* Crop Cards */}
        <Grid item xs={12}>
          <Grid container spacing={3}>
            {crops.map(crop => (
              <Grid item xs={12} md={6} key={crop.id}>
                <Paper elevation={3} sx={{ p: 3 }}>
                  <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                    <Typography variant="h6">
                      {crop.name} - {crop.variety}
                    </Typography>
                    <Chip
                      label={crop.health}
                      color={crop.health === 'Excellent' ? 'success' : 'primary'}
                    />
                  </Box>

                  <Box mb={3}>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      Growth Progress
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={crop.progress}
                      sx={{ height: 10, borderRadius: 5 }}
                    />
                    <Typography variant="body2" color="text.secondary" mt={1}>
                      Stage: {crop.growthStage}
                    </Typography>
                  </Box>

                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <Card>
                        <CardContent>
                          <Box display="flex" alignItems="center">
                            <WaterIcon color="primary" sx={{ mr: 1 }} />
                            <div>
                              <Typography variant="body2" color="text.secondary">
                                Soil Moisture
                              </Typography>
                              <Typography variant="h6">
                                {Math.round(crop.soilMoisture)}%
                              </Typography>
                            </div>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={4}>
                      <Card>
                        <CardContent>
                          <Box display="flex" alignItems="center">
                            <TempIcon color="error" sx={{ mr: 1 }} />
                            <div>
                              <Typography variant="body2" color="text.secondary">
                                Temperature
                              </Typography>
                              <Typography variant="h6">
                                {Math.round(crop.temperature)}°F
                              </Typography>
                            </div>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={4}>
                      <Card>
                        <CardContent>
                          <Box display="flex" alignItems="center">
                            <PestIcon color="warning" sx={{ mr: 1 }} />
                            <div>
                              <Typography variant="body2" color="text.secondary">
                                Pest Risk
                              </Typography>
                              <Typography variant="h6">
                                {crop.pestRisk}
                              </Typography>
                            </div>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>

                  <Box mt={2}>
                    <Typography variant="body2" color="text.secondary">
                      Next Action: {crop.nextAction} (Due: {crop.nextActionDate})
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
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
