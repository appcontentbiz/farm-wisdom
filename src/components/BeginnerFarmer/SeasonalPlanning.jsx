import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Divider,
  Button,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert
} from '@mui/material';
import {
  WbSunny as SunIcon,
  AcUnit as WinterIcon,
  Park as SpringIcon,
  Whatshot as SummerIcon,
  FilterVintage as FallIcon,
  CalendarMonth as CalendarIcon,
  Water as WaterIcon,
  BugReport as PestIcon,
  LocalFlorist as PlantIcon
} from '@mui/icons-material';

const seasonalGuide = {
  spring: {
    icon: <SpringIcon />,
    tasks: [
      {
        category: 'Soil Preparation',
        items: [
          'Test soil pH and nutrients',
          'Add compost and amendments',
          'Till or prepare beds',
          'Install irrigation systems'
        ]
      },
      {
        category: 'Planting',
        items: [
          'Start cold-hardy vegetables',
          'Plant early season crops',
          'Start warm-season seedlings indoors',
          'Plant fruit trees and bushes'
        ]
      },
      {
        category: 'Maintenance',
        items: [
          'Clean and sharpen tools',
          'Repair fences and structures',
          'Set up season extension devices',
          'Prepare irrigation systems'
        ]
      }
    ],
    crops: [
      'Peas',
      'Lettuce',
      'Spinach',
      'Carrots',
      'Radishes',
      'Beets',
      'Onions',
      'Potatoes'
    ],
    tips: [
      'Watch for late frosts',
      'Use row covers for protection',
      'Monitor soil temperature',
      'Start slow with succession planting'
    ]
  },
  summer: {
    icon: <SummerIcon />,
    tasks: [
      {
        category: 'Crop Management',
        items: [
          'Regular harvesting',
          'Succession planting',
          'Weed control',
          'Support climbing plants'
        ]
      },
      {
        category: 'Pest Control',
        items: [
          'Monitor for pests daily',
          'Implement organic controls',
          'Maintain beneficial insect habitat',
          'Remove diseased plants'
        ]
      },
      {
        category: 'Water Management',
        items: [
          'Regular deep watering',
          'Mulch to retain moisture',
          'Monitor irrigation systems',
          'Water early morning/evening'
        ]
      }
    ],
    crops: [
      'Tomatoes',
      'Peppers',
      'Cucumbers',
      'Squash',
      'Beans',
      'Corn',
      'Eggplant',
      'Melons'
    ],
    tips: [
      'Water deeply and less frequently',
      'Use mulch to conserve moisture',
      'Harvest regularly for continued production',
      'Provide shade for sensitive crops'
    ]
  },
  fall: {
    icon: <FallIcon />,
    tasks: [
      {
        category: 'Harvest & Storage',
        items: [
          'Harvest mature crops',
          'Prepare storage areas',
          'Process and preserve produce',
          'Save seeds for next year'
        ]
      },
      {
        category: 'Soil Care',
        items: [
          'Plant cover crops',
          'Add compost to beds',
          'Mulch perennial beds',
          'Collect leaves for composting'
        ]
      },
      {
        category: 'Planning',
        items: [
          'Record keeping and evaluation',
          'Order supplies for next season',
          'Plan crop rotation',
          'Maintain equipment'
        ]
      }
    ],
    crops: [
      'Kale',
      'Brussels Sprouts',
      'Cabbage',
      'Cauliflower',
      'Broccoli',
      'Root crops',
      'Garlic',
      'Winter squash'
    ],
    tips: [
      'Watch for early frosts',
      'Use season extension methods',
      'Clean up diseased plant material',
      'Store crops properly'
    ]
  },
  winter: {
    icon: <WinterIcon />,
    tasks: [
      {
        category: 'Planning & Preparation',
        items: [
          'Review last season\'s records',
          'Order seeds and supplies',
          'Plan crop rotations',
          'Maintain tools and equipment'
        ]
      },
      {
        category: 'Infrastructure',
        items: [
          'Repair greenhouses/cold frames',
          'Maintain storage facilities',
          'Plan new garden areas',
          'Build/repair structures'
        ]
      },
      {
        category: 'Education',
        items: [
          'Attend farming workshops',
          'Study new techniques',
          'Network with other farmers',
          'Update business plan'
        ]
      }
    ],
    crops: [
      'Microgreens (indoor)',
      'Sprouts',
      'Winter greenhouse crops',
      'Cold frame greens'
    ],
    tips: [
      'Plan crop succession for next year',
      'Organize seed inventory',
      'Review and update farm records',
      'Research new varieties and methods'
    ]
  }
};

