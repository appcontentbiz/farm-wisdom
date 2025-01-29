import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Joyride, { STATUS } from 'react-joyride';
import { useSnackbar } from 'notistack';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
  Box,
  TextField,
  Slider,
  Alert,
  LinearProgress,
  Tooltip,
  IconButton,
  Chip,
  Divider,
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
  Switch,
  FormControlLabel,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Agriculture as AgricultureIcon,
  Help as HelpIcon,
  Timeline as TimelineIcon,
  Warning as WarningIcon,
  MonetizationOn as MonetizationOnIcon,
  LocalShipping as LocalShippingIcon,
  Pets as PetsIcon,
  WaterDrop as WaterDropIcon,
  Thermostat as ThermostatIcon,
  CheckCircle as CheckCircleIcon,
  DirectionsRun as DirectionsRunIcon,
  FitnessCenter as FitnessCenterIcon,
  MonitorHeart as MonitorHeartIcon,
  Restaurant as RestaurantIcon,
  LocalDining as LocalDiningIcon,
  Storefront as StorefrontIcon,
  LocalFlorist as LocalFloristIcon,
  Send as SendIcon,
} from '@mui/icons-material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from 'recharts';

const DEMO_DURATION = 3600000; // 1 hour in milliseconds

const weatherData = [
  { time: '00:00', temperature: 18, humidity: 65 },
  { time: '03:00', temperature: 16, humidity: 70 },
  { time: '06:00', temperature: 15, humidity: 75 },
  { time: '09:00', temperature: 20, humidity: 60 },
  { time: '12:00', temperature: 25, humidity: 50 },
  { time: '15:00', temperature: 27, humidity: 45 },
  { time: '18:00', temperature: 23, humidity: 55 },
  { time: '21:00', temperature: 20, humidity: 60 },
];

const LivestockData = {
  cattle: { count: 50, health: 95, nextVaccination: '2025-02-15', feed: 85 },
  sheep: { count: 120, health: 92, nextVaccination: '2025-02-10', feed: 78 },
  chickens: { count: 500, health: 88, nextVaccination: '2025-02-01', feed: 90 },
};

const ResourceData = {
  feed: { current: 2500, unit: 'kg', reorderPoint: 1000, cost: 0.5 },
  water: { current: 5000, unit: 'L', reorderPoint: 2000, cost: 0.1 },
  medicine: { current: 100, unit: 'units', reorderPoint: 30, cost: 25 },
};

const SoilData = [
  { id: 'pH', value: 6.8, ideal: '6.0-7.0' },
  { id: 'Nitrogen', value: 45, ideal: '40-60' },
  { id: 'Phosphorus', value: 35, ideal: '30-50' },
  { id: 'Potassium', value: 55, ideal: '50-70' },
  { id: 'Organic Matter', value: 3.5, ideal: '3.0-5.0' },
];

const demoFeatures = [
  {
    title: 'Livestock Management',
    description: 'Track and monitor your livestock health and resources',
    status: 'Healthy',
    metrics: {
      health: 95,
      feed: 80,
      water: 85
    }
  },
  {
    title: 'Resource Planning',
    description: 'Monitor essential farm resources and inventory',
    status: 'Good',
    metrics: {
      feed: 75,
      water: 90,
      medicine: 85
    }
  },
  {
    title: 'Soil Analysis',
    description: 'Track soil health and nutrient levels',
    status: 'Optimal',
    metrics: {
      ph: 6.8,
      nitrogen: 80,
      phosphorus: 75
    }
  },
  {
    title: 'Health & Fitness',
    description: 'Monitor farmer health and daily activity',
    status: 'Active',
    metrics: {
      steps: 12500,
      waterIntake: 2.5,
      activeMinutes: 180,
      restPeriods: 3
    }
  }
];

const generateTreatmentHistory = () => {
  const dates = [];
  const today = new Date();
  for (let i = 0; i < 30; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    dates.push({
      date: date.toISOString().split('T')[0],
      value: Math.floor(Math.random() * 4),
    });
  }
  return dates;
};

