import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  LinearProgress,
  Chip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Tooltip,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  DirectionsRun as ExerciseIcon,
  Restaurant as NutritionIcon,
  Spa as WellnessIcon,
  Timer as TimerIcon,
  LocalHospital as HealthIcon,
  TrendingUp as ProgressIcon,
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Info as InfoIcon
} from '@mui/icons-material';

const initialActivities = [
  {
    id: 1,
    type: 'exercise',
    name: 'Field Work',
    duration: 120,
    intensity: 'Moderate',
    calories: 450,
    notes: 'Harvesting crops and general field maintenance'
  },
  {
    id: 2,
    type: 'nutrition',
    name: 'Healthy Farm Lunch',
    calories: 650,
    ingredients: ['Fresh vegetables', 'Lean protein', 'Whole grains'],
    notes: 'Home-grown ingredients'
  },
  {
    id: 3,
    type: 'wellness',
    name: 'Stretching Routine',
    duration: 15,
    focus: 'Flexibility',
    notes: 'Pre-work stretching to prevent injury'
  }
];

const healthMetrics = {
  dailySteps: 12500,
  waterIntake: 2.5, // liters
  activeMinutes: 180,
  caloriesBurned: 2800,
  restingHeartRate: 68
};

const wellnessTips = [
  'Take regular breaks during intense physical work',
  'Stay hydrated, especially during hot weather',
  'Practice proper lifting techniques',
  'Protect yourself from sun exposure',
  'Use appropriate safety equipment'
];

function DemoHealth() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [activities, setActivities] = useState(initialActivities);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [isActivityDialogOpen, setIsActivityDialogOpen] = useState(false);
  const [isTipDialogOpen, setIsTipDialogOpen] = useState(false);

  const handleAddActivity = () => {
    setSelectedActivity(null);
    setIsActivityDialogOpen(true);
  };

  const handleEditActivity = (activity) => {
    setSelectedActivity(activity);
    setIsActivityDialogOpen(true);
  };

  const handleDeleteActivity = (activityId) => {
    setActivities(activities.filter(a => a.id !== activityId));
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'exercise':
        return <ExerciseIcon />;
      case 'nutrition':
        return <NutritionIcon />;
      case 'wellness':
        return <WellnessIcon />;
      default:
        return <HealthIcon />;
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Farm Worker Health & Fitness
        <Tooltip title="View wellness tips">
          <IconButton onClick={() => setIsTipDialogOpen(true)} size="small" sx={{ ml: 1 }}>
            <InfoIcon />
          </IconButton>
        </Tooltip>
      </Typography>

      {/* Daily Metrics */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Daily Activity
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Steps
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ flexGrow: 1, mr: 1 }}>
                    <LinearProgress
                      variant="determinate"
                      value={(healthMetrics.dailySteps / 15000) * 100}
                      sx={{ height: 8, borderRadius: 4 }}
                    />
                  </Box>
                  <Typography variant="body2">
                    {healthMetrics.dailySteps.toLocaleString()}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Active Minutes
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ flexGrow: 1, mr: 1 }}>
                    <LinearProgress
                      variant="determinate"
                      value={(healthMetrics.activeMinutes / 240) * 100}
                      sx={{ height: 8, borderRadius: 4 }}
                    />
                  </Box>
                  <Typography variant="body2">
                    {healthMetrics.activeMinutes} min
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Calories Burned
                </Typography>
                <Typography variant="h6">
                  {healthMetrics.caloriesBurned.toLocaleString()} kcal
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Hydration
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box sx={{ flexGrow: 1, mr: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={(healthMetrics.waterIntake / 3) * 100}
                    sx={{ 
                      height: 20, 
                      borderRadius: 2,
                      backgroundColor: theme.palette.primary.light,
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: theme.palette.primary.main,
                      }
                    }}
                  />
                </Box>
                <Typography>
                  {healthMetrics.waterIntake}L
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Daily Goal: 3L
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Heart Rate
              </Typography>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" color="primary">
                  {healthMetrics.restingHeartRate}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Resting BPM
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Activity Log */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6">
            Activity Log
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleAddActivity}
          >
            Add Activity
          </Button>
        </Box>
        <Grid container spacing={2}>
          {activities.map((activity) => (
            <Grid item xs={12} md={4} key={activity.id}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      {getActivityIcon(activity.type)}
                      <Typography variant="h6" sx={{ ml: 1 }}>
                        {activity.name}
                      </Typography>
                    </Box>
                    <Box>
                      <IconButton size="small" onClick={() => handleEditActivity(activity)}>
                        <EditIcon />
                      </IconButton>
                      <IconButton size="small" onClick={() => handleDeleteActivity(activity.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </Box>
                  {activity.duration && (
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <TimerIcon sx={{ mr: 1 }} fontSize="small" />
                      <Typography variant="body2">
                        {activity.duration} minutes
                      </Typography>
                    </Box>
                  )}
                  {activity.calories && (
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <ProgressIcon sx={{ mr: 1 }} fontSize="small" />
                      <Typography variant="body2">
                        {activity.calories} calories
                      </Typography>
                    </Box>
                  )}
                  <Typography variant="body2" color="text.secondary">
                    {activity.notes}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Wellness Tips Dialog */}
      <Dialog
        open={isTipDialogOpen}
        onClose={() => setIsTipDialogOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          Farm Worker Wellness Tips
        </DialogTitle>
        <DialogContent>
          <List>
            {wellnessTips.map((tip, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <WellnessIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary={tip} />
              </ListItem>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsTipDialogOpen(false)}>
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Activity Edit Dialog */}
      <Dialog
        open={isActivityDialogOpen}
        onClose={() => setIsActivityDialogOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          {selectedActivity ? 'Edit Activity' : 'Add New Activity'}
        </DialogTitle>
        <DialogContent>
          {/* Add form fields for activity editing */}
          <Typography color="text.secondary">
            Activity editing form would go here
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsActivityDialogOpen(false)}>
            Cancel
          </Button>
          <Button variant="contained" onClick={() => setIsActivityDialogOpen(false)}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default DemoHealth;
