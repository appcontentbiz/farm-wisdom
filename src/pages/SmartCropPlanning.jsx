import React from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Box,
  LinearProgress,
  IconButton
} from '@mui/material';
import {
  WaterDrop as WaterDropIcon,
  Thermostat as ThermostatIcon,
  BugReport as BugReportIcon,
  MonitorHeart as MonitorHeartIcon,
  Add as AddIcon,
  Visibility as VisibilityIcon,
  WbSunny as WbSunnyIcon,
  Update as UpdateIcon,
  Science as ScienceIcon,
  Eco as EcoIcon,
  LightMode as LightModeIcon,
  Recycling as RecyclingIcon
} from '@mui/icons-material';

export default function SmartCropPlanning() {
  const alerts = [
    {
      type: 'warning',
      title: 'Frost Warning',
      message: 'Potential frost tonight. Consider protecting sensitive crops.'
    },
    {
      type: 'success',
      title: 'Optimal Planting',
      message: 'Ideal conditions for planting tomatoes in the next 3 days.'
    }
  ];

  const crops = [
    {
      name: 'Tomatoes',
      variety: 'Beefsteak',
      stage: 'Vegetative',
      moisture: 70,
      temperature: 70,
      pestRisk: 'Low',
      health: 'Good',
      nextAction: 'Fertilize',
      dueDate: '1/29/2025'
    },
    {
      name: 'Lettuce',
      variety: 'Romaine',
      stage: 'Harvest Ready',
      moisture: 55,
      temperature: 68,
      pestRisk: 'Low',
      health: 'Excellent',
      nextAction: 'Harvest',
      dueDate: '1/28/2025'
    },
    {
      name: 'Bell Peppers',
      variety: 'California Wonder',
      stage: 'Flowering',
      moisture: 66,
      temperature: 73,
      pestRisk: 'Medium',
      health: 'Good',
      nextAction: 'Prune',
      dueDate: '2/9/2025'
    },
    {
      name: 'Carrots',
      variety: 'Nantes',
      stage: 'Root Development',
      moisture: 97,
      temperature: 62,
      pestRisk: 'Low',
      health: 'Excellent',
      nextAction: 'Thin Seedlings',
      dueDate: '2/11/2025'
    },
    {
      name: 'Spinach',
      variety: 'Bloomsdale',
      stage: 'Leaf Development',
      moisture: 76,
      temperature: 60,
      pestRisk: 'Low',
      health: 'Good',
      nextAction: 'Fertilize',
      dueDate: '2/14/2025'
    },
    {
      name: 'Cucumber',
      variety: 'Marketmore',
      stage: 'Seedling',
      moisture: 56,
      temperature: 69,
      pestRisk: 'Low',
      health: 'Good',
      nextAction: 'Install Trellis',
      dueDate: '3/9/2025'
    }
  ];

  const recommendations = [
    {
      title: 'Companion Planting Analysis',
      description: 'AI-powered suggestions for optimal companion planting combinations to enhance growth and pest resistance.',
      icon: <EcoIcon />,
      actions: [
        { label: 'VIEW COMBINATIONS', color: 'primary' },
        { label: 'UPDATE PLANTS', color: 'secondary' }
      ]
    },
    {
      title: 'Soil Health Optimization',
      description: 'Real-time soil nutrient analysis and recommendations for organic amendments based on crop needs.',
      icon: <ScienceIcon />,
      actions: [
        { label: 'VIEW ANALYSIS', color: 'primary' },
        { label: 'ORDER AMENDMENTS', color: 'secondary' }
      ]
    },
    {
      title: 'Light Exposure Optimization',
      description: 'Track and optimize sunlight exposure for each crop with AI-powered placement suggestions.',
      icon: <LightModeIcon />,
      actions: [
        { label: 'VIEW REPORT', color: 'primary' },
        { label: 'ADJUST LAYOUT', color: 'secondary' }
      ]
    },
    {
      title: 'Sustainable Practices',
      description: 'Personalized recommendations for sustainable farming practices based on your crops and local conditions.',
      icon: <RecyclingIcon />,
      actions: [
        { label: 'VIEW TIPS', color: 'primary' },
        { label: 'TRACK IMPACT', color: 'secondary' }
      ]
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" component="h1">
          Smart Crop Planning
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
        >
          ADD CROP
        </Button>
      </Box>

      {alerts.map((alert, index) => (
        <Card 
          key={index} 
          sx={{ 
            mb: 2, 
            backgroundColor: alert.type === 'warning' ? '#fff3e0' : '#e8f5e9'
          }}
        >
          <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <Typography variant="h6" component="div">
                {alert.title}
              </Typography>
              <Typography variant="body2">
                {alert.message}
              </Typography>
            </Box>
            <Button size="small" endIcon={<VisibilityIcon />}>
              VIEW
            </Button>
          </CardContent>
        </Card>
      ))}

      <Typography variant="h5" sx={{ mt: 4, mb: 3 }}>
        Active Crops
      </Typography>

      <Grid container spacing={3}>
        {crops.map((crop, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="h6">
                    {crop.name}
                  </Typography>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      backgroundColor: 'primary.main',
                      color: 'white',
                      padding: '4px 8px',
                      borderRadius: '4px'
                    }}
                  >
                    {crop.stage}
                  </Typography>
                </Box>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  Variety: {crop.variety}
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  Growth Progress
                </Typography>
                <LinearProgress variant="determinate" value={70} sx={{ mb: 2 }} />
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <WaterDropIcon color="primary" />
                      <Typography variant="body2">
                        Moisture: {crop.moisture}%
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <ThermostatIcon color="primary" />
                      <Typography variant="body2">
                        Temp: {crop.temperature}°F
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
                      <MonitorHeartIcon color="primary" />
                      <Typography variant="body2">
                        Health: {crop.health}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>
                  Next Action: {crop.nextAction} (Due: {crop.dueDate})
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" sx={{ mt: 4, mb: 3 }}>
        Smart Farming Recommendations
      </Typography>

      <Grid container spacing={3}>
        {recommendations.map((rec, index) => (
          <Grid item xs={12} md={6} lg={3} key={index}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  {rec.icon}
                  <Typography variant="h6" sx={{ ml: 1 }}>
                    {rec.title}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {rec.description}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  {rec.actions.map((action, actionIndex) => (
                    <Button
                      key={actionIndex}
                      variant={actionIndex === 0 ? "contained" : "outlined"}
                      color={action.color}
                      size="small"
                    >
                      {action.label}
                    </Button>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
