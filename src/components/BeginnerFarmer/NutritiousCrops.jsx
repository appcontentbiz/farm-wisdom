import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Link,
  Divider
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Timer as TimerIcon,
  AttachMoney as MoneyIcon,
  School as SchoolIcon,
  Agriculture as AgricultureIcon
} from '@mui/icons-material';

const nutritionData = {
  vegetables: [
    { name: 'Kale', nutrients: 'Vitamins A, C, K, calcium, antioxidants', growthTime: '50-60 days' },
    { name: 'Spinach', nutrients: 'Iron, folate, magnesium', growthTime: '30-45 days' },
    { name: 'Sweet Potatoes', nutrients: 'Beta-carotene, fiber, potassium', growthTime: '90-120 days' },
    { name: 'Broccoli', nutrients: 'Vitamins C and K, fiber', growthTime: '80-100 days' },
    { name: 'Carrots', nutrients: 'Beta-carotene, vitamin A', growthTime: '70-80 days' },
    { name: 'Beets', nutrients: 'Nitrates, folate', growthTime: '50-70 days' },
    { name: 'Red Bell Peppers', nutrients: 'Vitamin C, antioxidants', growthTime: '60-90 days' },
    { name: 'Garlic', nutrients: 'Immune-boosting compounds', growthTime: '240-270 days' },
    { name: 'Brussels Sprouts', nutrients: 'Vitamin C, fiber', growthTime: '90-180 days' },
    { name: 'Swiss Chard', nutrients: 'Magnesium, iron, vitamins A and K', growthTime: '45-60 days' }
  ],
  fruits: [
    { name: 'Blueberries', nutrients: 'Antioxidants, brain-boosting compounds', growthTime: '2-3 years' },
    { name: 'Avocados', nutrients: '20 essential vitamins and minerals', growthTime: '3-5 years' },
    { name: 'Blackberries', nutrients: 'Vitamin C, fiber, polyphenols', growthTime: '1-2 years' },
    { name: 'Papaya', nutrients: 'Vitamin C, digestive enzymes', growthTime: '8-10 months' },
    { name: 'Pomegranate', nutrients: 'Antioxidants, polyphenols', growthTime: '2-3 years' },
    { name: 'Oranges', nutrients: 'Vitamin C', growthTime: '3-5 years' },
    { name: 'Bananas', nutrients: 'Potassium', growthTime: '9-12 months' },
    { name: 'Strawberries', nutrients: 'Vitamin C, antioxidants', growthTime: '4-5 months' },
    { name: 'Cherries', nutrients: 'Anti-inflammatory compounds, melatonin', growthTime: '3-5 years' },
    { name: 'Grapes', nutrients: 'Resveratrol', growthTime: '2-3 years' }
  ]
};

const quickStartCrops = [
  {
    name: 'Microgreens',
    growthTime: '7-21 days',
    profitPotential: 'High',
    startupCost: '$1,500+',
    monthlyProfit: '$4,500-$8,500',
    space: '100+ sq. ft. indoor'
  },
  {
    name: 'Mushrooms',
    growthTime: '3-6 weeks',
    profitPotential: 'Medium-High',
    startupCost: '$2,000+',
    monthlyProfit: '$1,500-$2,500',
    space: '100+ sq. ft. indoor'
  },
  {
    name: 'Garlic & Herbs',
    growthTime: '6-8 months',
    profitPotential: 'Medium',
    startupCost: '$3,000-$8,000',
    monthlyProfit: '$1,800-$4,200',
    space: '¼-1 acre'
  },
  {
    name: 'Berries',
    growthTime: '1-2 years',
    profitPotential: 'High',
    startupCost: '$10,000+',
    monthlyProfit: '$2,500-$5,800',
    space: '¼+ acre'
  }
];

const educationOptions = [
  {
    type: 'Online Degrees',
    institutions: [
      {
        name: 'Oregon State University',
        program: 'B.S. in Agricultural Sciences',
        link: 'https://ecampus.oregonstate.edu/online-degrees/undergraduate/ag-sciences/'
      },
      {
        name: 'University of Massachusetts',
        program: 'B.S. in Sustainable Food & Farming',
        link: 'https://stockbridge.cns.umass.edu/SUFF-online'
      },
      {
        name: 'Colorado State University',
        program: "Master's in Agriculture",
        link: 'https://www.online.colostate.edu/degrees/agricultural-sciences/'
      }
    ]
  },
  {
    type: 'Certificates',
    institutions: [
      {
        name: 'Cornell University',
        program: 'Organic Agriculture Certificate',
        link: 'https://cals.cornell.edu/education/degrees-programs/certificate-programs'
      },
      {
        name: 'Penn State',
        program: 'Agricultural Business Management',
        link: 'https://www.worldcampus.psu.edu/degrees-and-certificates/agricultural-business-management-certificate/overview'
      }
    ]
  }
];

export default function NutritiousCrops() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Guide to Nutritious & Profitable Crops
      </Typography>

      {/* Most Nutritious Crops Section */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Most Nutritious Crops</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>Vegetables</Typography>
                  <TableContainer>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Key Nutrients</TableCell>
                          <TableCell>Growth Time</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {nutritionData.vegetables.map((veg) => (
                          <TableRow key={veg.name}>
                            <TableCell>{veg.name}</TableCell>
                            <TableCell>{veg.nutrients}</TableCell>
                            <TableCell>{veg.growthTime}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>Fruits</Typography>
                  <TableContainer>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Key Nutrients</TableCell>
                          <TableCell>Growth Time</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {nutritionData.fruits.map((fruit) => (
                          <TableRow key={fruit.name}>
                            <TableCell>{fruit.name}</TableCell>
                            <TableCell>{fruit.nutrients}</TableCell>
                            <TableCell>{fruit.growthTime}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      {/* Quick Start Guide Section */}
      <Accordion defaultExpanded sx={{ mt: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Quick Start Guide - Fastest Growing & Most Profitable</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            {quickStartCrops.map((crop) => (
              <Grid item xs={12} md={6} lg={3} key={crop.name}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>{crop.name}</Typography>
                    <Box sx={{ mb: 2 }}>
                      <Chip icon={<TimerIcon />} label={crop.growthTime} sx={{ mr: 1, mb: 1 }} />
                      <Chip icon={<MoneyIcon />} label={crop.profitPotential} sx={{ mb: 1 }} />
                    </Box>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      Startup Cost: {crop.startupCost}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      Monthly Profit: {crop.monthlyProfit}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Space Needed: {crop.space}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>

      {/* Education Options Section */}
      <Accordion defaultExpanded sx={{ mt: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Agricultural Education Options</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            {educationOptions.map((category) => (
              <Grid item xs={12} md={6} key={category.type}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      <SchoolIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                      {category.type}
                    </Typography>
                    <Divider sx={{ mb: 2 }} />
                    {category.institutions.map((inst) => (
                      <Box key={inst.name} sx={{ mb: 2 }}>
                        <Typography variant="subtitle1">{inst.name}</Typography>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          {inst.program}
                        </Typography>
                        <Link href={inst.link} target="_blank" rel="noopener">
                          Learn More
                        </Link>
                      </Box>
                    ))}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
