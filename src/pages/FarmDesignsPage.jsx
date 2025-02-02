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
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Tabs,
  Tab,
  Divider,
  Chip,
  Container
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Park as TreeIcon,
  Grass as HerbIcon,
  LocalFlorist as FlowerIcon,
  Spa as LeafIcon,
  Agriculture as FarmIcon,
  Landscape as LandscapeIcon,
  Home as HomeIcon,
  WaterDrop as WaterIcon
} from '@mui/icons-material';

const foodForestLayers = {
  canopy: {
    title: 'Canopy Layer (Tall Trees)',
    height: '30-80 feet',
    examples: [
      { name: 'Black Walnut', uses: 'Nuts, timber', spacing: '40-60 ft' },
      { name: 'Chestnut', uses: 'Nuts, timber', spacing: '30-40 ft' },
      { name: 'Pecan', uses: 'Nuts, shade', spacing: '40-60 ft' },
      { name: 'Standard Apple', uses: 'Fruit, shade', spacing: '25-30 ft' },
      { name: 'Mulberry', uses: 'Fruit, wildlife food', spacing: '25-30 ft' }
    ],
    tips: [
      'Plant on north side to avoid shading',
      'Consider mature size when spacing',
      'Use as windbreaks',
      'Plan for harvest access'
    ]
  },
  lowTree: {
    title: 'Low Tree Layer (Small Trees)',
    height: '12-25 feet',
    examples: [
      { name: 'Dwarf Apple', uses: 'Fruit', spacing: '10-15 ft' },
      { name: 'Plum', uses: 'Fruit', spacing: '15-20 ft' },
      { name: 'Paw Paw', uses: 'Native fruit', spacing: '15-20 ft' },
      { name: 'Fig', uses: 'Fruit', spacing: '10-15 ft' },
      { name: 'Serviceberry', uses: 'Fruit, ornamental', spacing: '15-20 ft' }
    ],
    tips: [
      'Ideal for creating partial shade',
      'Good for edge plantings',
      'Consider espalier techniques',
      'Mix flowering times for continuous bloom'
    ]
  },
  shrub: {
    title: 'Shrub Layer',
    height: '3-12 feet',
    examples: [
      { name: 'Blueberry', uses: 'Fruit, fall color', spacing: '4-6 ft' },
      { name: 'Hazelnut', uses: 'Nuts, wildlife', spacing: '6-8 ft' },
      { name: 'Elderberry', uses: 'Fruit, medicine', spacing: '6-8 ft' },
      { name: 'Gooseberry', uses: 'Fruit', spacing: '3-4 ft' },
      { name: 'Raspberry', uses: 'Fruit', spacing: '2-3 ft' }
    ],
    tips: [
      'Create wildlife corridors',
      'Use as natural fencing',
      'Consider maintenance access',
      'Group by water needs'
    ]
  },
  herbaceous: {
    title: 'Herbaceous Layer',
    height: '0-3 feet',
    examples: [
      { name: 'Comfrey', uses: 'Medicine, mulch', spacing: '2-3 ft' },
      { name: 'Rhubarb', uses: 'Food', spacing: '3-4 ft' },
      { name: 'Asparagus', uses: 'Food', spacing: '1.5-2 ft' },
      { name: 'Mint', uses: 'Culinary, tea', spacing: '1-2 ft' },
      { name: 'Oregano', uses: 'Culinary, groundcover', spacing: '1-2 ft' }
    ],
    tips: [
      'Use as ground cover',
      'Plant nitrogen fixers',
      'Consider spreading habits',
      'Mix heights for diversity'
    ]
  },
  groundcover: {
    title: 'Ground Cover Layer',
    height: '0-1 foot',
    examples: [
      { name: 'Strawberry', uses: 'Fruit, erosion control', spacing: '1 ft' },
      { name: 'Thyme', uses: 'Culinary, aromatic', spacing: '6-12 in' },
      { name: 'Clover', uses: 'Nitrogen fixing', spacing: 'Seed' },
      { name: 'Corsican Mint', uses: 'Aromatic ground cover', spacing: '6-12 in' },
      { name: 'Wild Ginger', uses: 'Native ground cover', spacing: '1-2 ft' }
    ],
    tips: [
      'Suppress weeds naturally',
      'Protect soil moisture',
      'Create walking paths',
      'Choose appropriate spreaders'
    ]
  },
  root: {
    title: 'Root Layer',
    height: 'Underground',
    examples: [
      { name: 'Jerusalem Artichoke', uses: 'Food', spacing: '2-3 ft' },
      { name: 'Sweet Potato', uses: 'Food', spacing: '1-2 ft' },
      { name: 'Garlic', uses: 'Food, medicine', spacing: '6 in' },
      { name: 'Horseradish', uses: 'Food, medicine', spacing: '2 ft' },
      { name: 'Daikon Radish', uses: 'Food, soil improvement', spacing: '4-6 in' }
    ],
    tips: [
      'Consider soil depth needs',
      'Mix shallow and deep roots',
      'Use to break up clay',
      'Plan for harvest timing'
    ]
  },
  vine: {
    title: 'Vine Layer',
    height: 'Varies',
    examples: [
      { name: 'Grape', uses: 'Fruit, shade', spacing: '6-8 ft' },
      { name: 'Kiwi', uses: 'Fruit', spacing: '10-15 ft' },
      { name: 'Hardy Passion Fruit', uses: 'Fruit', spacing: '8-10 ft' },
      { name: 'Hops', uses: 'Medicinal, craft', spacing: '3-4 ft' },
      { name: 'Runner Beans', uses: 'Food, nitrogen fixing', spacing: '6 in' }
    ],
    tips: [
      'Provide strong support',
      'Consider sun exposure',
      'Plan vertical space',
      'Mix perennial and annual vines'
    ]
  }
};