const localMarkets = {
  markets: [
    {
      name: "Farmer's Market Central",
      schedule: "Weekly Market - Every Saturday 7AM-2PM",
      accepts: ["Fresh Produce", "Organic Crops", "Value-Added Products"],
      payment: "Cash, SNAP/EBT, Credit Cards",
      commission: "15%"
    },
    {
      name: "Community Food Bank",
      schedule: "Food Bank - Mon-Fri 9AM-4PM",
      accepts: ["All Fresh Produce", "Shelf-Stable Items"],
      payment: "Tax Deduction Receipt",
      commission: "0%"
    },
    {
      name: "Local Co-op Market",
      schedule: "Cooperative Store - Mon-Sat 8AM-8PM",
      accepts: ["Organic Produce", "Local Crops", "Specialty Items"],
      payment: "Direct Payment, Store Credit",
      commission: "20%"
    }
  ],
  gleaningPrograms: [
    {
      name: "Harvest Share",
      description: "Connects farmers with volunteers to harvest excess crops",
      benefits: [
        "Tax deduction",
        "Community goodwill",
        "Reduced waste"
      ],
      schedule: "Seasonal (Spring-Fall)",
      contact: "harvest@share.org"
    },
    {
      name: "Food Rescue Network",
      description: "Collects and distributes surplus farm produce",
      benefits: [
        "Free pickup",
        "Tax benefits",
        "Social impact"
      ],
      schedule: "Year-round",
      contact: "rescue@foodnetwork.org"
    }
  ],
  distributors: [
    {
      name: "Local Foods Distribution",
      type: "Wholesale Distributor",
      minimumOrder: "$100",
      paymentTerms: "Net 30",
      products: ["Fresh produce", "Value-added products"],
      contact: "sales@localfoods.com"
    },
    {
      name: "Farm-to-School Program",
      type: "Educational Institution",
      minimumOrder: "Varies by school",
      paymentTerms: "Net 45",
      products: ["Fresh fruits", "Vegetables", "Educational visits"],
      contact: "farm2school@edu.org"
    },
    {
      name: "Restaurant Alliance",
      type: "Restaurant Supplier",
      minimumOrder: "$50",
      paymentTerms: "Weekly payment",
      products: ["Premium produce", "Specialty crops"],
      contact: "orders@restaurantalliance.com"
    }
  ]
};

const weatherData2 = [
  { time: '6:00', temperature: 18, humidity: 65, rainfall: 0 },
  { time: '9:00', temperature: 22, humidity: 60, rainfall: 0 },
  { time: '12:00', temperature: 25, humidity: 55, rainfall: 0.2 },
  { time: '15:00', temperature: 24, humidity: 58, rainfall: 0.5 },
  { time: '18:00', temperature: 21, humidity: 62, rainfall: 0.1 },
];

const marketPrices = [
  { month: 'Jan', corn: 180, wheat: 220, soybeans: 420 },
  { month: 'Feb', corn: 200, wheat: 240, soybeans: 450 },
  { month: 'Mar', corn: 190, wheat: 230, soybeans: 440 },
  { month: 'Apr', corn: 210, wheat: 250, soybeans: 460 },
];

const cropHealth = [
  { name: 'Optimal', value: 65 },
  { name: 'Warning', value: 25 },
  { name: 'Critical', value: 10 },
];

const COLORS = ['#00C49F', '#FFBB28', '#FF8042'];

