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
          'Install irrigation systems',
          'Plan crop rotation'
        ]
      },
      {
        category: 'Planting',
        items: [
          'Start seeds indoors',
          'Direct sow cold-hardy crops',
          'Plant fruit trees',
          'Transplant seedlings',
          'Install support structures'
        ]
      },
      {
        category: 'Maintenance',
        items: [
          'Prune fruit trees',
          'Clean and repair tools',
          'Set up pest barriers',
          'Monitor for frost',
          'Begin composting'
        ]
      }
    ],
    crops: [
      'Peas',
      'Lettuce',
      'Spinach',
      'Radishes',
      'Carrots',
      'Beets',
      'Broccoli',
      'Potatoes',
      'Onions',
      'Garlic'
    ],
    tips: [
      'Watch for late frosts',
      'Use row covers for protection',
      'Start with cold-hardy crops',
      'Monitor soil moisture',
      'Keep detailed planting records'
    ]
  },
  summer: {
    icon: <SummerIcon />,
    tasks: [
      {
        category: 'Planting',
        items: [
          'Succession planting',
          'Plant heat-loving crops',
          'Start fall crops',
          'Fill garden gaps',
          'Plant cover crops'
        ]
      },
      {
        category: 'Maintenance',
        items: [
          'Regular watering',
          'Mulch for moisture',
          'Weed control',
          'Pest monitoring',
          'Prune tomatoes'
        ]
      },
      {
        category: 'Harvesting',
        items: [
          'Daily harvest checks',
          'Process surplus',
          'Save seeds',
          'Market preparation',
          'Storage preparation'
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
      'Melons',
      'Basil',
      'Okra'
    ],
    tips: [
      'Water deeply and less frequently',
      'Harvest in early morning',
      'Monitor for disease',
      'Provide shade if needed',
      'Maintain air circulation'
    ]
  },
  fall: {
    icon: <FallIcon />,
    tasks: [
      {
        category: 'Planting',
        items: [
          'Plant fall crops',
          'Plant garlic',
          'Sow cover crops',
          'Plant spring bulbs',
          'Start winter greenhouse'
        ]
      },
      {
        category: 'Maintenance',
        items: [
          'Clean up dead plants',
          'Collect leaves for compost',
          'Protect tender plants',
          'Prepare high tunnels',
          'Soil testing'
        ]
      },
      {
        category: 'Planning',
        items: [
          'Review season notes',
          'Plan crop rotation',
          'Order seeds early',
          'Maintain equipment',
          'Update business plan'
        ]
      }
    ],
    crops: [
      'Kale',
      'Brussels Sprouts',
      'Cabbage',
      'Cauliflower',
      'Carrots',
      'Beets',
      'Turnips',
      'Garlic',
      'Leeks',
      'Winter Squash'
    ],
    tips: [
      'Watch first frost dates',
      'Use season extension',
      'Store crops properly',
      'Clean and store tools',
      'Document lessons learned'
    ]
  },
  winter: {
    icon: <WinterIcon />,
    tasks: [
      {
        category: 'Planning',
        items: [
          'Create crop plan',
          'Order seeds',
          'Design garden layout',
          'Budget planning',
          'Equipment maintenance'
        ]
      },
      {
        category: 'Infrastructure',
        items: [
          'Repair tools',
          'Build cold frames',
          'Maintain greenhouse',
          'Check irrigation',
          'Organize storage'
        ]
      },
      {
        category: 'Education',
        items: [
          'Attend workshops',
          'Study new techniques',
          'Network with farmers',
          'Update certifications',
          'Review regulations'
        ]
      }
    ],
    crops: [
      'Microgreens',
      'Sprouts',
      'Winter Greens',
      'Root Vegetables',
      'Herbs'
    ],
    tips: [
      'Plan crop succession',
      'Organize seed inventory',
      'Review farm records',
      'Research new varieties',
      'Attend farmer conferences'
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