const climateZones = [
  { value: 'cold', label: 'Cold (Zones 3-5)', description: 'Short growing season, cold winters' },
  { value: 'temperate', label: 'Temperate (Zones 6-7)', description: 'Moderate seasons' },
  { value: 'warm', label: 'Warm (Zones 8-9)', description: 'Long growing season' },
  { value: 'hot', label: 'Hot (Zones 10-13)', description: 'Year-round growing possible' }
];

function SeasonalPlanning() {
  const [selectedSeason, setSelectedSeason] = useState('spring');
  const [climateZone, setClimateZone] = useState('');

  const handleSeasonChange = (event) => {
    setSelectedSeason(event.target.value);
  };

  const handleClimateZoneChange = (event) => {
    setClimateZone(event.target.value);
  };

  const getSeasonIcon = (season) => {
    switch (season) {
      case 'spring':
        return <SpringIcon />;
      case 'summer':
        return <SummerIcon />;
      case 'fall':
        return <FallIcon />;
      case 'winter':
        return <WinterIcon />;
      default:
        return <CalendarIcon />;
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Seasonal Planning Guide
      </Typography>

      {/* Season and Climate Selection */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel>Select Season</InputLabel>
            <Select
              value={selectedSeason}
              label="Select Season"
              onChange={handleSeasonChange}
              startAdornment={getSeasonIcon(selectedSeason)}
            >
              <MenuItem value="spring">Spring</MenuItem>
              <MenuItem value="summer">Summer</MenuItem>
              <MenuItem value="fall">Fall</MenuItem>
              <MenuItem value="winter">Winter</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel>Climate Zone</InputLabel>
            <Select
              value={climateZone}
              label="Climate Zone"
              onChange={handleClimateZoneChange}
            >
              {climateZones.map((zone) => (
                <MenuItem value={zone.value} key={zone.value}>
                  {zone.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {climateZone && (
        <Alert severity="info" sx={{ mb: 4 }}>
          {climateZones.find(zone => zone.value === climateZone)?.description}
          {' '}
          Adjust planting times and crop selections accordingly.
        </Alert>
      )}

      {/* Seasonal Tasks */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
          {seasonalGuide[selectedSeason].icon}
          <Box sx={{ ml: 1 }}>
            {selectedSeason.charAt(0).toUpperCase() + selectedSeason.slice(1)} Tasks
          </Box>
        </Typography>
        <Grid container spacing={3}>
          {seasonalGuide[selectedSeason].tasks.map((taskGroup) => (
            <Grid item xs={12} md={4} key={taskGroup.category}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {taskGroup.category}
                  </Typography>
                  <List dense>
                    {taskGroup.items.map((task) => (
                      <ListItem key={task}>
                        <ListItemIcon>
                          <PlantIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={task} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Seasonal Crops */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Recommended Crops
        </Typography>
        <Grid container spacing={2}>
          {seasonalGuide[selectedSeason].crops.map((crop) => (
            <Grid item xs={6} sm={4} md={3} key={crop}>
              <Chip
                icon={<LocalFlorist />}
                label={crop}
                sx={{ width: '100%' }}
                color="primary"
                variant="outlined"
              />
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Seasonal Tips */}
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Seasonal Tips
        </Typography>
        <Grid container spacing={2}>
          {seasonalGuide[selectedSeason].tips.map((tip) => (
            <Grid item xs={12} sm={6} md={3} key={tip}>
              <Card>
                <CardContent>
                  <Typography variant="body2">
                    {tip}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
}

export default SeasonalPlanning;