function Demo() {
  const [startTime] = useState(Date.now());
  const [timeLeft, setTimeLeft] = useState(DEMO_DURATION);
  const [selectedTab, setSelectedTab] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogTitle, setDialogTitle] = useState('');
  const [dialogContent, setDialogContent] = useState(null);
  const [selectedCrop, setSelectedCrop] = useState('corn');
  const [autoIrrigation, setAutoIrrigation] = useState(false);
  const [moistureLevel, setMoistureLevel] = useState(65);
  const [selectedAnimal, setSelectedAnimal] = useState('cattle');
  const [resourceEfficiency, setResourceEfficiency] = useState(78);
  const [priceAlertDialog, setPriceAlertDialog] = useState(false);
  const [logisticsDialog, setLogisticsDialog] = useState(false);
  const [priceAlert, setPriceAlert] = useState({
    commodity: '',
    price: '',
    type: 'above'
  });
  const [logistics, setLogistics] = useState({
    type: 'delivery',
    date: '',
    location: ''
  });
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const cropRecommendations = [
    { crop: 'Wheat', confidence: 95, reason: 'Optimal soil conditions and season' },
    { crop: 'Corn', confidence: 85, reason: 'Good market demand, suitable climate' },
    { crop: 'Soybeans', confidence: 80, reason: 'Crop rotation benefit, soil nitrogen' },
  ];

  const healthMetrics = {
    activity: {
      steps: 12500,
      activeMinutes: 180,
      caloriesBurned: 2450,
      distanceKm: 8.5,
      heartRate: 72,
      restingHeartRate: 65
    },
    nutrition: {
      waterIntake: 2.5,
      calories: 2100,
      protein: 75,
      carbs: 250,
      fats: 65,
      fiber: 28
    },
    rest: {
      sleepHours: 7.5,
      sleepQuality: 85,
      restPeriods: 3,
      stressLevel: 'Low'
    },
    meals: [
      {
        time: 'Breakfast',
        foods: [
          'Organic Oatmeal with Farm Berries',
          'Farm Fresh Eggs',
          'Green Smoothie'
        ],
        calories: 450
      },
      {
        time: 'Lunch',
        foods: [
          'Garden Salad with Grilled Chicken',
          'Homemade Whole Grain Bread',
          'Fresh Apple'
        ],
        calories: 650
      },
      {
        time: 'Dinner',
        foods: [
          'Grilled Farm Fish',
          'Roasted Root Vegetables',
          'Quinoa'
        ],
        calories: 750
      },
      {
        time: 'Snacks',
        foods: [
          'Mixed Nuts',
          'Farm Yogurt with Honey',
          'Fresh Fruit'
        ],
        calories: 250
      }
    ]
  };

  const steps = [
    {
      target: '.crop-planning',
      content: 'Plan your crops using AI-powered recommendations based on soil conditions, weather patterns, and market trends.',
      placement: 'right',
    },
    {
      target: '.weather-monitoring',
      content: 'Monitor real-time weather data and control irrigation systems automatically.',
      placement: 'left',
    },
    {
      target: '.livestock-management',
      content: 'Track livestock health, feeding schedules, and vaccination records.',
      placement: 'right',
    },
    {
      target: '.resource-planning',
      content: 'Optimize resource usage and track inventory levels.',
      placement: 'left',
    },
    {
      target: '.soil-analysis',
      content: 'Monitor soil health and get recommendations for improvement.',
      placement: 'bottom',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newTime = prev - 1000;
        if (newTime <= 0) {
          clearInterval(timer);
          navigate('/');
          enqueueSnackbar('Demo session ended', { variant: 'info' });
          return 0;
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate, enqueueSnackbar]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMoistureLevel(prev => {
        const newLevel = prev + (Math.random() * 2 - 1);
        if (newLevel < 40 && autoIrrigation) {
          enqueueSnackbar('Auto-irrigation activated due to low moisture levels', { 
            variant: 'info',
            action: (
              <Button color="inherit" size="small" onClick={() => setAutoIrrigation(false)}>
                Disable
              </Button>
            )
          });
          return 65;
        }
        return Math.max(0, Math.min(100, newLevel));
      });

      setResourceEfficiency(prev => {
        const newEfficiency = prev + (Math.random() * 2 - 1);
        return Math.max(0, Math.min(100, newEfficiency));
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [autoIrrigation, enqueueSnackbar]);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleOpenDialog = (title, content) => {
    setDialogTitle(title);
    setDialogContent(content);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleCropClick = (crop) => {
    setSelectedCrop(crop);
    handleOpenDialog(
      'Crop Details',
      <Box>
        <Typography variant="h6" gutterBottom>
          {crop.charAt(0).toUpperCase() + crop.slice(1)} Management
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Optimal Conditions:</Typography>
            <List dense>
              <ListItem>
                <ListItemIcon><ThermostatIcon /></ListItemIcon>
                <ListItemText primary="Temperature: 20-25°C" />
              </ListItem>
              <ListItem>
                <ListItemIcon><WaterDropIcon /></ListItemIcon>
                <ListItemText primary="Soil Moisture: 60-70%" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Current Market Price:</Typography>
            <Typography variant="h4" color="primary">
              ${marketPrices[marketPrices.length - 1][crop]}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              per metric ton
            </Typography>
          </Grid>
        </Grid>
      </Box>
    );
  };

  const handleAnimalClick = (animal) => {
    setSelectedAnimal(animal);
    const healthData = {
      cattle: { temp: 38.5, heart: 65, feed: 12.5 },
      sheep: { temp: 39.2, heart: 75, feed: 2.5 },
      chicken: { temp: 41.1, heart: 275, feed: 0.1 },
    };
    
    handleOpenDialog(
      'Livestock Health Monitor',
      <Box>
        <Typography variant="h6" gutterBottom>
          {animal.charAt(0).toUpperCase() + animal.slice(1)} Health Statistics
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Metric</TableCell>
                    <TableCell align="right">Current</TableCell>
                    <TableCell align="right">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Temperature</TableCell>
                    <TableCell align="right">{healthData[animal].temp}°C</TableCell>
                    <TableCell align="right">
                      <CheckCircleIcon color="success" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Heart Rate</TableCell>
                    <TableCell align="right">{healthData[animal].heart} bpm</TableCell>
                    <TableCell align="right">
                      <CheckCircleIcon color="success" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Feed Intake</TableCell>
                    <TableCell align="right">{healthData[animal].feed} kg/day</TableCell>
                    <TableCell align="right">
                      <WarningIcon color="warning" />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Box>
    );
  };

  const handleJoyrideCallback = (data) => {
    const { status } = data;
    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      console.log('Tour ended');
    }
  };

  const handlePriceAlert = () => {
    enqueueSnackbar('Price alert set successfully!', { variant: 'success' });
    setPriceAlertDialog(false);
  };

  const handleLogistics = () => {
    enqueueSnackbar('Logistics request scheduled successfully!', { variant: 'success' });
    setLogisticsDialog(false);
  };

  return (
    <Container maxWidth="lg">
      <Joyride
        steps={steps}
        continuous
        showProgress
        showSkipButton
        callback={handleJoyrideCallback}
        styles={{
          options: {
            primaryColor: '#2196f3',
          },
        }}
      />
      
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box mb={3}>
            <Typography variant="h4" gutterBottom>
              Farm Management Demo
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Experience the future of farming with our interactive demo
            </Typography>
            <LinearProgress 
              variant="determinate" 
              value={((DEMO_DURATION - timeLeft) / DEMO_DURATION) * 100} 
              sx={{ mt: 2 }}
            />
            <Typography variant="caption" color="textSecondary">
              Demo time remaining: {Math.ceil(timeLeft / 60000)} minutes
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Tabs 
            value={selectedTab} 
            onChange={handleTabChange} 
            variant="scrollable" 
            scrollButtons="auto" 
            sx={{ mb: 3, borderBottom: 1, borderColor: 'divider' }}
          >
            <Tab label="Overview" />
            <Tab label="Crop Management" />
            <Tab label="Weather & Irrigation" />
            <Tab label="Livestock" />
            <Tab label="Resources" />
            <Tab label="Wellness & Health" />
            <Tab label="Farm-to-Table" />
          </Tabs>
        </Grid>

        {selectedTab === 0 && (
          <>
            {/* Weather and Irrigation Control */}
            <Grid item xs={12} md={6}>
              <Card>
                <CardHeader
                  title="Weather & Irrigation"
                  action={
                    <Tooltip title="Monitor and control irrigation based on real-time weather data">
                      <IconButton>
                        <HelpIcon />
                      </IconButton>
                    </Tooltip>
                  }
                />
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <LineChart width={500} height={200} data={weatherData2}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" />
                        <YAxis yAxisId="left" />
                        <YAxis yAxisId="right" orientation="right" />
                        <RechartsTooltip />
                        <Legend />
                        <Line yAxisId="left" type="monotone" dataKey="temperature" stroke="#8884d8" />
                        <Line yAxisId="right" type="monotone" dataKey="humidity" stroke="#82ca9d" />
                      </LineChart>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={autoIrrigation}
                            onChange={(e) => setAutoIrrigation(e.target.checked)}
                            color="primary"
                          />
                        }
                        label="Auto-Irrigation"
                      />
                      <Box mt={2}>
                        <Typography gutterBottom>
                          Soil Moisture Level: {moistureLevel.toFixed(1)}%
                        </Typography>
                        <LinearProgress
                          variant="determinate"
                          value={moistureLevel}
                          color={moistureLevel < 40 ? "warning" : "primary"}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            {/* Crop Management */}
            <Grid item xs={12} md={6}>
              <Card>
                <CardHeader
                  title="Crop Management"
                  action={
                    <Tooltip title="Monitor crop health and manage planting schedules">
                      <IconButton>
                        <HelpIcon />
                      </IconButton>
                    </Tooltip>
                  }
                />
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <PieChart width={200} height={200}>
                        <Pie
                          data={cropHealth}
                          cx={100}
                          cy={100}
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {cropHealth.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <RechartsTooltip />
                      </PieChart>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel>Select Crop</InputLabel>
                        <Select
                          value={selectedCrop}
                          onChange={(e) => handleCropClick(e.target.value)}
                        >
                          <MenuItem value="corn">Corn</MenuItem>
                          <MenuItem value="wheat">Wheat</MenuItem>
                          <MenuItem value="soybeans">Soybeans</MenuItem>
                        </Select>
                      </FormControl>
                      <Box mt={2}>
                        <Typography variant="subtitle2" gutterBottom>
                          Recommended Actions:
                        </Typography>
                        <List dense>
                          <ListItem button onClick={() => handleOpenDialog('Fertilization Schedule', 'View and adjust fertilization schedules')}>
                            <ListItemIcon><TimelineIcon /></ListItemIcon>
                            <ListItemText primary="Check Fertilization Schedule" />
                          </ListItem>
                          <ListItem button onClick={() => handleOpenDialog('Pest Control', 'Monitor and manage pest control measures')}>
                            <ListItemIcon><WarningIcon /></ListItemIcon>
                            <ListItemText primary="Pest Control Status" />
                          </ListItem>
                        </List>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            {/* Market Analysis */}
            <Grid item xs={12}>
              <Card>
                <CardHeader
                  title="Market Analysis"
                  action={
                    <Tooltip title="Track market prices and trends">
                      <IconButton>
                        <HelpIcon />
                      </IconButton>
                    </Tooltip>
                  }
                />
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <BarChart width={1000} height={300} data={marketPrices}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <RechartsTooltip />
                        <Legend />
                        <Bar dataKey="corn" fill="#8884d8" />
                        <Bar dataKey="wheat" fill="#82ca9d" />
                        <Bar dataKey="soybeans" fill="#ffc658" />
                      </BarChart>
                    </Grid>
                    <Grid item xs={12}>
                      <Box display="flex" justifyContent="space-between">
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => setPriceAlertDialog(true)}
                          sx={{ mt: 2 }}
                        >
                          Set Price Alerts
                        </Button>

                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => setLogisticsDialog(true)}
                          sx={{ mt: 2 }}
                        >
                          Set Logistics
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </>
        )}

        {selectedTab === 1 && (
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Detailed Crop Management" />
              <CardContent>
                <Typography>Detailed crop management content will be shown here</Typography>
              </CardContent>
            </Card>
          </Grid>
        )}

        {selectedTab === 2 && (
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Weather & Irrigation Details" />
              <CardContent>
                <Typography>Detailed weather and irrigation content will be shown here</Typography>
              </CardContent>
            </Card>
          </Grid>
        )}

        {selectedTab === 3 && (
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Livestock Management" />
              <CardContent>
                <Typography>Detailed livestock management content will be shown here</Typography>
              </CardContent>
            </Card>
          </Grid>
        )}

        {selectedTab === 4 && (
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Resource Management" />
              <CardContent>
                <Typography>Detailed resource management content will be shown here</Typography>
              </CardContent>
            </Card>
          </Grid>
        )}

        {selectedTab === 5 && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardHeader
                  title="Farmer Wellness Tracker"
                  action={
                    <Tooltip title="Monitor your health and wellness metrics">
                      <IconButton>
                        <HelpIcon />
                      </IconButton>
                    </Tooltip>
                  }
                />
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="subtitle1" gutterBottom>
                        Daily Activity
                      </Typography>
                      <List>
                        <ListItem>
                          <ListItemIcon><DirectionsRunIcon /></ListItemIcon>
                          <ListItemText 
                            primary="Steps" 
                            secondary={`${healthMetrics.activity.steps} steps`}
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon><FitnessCenterIcon /></ListItemIcon>
                          <ListItemText 
                            primary="Active Minutes" 
                            secondary={`${healthMetrics.activity.activeMinutes} minutes`}
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon><MonitorHeartIcon /></ListItemIcon>
                          <ListItemText 
                            primary="Heart Rate" 
                            secondary={`${healthMetrics.activity.heartRate} bpm`}
                          />
                        </ListItem>
                      </List>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card>
                <CardHeader
                  title="Nutrition Tracking"
                  action={
                    <Tooltip title="Track your daily nutrition">
                      <IconButton>
                        <HelpIcon />
                      </IconButton>
                    </Tooltip>
                  }
                />
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="subtitle1" gutterBottom>
                        Daily Intake
                      </Typography>
                      <List>
                        <ListItem>
                          <ListItemIcon><WaterDropIcon /></ListItemIcon>
                          <ListItemText 
                            primary="Water Intake" 
                            secondary={`${healthMetrics.nutrition.waterIntake}L`}
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon><RestaurantIcon /></ListItemIcon>
                          <ListItemText 
                            primary="Calories" 
                            secondary={`${healthMetrics.nutrition.calories} kcal`}
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon><LocalDiningIcon /></ListItemIcon>
                          <ListItemText 
                            primary="Protein" 
                            secondary={`${healthMetrics.nutrition.protein}g`}
                          />
                        </ListItem>
                      </List>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}

        {selectedTab === 6 && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card>
                <CardHeader
                  title="Local Markets"
                  action={
                    <Tooltip title="View local market opportunities">
                      <IconButton>
                        <HelpIcon />
                      </IconButton>
                    </Tooltip>
                  }
                />
                <CardContent>
                  <List>
                    {localMarkets.markets.map((market, index) => (
                      <ListItem key={index} button onClick={() => handleOpenDialog('Market Details', 
                        <Box>
                          <Typography variant="h6">{market.name}</Typography>
                          <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                            {market.schedule}
                          </Typography>
                          <Box mt={2}>
                            <Typography variant="subtitle1">Accepts:</Typography>
                            <Typography variant="body2">{market.accepts.join(", ")}</Typography>
                          </Box>
                          <Box mt={2}>
                            <Typography variant="subtitle1">Payment:</Typography>
                            <Typography variant="body2">{market.payment}</Typography>
                          </Box>
                          <Box mt={2}>
                            <Typography variant="subtitle1">Commission:</Typography>
                            <Typography variant="body2">{market.commission}</Typography>
                          </Box>
                        </Box>
                      )}>
                        <ListItemIcon><StorefrontIcon /></ListItemIcon>
                        <ListItemText 
                          primary={market.name}
                          secondary={market.schedule}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card>
                <CardHeader
                  title="Gleaning Programs"
                  action={
                    <Tooltip title="View gleaning opportunities">
                      <IconButton>
                        <HelpIcon />
                      </IconButton>
                    </Tooltip>
                  }
                />
                <CardContent>
                  <List>
                    {localMarkets.gleaningPrograms.map((program, index) => (
                      <ListItem key={index} button onClick={() => handleOpenDialog('Program Details',
                        <Box>
                          <Typography variant="h6">{program.name}</Typography>
                          <Typography variant="body2" gutterBottom>
                            {program.description}
                          </Typography>
                          <Box mt={2}>
                            <Typography variant="subtitle1">Benefits:</Typography>
                            <List dense>
                              {program.benefits.map((benefit, i) => (
                                <ListItem key={i}>
                                  <ListItemIcon><CheckCircleIcon /></ListItemIcon>
                                  <ListItemText primary={benefit} />
                                </ListItem>
                              ))}
                            </List>
                          </Box>
                          <Box mt={2}>
                            <Typography variant="subtitle1">Schedule:</Typography>
                            <Typography variant="body2">{program.schedule}</Typography>
                          </Box>
                          <Box mt={2}>
                            <Typography variant="subtitle1">Contact:</Typography>
                            <Typography variant="body2">{program.contact}</Typography>
                          </Box>
                        </Box>
                      )}>
                        <ListItemIcon><LocalFloristIcon /></ListItemIcon>
                        <ListItemText 
                          primary={program.name}
                          secondary={program.description}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card>
                <CardHeader
                  title="Distribution Partners"
                  action={
                    <Tooltip title="View distribution partners">
                      <IconButton>
                        <HelpIcon />
                      </IconButton>
                    </Tooltip>
                  }
                />
                <CardContent>
                  <List>
                    {localMarkets.distributors.map((distributor, index) => (
                      <ListItem key={index} button onClick={() => handleOpenDialog('Distributor Details',
                        <Box>
                          <Typography variant="h6">{distributor.name}</Typography>
                          <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                            {distributor.type}
                          </Typography>
                          <Box mt={2}>
                            <Typography variant="subtitle1">Minimum Order:</Typography>
                            <Typography variant="body2">{distributor.minimumOrder}</Typography>
                          </Box>
                          <Box mt={2}>
                            <Typography variant="subtitle1">Payment Terms:</Typography>
                            <Typography variant="body2">{distributor.paymentTerms}</Typography>
                          </Box>
                          <Box mt={2}>
                            <Typography variant="subtitle1">Products:</Typography>
                            <Typography variant="body2">{distributor.products.join(", ")}</Typography>
                          </Box>
                          <Box mt={2}>
                            <Typography variant="subtitle1">Contact:</Typography>
                            <Typography variant="body2">{distributor.contact}</Typography>
                          </Box>
                        </Box>
                      )}>
                        <ListItemIcon><LocalShippingIcon /></ListItemIcon>
                        <ListItemText 
                          primary={distributor.name}
                          secondary={distributor.type}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}
      </Grid>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          {dialogContent}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Price Alert Dialog */}
      <Dialog open={priceAlertDialog} onClose={() => setPriceAlertDialog(false)}>
        <DialogTitle>Set Price Alert</DialogTitle>
        <DialogContent>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>Commodity</InputLabel>
            <Select
              value={priceAlert.commodity}
              label="Commodity"
              onChange={(e) => setPriceAlert({ ...priceAlert, commodity: e.target.value })}
            >
              <MenuItem value="corn">Corn</MenuItem>
              <MenuItem value="wheat">Wheat</MenuItem>
              <MenuItem value="soybeans">Soybeans</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>Alert Type</InputLabel>
            <Select
              value={priceAlert.type}
              label="Alert Type"
              onChange={(e) => setPriceAlert({ ...priceAlert, type: e.target.value })}
            >
              <MenuItem value="above">Price Above</MenuItem>
              <MenuItem value="below">Price Below</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label="Price"
            type="number"
            value={priceAlert.price}
            onChange={(e) => setPriceAlert({ ...priceAlert, price: e.target.value })}
            sx={{ mt: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setPriceAlertDialog(false)}>Cancel</Button>
          <Button onClick={handlePriceAlert} variant="contained">Set Alert</Button>
        </DialogActions>
      </Dialog>

      {/* Logistics Dialog */}
      <Dialog open={logisticsDialog} onClose={() => setLogisticsDialog(false)}>
        <DialogTitle>Schedule Logistics</DialogTitle>
        <DialogContent>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>Type</InputLabel>
            <Select
              value={logistics.type}
              label="Type"
              onChange={(e) => setLogistics({ ...logistics, type: e.target.value })}
            >
              <MenuItem value="delivery">Delivery</MenuItem>
              <MenuItem value="pickup">Pickup</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label="Date"
            type="date"
            value={logistics.date}
            onChange={(e) => setLogistics({ ...logistics, date: e.target.value })}
            InputLabelProps={{ shrink: true }}
            sx={{ mt: 2 }}
          />
          <TextField
            fullWidth
            label="Location"
            value={logistics.location}
            onChange={(e) => setLogistics({ ...logistics, location: e.target.value })}
            sx={{ mt: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setLogisticsDialog(false)}>Cancel</Button>
          <Button onClick={handleLogistics} variant="contained">Schedule</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default Demo;
