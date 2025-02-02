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
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import {
  Grass as SoilIcon,
  Science as TestIcon,
  Opacity as WaterIcon,
  Nature as OrganicIcon,
  Construction as ToolsIcon
} from '@mui/icons-material';

const soilTypes = [
  {
    type: 'Sandy',
    characteristics: [
      'Large particles',
      'Well-draining',
      'Poor nutrient retention',
      'Warms quickly in spring'
    ],
    bestCrops: [
      'Root vegetables',
      'Potatoes',
      'Carrots',
      'Radishes'
    ],
    improvements: [
      'Add organic matter',
      'Use mulch to retain moisture',
      'Add clay minerals',
      'Frequent light watering'
    ]
  },
  {
    type: 'Clay',
    characteristics: [
      'Small particles',
      'Poor drainage',
      'High nutrient retention',
      'Slow to warm in spring'
    ],
    bestCrops: [
      'Leafy greens',
      'Brassicas',
      'Late season crops',
      'Perennial fruits'
    ],
    improvements: [
      'Add organic matter',
      'Add sand or grit',
      'Avoid working when wet',
      'Use raised beds'
    ]
  },
  {
    type: 'Loam',
    characteristics: [
      'Mixed particle sizes',
      'Good drainage',
      'Good nutrient retention',
      'Easy to work'
    ],
    bestCrops: [
      'Most crops',
      'Tomatoes',
      'Peppers',
      'Corn'
    ],
    improvements: [
      'Maintain organic matter',
      'Regular crop rotation',
      'Cover cropping',
      'Minimal tillage'
    ]
  },
  {
    type: 'Silt',
    characteristics: [
      'Medium particles',
      'Moderate drainage',
      'Good nutrient retention',
      'Compacts easily'
    ],
    bestCrops: [
      'Fruit trees',
      'Vine crops',
      'Beans',
      'Peas'
    ],
    improvements: [
      'Add organic matter',
      'Minimize compaction',
      'Use mulch',
      'Add drainage'
    ]
  }
];

const pHGuide = [
  { range: '4.0-5.0', crops: ['Blueberries', 'Potatoes', 'Sweet Potatoes'] },
  { range: '5.1-5.5', crops: ['Strawberries', 'Raspberries', 'Carrots'] },
  { range: '5.6-6.0', crops: ['Tomatoes', 'Peppers', 'Beans'] },
  { range: '6.1-6.5', crops: ['Most vegetables', 'Herbs', 'Fruit trees'] },
  { range: '6.6-7.0', crops: ['Asparagus', 'Brassicas', 'Spinach'] },
  { range: '7.1-7.5', crops: ['Beets', 'Celery', 'Cauliflower'] }
];

const nutrientDeficiencies = [
  {
    nutrient: 'Nitrogen (N)',
    signs: [
      'Yellowing of older leaves',
      'Stunted growth',
      'Poor leaf development'
    ],
    solutions: [
      'Add composted manure',
      'Plant legume cover crops',
      'Apply organic nitrogen fertilizer'
    ]
  },
  {
    nutrient: 'Phosphorus (P)',
    signs: [
      'Purple leaf tint',
      'Stunted root growth',
      'Poor flowering'
    ],
    solutions: [
      'Add bone meal',
      'Incorporate rock phosphate',
      'Maintain proper pH'
    ]
  },
  {
    nutrient: 'Potassium (K)',
    signs: [
      'Brown leaf edges',
      'Poor fruit development',
      'Weak stems'
    ],
    solutions: [
      'Add wood ash',
      'Use composted seaweed',
      'Apply organic potassium fertilizer'
    ]
  }
];

export default function SoilManagement() {
  const [selectedSoilType, setSelectedSoilType] = useState('');
  const [pHValue, setPHValue] = useState([6.0, 7.0]);

  const handleSoilTypeChange = (event) => {
    setSelectedSoilType(event.target.value);
  };

  const handlePHChange = (event, newValue) => {
    setPHValue(newValue);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Soil Management Guide
      </Typography>

      {/* Soil Type Selection */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          <SoilIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
          Soil Type Analysis
        </Typography>
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel>Select Your Soil Type</InputLabel>
          <Select
            value={selectedSoilType}
            label="Select Your Soil Type"
            onChange={handleSoilTypeChange}
          >
            {soilTypes.map((soil) => (
              <MenuItem value={soil.type} key={soil.type}>
                {soil.type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {selectedSoilType && (
          <Grid container spacing={3}>
            {['characteristics', 'bestCrops', 'improvements'].map((category) => (
              <Grid item xs={12} md={4} key={category}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </Typography>
                    <List dense>
                      {soilTypes
                        .find(soil => soil.type === selectedSoilType)[category]
                        .map((item) => (
                          <ListItem key={item}>
                            <ListItemIcon>
                              <SoilIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                          </ListItem>
                        ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Paper>

      {/* pH Guide */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          <TestIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
          pH Guide
        </Typography>
        <Box sx={{ width: '100%', px: 3, mb: 4 }}>
          <Typography gutterBottom>Select pH Range:</Typography>
          <Slider
            value={pHValue}
            onChange={handlePHChange}
            valueLabelDisplay="on"
            min={4.0}
            max={7.5}
            step={0.1}
            marks={[
              { value: 4.0, label: '4.0' },
              { value: 5.5, label: '5.5' },
              { value: 6.5, label: '6.5' },
              { value: 7.5, label: '7.5' }
            ]}
          />
        </Box>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>pH Range</TableCell>
                <TableCell>Suitable Crops</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pHGuide.map((range) => (
                <TableRow key={range.range}>
                  <TableCell>{range.range}</TableCell>
                  <TableCell>{range.crops.join(', ')}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* Nutrient Deficiencies */}
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          <OrganicIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
          Common Nutrient Deficiencies
        </Typography>
        <Grid container spacing={3}>
          {nutrientDeficiencies.map((deficiency) => (
            <Grid item xs={12} md={4} key={deficiency.nutrient}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {deficiency.nutrient}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" color="error">
                      Signs:
                    </Typography>
                    <List dense>
                      {deficiency.signs.map((sign) => (
                        <ListItem key={sign}>
                          <ListItemIcon>
                            <TestIcon color="error" />
                          </ListItemIcon>
                          <ListItemText primary={sign} />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" color="success.main">
                      Solutions:
                    </Typography>
                    <List dense>
                      {deficiency.solutions.map((solution) => (
                        <ListItem key={solution}>
                          <ListItemIcon>
                            <ToolsIcon color="success" />
                          </ListItemIcon>
                          <ListItemText primary={solution} />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
}