const farmLayouts = {
  traditionalRow: {
    title: 'Traditional Row Farming',
    description: 'Organized in straight lines for efficient machinery use',
    benefits: [
      'Easy maintenance',
      'Efficient irrigation',
      'Simple harvest planning',
      'Good for large-scale production'
    ],
    considerations: [
      'Higher soil erosion risk',
      'Less biodiversity',
      'More water runoff',
      'Requires more inputs'
    ]
  },
  raisedBed: {
    title: 'Raised Bed Garden',
    description: 'Elevated growing areas with defined boundaries',
    benefits: [
      'Better soil control',
      'Good drainage',
      'Extended growing season',
      'Ergonomic working height'
    ],
    considerations: [
      'Initial setup cost',
      'Regular soil amendment needed',
      'Limited root depth',
      'More frequent watering'
    ]
  },
  mandala: {
    title: 'Mandala Garden',
    description: 'Circular design with keyhole paths for access',
    benefits: [
      'Maximizes edge space',
      'Beautiful design',
      'Efficient use of space',
      'Good microclimate creation'
    ],
    considerations: [
      'Complex planning needed',
      'Harder to mechanize',
      'Requires careful plant placement',
      'More initial design time'
    ]
  },
  hugelkultur: {
    title: 'Hugelkultur Beds',
    description: 'Raised beds built on decomposing wood',
    benefits: [
      'Water retention',
      'Long-term fertility',
      'Good for slope management',
      'Creates diverse habitats'
    ],
    considerations: [
      'Large initial labor',
      'Takes time to establish',
      'Nitrogen competition early on',
      'Height changes over time'
    ]
  }
};

const edibleLandscaping = {
  frontYard: {
    title: 'Front Yard Design',
    elements: [
      {
        type: 'Ornamental Edibles',
        examples: [
          'Rainbow Swiss Chard',
          'Purple Basil',
          'Flowering Herbs',
          'Dwarf Fruit Trees',
          'Edible Flowers'
        ]
      },
      {
        type: 'Border Plants',
        examples: [
          'Lavender',
          'Rosemary',
          'Thyme',
          'Sage',
          'Strawberries'
        ]
      },
      {
        type: 'Focal Points',
        examples: [
          'Espalier Fruit Trees',
          'Grape Arbors',
          'Berry Bushes',
          'Artichokes',
          'Columnar Apples'
        ]
      }
    ],
    tips: [
      'Maintain neat appearance',
      'Use formal patterns',
      'Include evergreen elements',
      'Consider seasonal interest'
    ]
  },
  backYard: {
    title: 'Back Yard Design',
    elements: [
      {
        type: 'Privacy Screening',
        examples: [
          'Bamboo',
          'Fruit Trees',
          'Berry Hedges',
          'Grape Vines',
          'Jerusalem Artichokes'
        ]
      },
      {
        type: 'Patio Integration',
        examples: [
          'Container Herbs',
          'Vertical Gardens',
          'Dwarf Citrus',
          'Hanging Tomatoes',
          'Pollinator Plants'
        ]
      },
      {
        type: "Children's Play Area",
        examples: [
          'Snap Peas',
          'Cherry Tomatoes',
          'Strawberry Patch',
          'Sunflower House',
          'Berry Maze'
        ]
      }
    ],
    tips: [
      'Create outdoor rooms',
      'Include play spaces',
      'Plan harvest access',
      'Consider views'
    ]
  }
};

