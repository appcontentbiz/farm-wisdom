import React, { useState } from 'react';
import {
  Container,
  Typography,
  Tabs,
  Tab,
  Box,
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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import PetsIcon from '@mui/icons-material/Pets';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import GrassIcon from '@mui/icons-material/Grass';

const topCrops = [
  {
    name: 'Corn',
    schedule: {
      plowing: 'Early spring (March-April)',
      planting: 'Mid-spring (April-May)',
      watering: 'Regular intervals, 1-1.5 inches per week',
      harvest: 'Late summer to early fall (August-September)'
    },
    care: 'Monitor for pests, maintain soil moisture, apply fertilizer as needed'
  },
  {
    name: 'Soybeans',
    schedule: {
      plowing: 'Early spring (March-April)',
      planting: 'Late spring (May-June)',
      watering: 'Regular intervals, 1 inch per week',
      harvest: 'Fall (September-October)'
    },
    care: 'Rotate crops, monitor for diseases, maintain proper drainage'
  },
  {
    name: 'Wheat',
    schedule: {
      plowing: 'Late summer/early fall for winter wheat',
      planting: 'September-October for winter wheat, March-May for spring wheat',
      watering: 'As needed, depends on rainfall',
      harvest: 'Mid-summer for winter wheat, late summer for spring wheat'
    },
    care: 'Monitor for rust and other diseases, control weeds'
  },
  {
    name: 'Cotton',
    schedule: {
      plowing: 'Early spring (March)',
      planting: 'April-May when soil temperature reaches 60°F',
      watering: '1-2 inches per week during flowering and boll development',
      harvest: 'Late summer to fall (August-October)'
    },
    care: 'Regular pest monitoring, proper fertilization, defoliation before harvest'
  },
  {
    name: 'Rice',
    schedule: {
      plowing: 'Early spring (March)',
      planting: 'April-May',
      watering: 'Maintain 2-4 inches of standing water',
      harvest: 'Late summer to fall (August-October)'
    },
    care: 'Maintain proper water levels, monitor for diseases'
  },
  {
    name: 'Potatoes',
    schedule: {
      plowing: 'Early spring (March)',
      planting: 'March-April',
      watering: '1-2 inches per week',
      harvest: 'Late summer to fall (August-October)'
    },
    care: 'Hill soil around plants, monitor for blight'
  },
  {
    name: 'Tomatoes',
    schedule: {
      plowing: 'Early spring',
      planting: 'After last frost (April-May)',
      watering: '1-2 inches per week',
      harvest: 'Mid-summer to fall (July-October)'
    },
    care: 'Stake or cage plants, prune suckers, monitor for diseases'
  },
  {
    name: 'Apples',
    schedule: {
      plowing: 'Before planting',
      planting: 'Early spring or late fall',
      watering: 'Regular deep watering',
      harvest: 'Late summer to fall (August-October)'
    },
    care: 'Annual pruning, pest management, thinning fruit'
  },
  {
    name: 'Grapes',
    schedule: {
      plowing: 'Before planting',
      planting: 'Early spring',
      watering: 'Deep watering every 1-2 weeks',
      harvest: 'Late summer to fall (August-October)'
    },
    care: 'Regular pruning, disease monitoring, proper trellising'
  },
  {
    name: 'Strawberries',
    schedule: {
      plowing: 'Spring or fall',
      planting: 'Early spring or fall',
      watering: '1-1.5 inches per week',
      harvest: 'Spring to early summer (May-July)'
    },
    care: 'Mulching, runner management, winter protection'
  },
  {
    name: 'Lettuce',
    schedule: {
      plowing: 'Early spring or fall',
      planting: 'Spring or fall',
      watering: 'Regular light watering',
      harvest: '30-60 days after planting'
    },
    care: 'Succession planting, shade during hot weather'
  },
  {
    name: 'Carrots',
    schedule: {
      plowing: 'Early spring or fall',
      planting: 'Spring or late summer',
      watering: 'Regular even moisture',
      harvest: '70-80 days after planting'
    },
    care: 'Thin seedlings, keep soil loose and weed-free'
  }
];

const livestock = [
  {
    type: 'Cattle',
    breeding: {
      season: 'Year-round, optimal in spring',
      cycle: '21 days heat cycle, 283 days gestation',
      age: 'First breeding at 15-18 months',
      frequency: 'Annual calving'
    },
    care: [
      'Regular vaccination schedule',
      'Proper nutrition and mineral supplementation',
      'Hoof care and maintenance',
      'Regular health checks',
      'Adequate shelter and ventilation'
    ]
  },
  {
    type: 'Horses',
    breeding: {
      season: 'Spring to early summer',
      cycle: '21 days heat cycle, 340 days gestation',
      age: 'First breeding at 3-4 years',
      frequency: 'Annual foaling'
    },
    care: [
      'Regular deworming and vaccination',
      'Dental care every 6-12 months',
      'Hoof care every 6-8 weeks',
      'Exercise and socialization',
      'Regular grooming'
    ]
  },
  {
    type: 'Sheep',
    breeding: {
      season: 'Fall to early winter',
      cycle: '17 days heat cycle, 147 days gestation',
      age: 'First breeding at 8-10 months',
      frequency: 'Once or twice yearly lambing'
    },
    care: [
      'Regular shearing',
      'Hoof trimming',
      'Parasite control',
      'Vaccination schedule',
      'Protection from predators'
    ]
  },
  {
    type: 'Goats',
    breeding: {
      season: 'Fall to winter',
      cycle: '21 days heat cycle, 150 days gestation',
      age: 'First breeding at 8-10 months',
      frequency: 'Once or twice yearly kidding'
    },
    care: [
      'Regular hoof trimming',
      'Parasite management',
      'Proper fencing',
      'Vaccination schedule',
      'Mineral supplementation'
    ]
  }
];

const vetInfo = {
  routine: [
    'Annual vaccinations',
    'Regular health check-ups',
    'Dental examinations',
    'Parasite control',
    'Nutritional assessments'
  ],
  emergency: [
    'Difficult births',
    'Injuries and accidents',
    'Sudden illness',
    'Digestive problems',
    'Respiratory issues'
  ],
  records: [
    'Vaccination history',
    'Breeding records',
    'Health treatments',
    'Growth and development',
    'Medical procedures'
  ]
};

export default function SeasonalEvents() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Seasonal Events
      </Typography>

      <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 3 }}>
        <Tab icon={<LocalFloristIcon />} label="Crop Schedules" />
        <Tab icon={<PetsIcon />} label="Livestock Breeding" />
        <Tab icon={<LocalHospitalIcon />} label="Veterinary Care" />
      </Tabs>

      {/* Crop Schedules */}
      <TabPanel value={tabValue} index={0}>
        <Grid container spacing={3}>
          {topCrops.map((crop) => (
            <Grid item xs={12} md={6} key={crop.name}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {crop.name}
                  </Typography>
                  <TableContainer component={Paper}>
                    <Table size="small">
                      <TableBody>
                        <TableRow>
                          <TableCell>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <GrassIcon sx={{ mr: 1 }} />
                              Plowing
                            </Box>
                          </TableCell>
                          <TableCell>{crop.schedule.plowing}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <LocalFloristIcon sx={{ mr: 1 }} />
                              Planting
                            </Box>
                          </TableCell>
                          <TableCell>{crop.schedule.planting}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <WaterDropIcon sx={{ mr: 1 }} />
                              Watering
                            </Box>
                          </TableCell>
                          <TableCell>{crop.schedule.watering}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <AgricultureIcon sx={{ mr: 1 }} />
                              Harvest
                            </Box>
                          </TableCell>
                          <TableCell>{crop.schedule.harvest}</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                    {crop.care}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </TabPanel>

      {/* Livestock Breeding */}
      <TabPanel value={tabValue} index={1}>
        <Grid container spacing={3}>
          {livestock.map((animal) => (
            <Grid item xs={12} md={6} key={animal.type}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {animal.type}
                  </Typography>
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography>Breeding Information</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <TableContainer>
                        <Table size="small">
                          <TableBody>
                            <TableRow>
                              <TableCell>Season</TableCell>
                              <TableCell>{animal.breeding.season}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Cycle</TableCell>
                              <TableCell>{animal.breeding.cycle}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>First Breeding Age</TableCell>
                              <TableCell>{animal.breeding.age}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Frequency</TableCell>
                              <TableCell>{animal.breeding.frequency}</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography>Care Requirements</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <List dense>
                        {animal.care.map((item, index) => (
                          <ListItem key={index}>
                            <ListItemIcon>
                              <PetsIcon />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                          </ListItem>
                        ))}
                      </List>
                    </AccordionDetails>
                  </Accordion>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </TabPanel>

      {/* Veterinary Care */}
      <TabPanel value={tabValue} index={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Routine Care
                </Typography>
                <List dense>
                  {vetInfo.routine.map((item, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <LocalHospitalIcon />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Emergency Care
                </Typography>
                <List dense>
                  {vetInfo.emergency.map((item, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <LocalHospitalIcon />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Record Keeping
                </Typography>
                <List dense>
                  {vetInfo.records.map((item, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CalendarMonthIcon />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>
    </Container>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}
