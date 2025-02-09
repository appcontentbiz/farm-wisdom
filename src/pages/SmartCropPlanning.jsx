import React, { useState } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Chip,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Alert
} from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import OpacityIcon from '@mui/icons-material/Opacity';
import TerrainIcon from '@mui/icons-material/Terrain';
import TimelineIcon from '@mui/icons-material/Timeline';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import EcoIcon from '@mui/icons-material/Eco';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import Brightness5Icon from '@mui/icons-material/Brightness5';

export default function SmartCropPlanning() {
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const crops = [
    {
      name: 'Bell Peppers',
      season: 'Spring-Summer',
      waterNeeds: 'Moderate',
      soilType: 'Well-drained, rich in organic matter',
      aiInsights: [
        'Disease detection through leaf analysis',
        'Precision watering based on soil moisture data',
        'Yield prediction using growth patterns'
      ],
      sustainablePractices: [
        'Companion planting with basil and marigolds',
        'Natural pest control using beneficial insects',
        'Drip irrigation for water conservation'
      ]
    },
    {
      name: 'Carrots',
      season: 'Spring-Fall',
      waterNeeds: 'Moderate',
      soilType: 'Deep, loose, well-drained',
      aiInsights: [
        'Root development monitoring using soil sensors',
        'Growth rate optimization through data analysis',
        'Harvest timing predictions'
      ],
      sustainablePractices: [
        'Cover cropping to prevent soil erosion',
        'Crop rotation with legumes',
        'Organic mulching for moisture retention'
      ]
    },
    {
      name: 'Cucumber',
      season: 'Summer',
      waterNeeds: 'High',
      soilType: 'Rich, well-drained',
      aiInsights: [
        'Early disease detection using image analysis',
        'Automated pollination tracking',
        'Yield optimization through climate data'
      ],
      sustainablePractices: [
        'Vertical growing techniques',
        'Integrated pest management',
        'Water recycling systems'
      ]
    },
    {
      name: 'Spinach',
      season: 'Spring-Fall',
      waterNeeds: 'Moderate',
      soilType: 'Rich, well-drained',
      aiInsights: [
        'Nutrient deficiency detection',
        'Optimal harvest window prediction',
        'Growth rate monitoring'
      ],
      sustainablePractices: [
        'Natural soil enrichment methods',
        'Shade cloth usage for temperature control',
        'Efficient water management systems'
      ]
    }
  ];

  const modernFarmingTips = [
    {
      title: 'AI-Powered Precision Agriculture',
      icon: <PrecisionManufacturingIcon />,
      description: 'Using AI for precise resource management, disease detection, and yield prediction',
      techniques: [
        'Smart sensors for soil and climate monitoring',
        'Computer vision for plant health analysis',
        'Predictive analytics for harvest optimization'
      ]
    },
    {
      title: 'Sustainable Water Management',
      icon: <WaterDropIcon />,
      description: 'Advanced irrigation and water conservation methods',
      techniques: [
        'Soil moisture sensors and automated irrigation',
        'Rainwater harvesting systems',
        'Drought-resistant farming techniques'
      ]
    },
    {
      title: 'Modern Farming Technologies',
      icon: <AgricultureIcon />,
      description: 'Cutting-edge tools and methods for efficient farming',
      techniques: [
        'Drone monitoring for crop assessment',
        'IoT devices for environmental control',
        'Automated climate control systems'
      ]
    },
    {
      title: 'Climate-Smart Agriculture',
      icon: <CloudQueueIcon />,
      description: 'Adapting to and mitigating climate change impacts',
      techniques: [
        'Weather pattern analysis and prediction',
        'Climate-resilient farming methods',
        'Sustainable soil management'
      ]
    }
  ];

  const handleCropClick = (crop) => {
    setSelectedCrop(crop);
    setDialogOpen(true);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom component="h1">
        Smart Crop Planning
      </Typography>

      <Alert severity="info" sx={{ mb: 3 }}>
        Our AI-powered system provides real-time insights and sustainable farming recommendations
        based on local conditions and modern agricultural practices.
      </Alert>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Modern Farming Insights
        </Typography>
        <Grid container spacing={3}>
          {modernFarmingTips.map((tip) => (
            <Grid item xs={12} md={6} key={tip.title}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    {tip.icon}
                    <Typography variant="h6" sx={{ ml: 1 }}>
                      {tip.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {tip.description}
                  </Typography>
                  <List dense>
                    {tip.techniques.map((technique) => (
                      <ListItem key={technique}>
                        <ListItemIcon>
                          <EcoIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary={technique} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Typography variant="h5" gutterBottom>
        Active Crops
      </Typography>
      <Grid container spacing={3}>
        {crops.map((crop) => (
          <Grid item xs={12} md={6} key={crop.name}>
            <Card 
              sx={{ 
                cursor: 'pointer',
                '&:hover': { boxShadow: 6 }
              }}
              onClick={() => handleCropClick(crop)}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {crop.name}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                  <Chip icon={<WbSunnyIcon />} label={crop.season} />
                  <Chip icon={<OpacityIcon />} label={crop.waterNeeds} />
                  <Chip icon={<TerrainIcon />} label="Soil Type" />
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Click for AI insights and sustainable practices
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="md" fullWidth>
        {selectedCrop && (
          <>
            <DialogTitle>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocalFloristIcon color="primary" sx={{ mr: 1 }} />
                {selectedCrop.name} - Smart Farming Guide
              </Box>
            </DialogTitle>
            <DialogContent>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                    <AnalyticsIcon sx={{ mr: 1 }} /> AI-Powered Insights
                  </Typography>
                  <List>
                    {selectedCrop.aiInsights.map((insight, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <TimelineIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={insight} />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                  <Typography variant="h6" gutterBottom sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                    <Brightness5Icon sx={{ mr: 1 }} /> Sustainable Practices
                  </Typography>
                  <List>
                    {selectedCrop.sustainablePractices.map((practice, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <EcoIcon color="success" />
                        </ListItemIcon>
                        <ListItemText primary={practice} />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setDialogOpen(false)}>Close</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Container>
  );
}