function TabPanel({ children, value, index }) {
  return (
    <div hidden={value !== index} style={{ padding: '24px 0' }}>
      {value === index && children}
    </div>
  );
}

function FarmDesignsPage() {
  const [mainTab, setMainTab] = useState(0);

  const handleMainTabChange = (event, newValue) => {
    setMainTab(newValue);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
        Farm Design Layouts
      </Typography>

      <Paper elevation={3}>
        <Tabs
          value={mainTab}
          onChange={handleMainTabChange}
          variant="fullWidth"
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab 
            icon={<TreeIcon />} 
            label="Food Forest" 
            iconPosition="start"
          />
          <Tab 
            icon={<FarmIcon />} 
            label="Farm Layouts" 
            iconPosition="start"
          />
          <Tab 
            icon={<HomeIcon />} 
            label="Edible Landscaping" 
            iconPosition="start"
          />
        </Tabs>

        {/* Food Forest Tab */}
        <TabPanel value={mainTab} index={0}>
          <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Food Forest Design
            </Typography>
            <Typography variant="body1" paragraph>
              A food forest mimics natural forest ecosystems while focusing on food production. It consists of seven main layers:
            </Typography>
            
            {Object.entries(foodForestLayers).map(([key, layer]) => (
              <Accordion key={key} defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">
                    {layer.title} - {layer.height}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Typography variant="subtitle1" gutterBottom>
                        Plants & Uses
                      </Typography>
                      <List dense>
                        {layer.examples.map((plant) => (
                          <ListItem key={plant.name}>
                            <ListItemIcon>
                              <LeafIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText 
                              primary={plant.name}
                              secondary={`Uses: ${plant.uses} | Spacing: ${plant.spacing}`}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography variant="subtitle1" gutterBottom>
                        Design Tips
                      </Typography>
                      <List dense>
                        {layer.tips.map((tip) => (
                          <ListItem key={tip}>
                            <ListItemIcon>
                              <LandscapeIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary={tip} />
                          </ListItem>
                        ))}
                      </List>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </TabPanel>

        {/* Farm Layouts Tab */}
        <TabPanel value={mainTab} index={1}>
          <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Farm Layout Styles
            </Typography>
            <Grid container spacing={3}>
              {Object.entries(farmLayouts).map(([key, layout]) => (
                <Grid item xs={12} md={6} key={key}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {layout.title}
                      </Typography>
                      <Typography variant="body2" paragraph>
                        {layout.description}
                      </Typography>
                      <Divider sx={{ my: 2 }} />
                      <Typography variant="subtitle2" color="primary" gutterBottom>
                        Benefits:
                      </Typography>
                      <List dense>
                        {layout.benefits.map((benefit) => (
                          <ListItem key={benefit}>
                            <ListItemIcon>
                              <FarmIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary={benefit} />
                          </ListItem>
                        ))}
                      </List>
                      <Typography variant="subtitle2" color="error" gutterBottom>
                        Considerations:
                      </Typography>
                      <List dense>
                        {layout.considerations.map((consideration) => (
                          <ListItem key={consideration}>
                            <ListItemIcon>
                              <WaterIcon color="error" />
                            </ListItemIcon>
                            <ListItemText primary={consideration} />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </TabPanel>

        {/* Edible Landscaping Tab */}
        <TabPanel value={mainTab} index={2}>
          <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Edible Landscaping Designs
            </Typography>
            {Object.entries(edibleLandscaping).map(([key, area]) => (
              <Paper elevation={3} sx={{ p: 3, mb: 3 }} key={key}>
                <Typography variant="h6" gutterBottom>
                  {area.title}
                </Typography>
                <Grid container spacing={3}>
                  {area.elements.map((element) => (
                    <Grid item xs={12} md={4} key={element.type}>
                      <Card>
                        <CardContent>
                          <Typography variant="subtitle1" gutterBottom>
                            {element.type}
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {element.examples.map((example) => (
                              <Chip
                                key={example}
                                label={example}
                                icon={<FlowerIcon />}
                                variant="outlined"
                                color="primary"
                              />
                            ))}
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                  <Grid item xs={12}>
                    <Typography variant="subtitle2" color="primary" gutterBottom>
                      Design Tips:
                    </Typography>
                    <List dense>
                      {area.tips.map((tip) => (
                        <ListItem key={tip}>
                          <ListItemIcon>
                            <LandscapeIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={tip} />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                </Grid>
              </Paper>
            ))}
          </Box>
        </TabPanel>
      </Paper>
    </Container>
  );
}

export default FarmDesignsPage;
