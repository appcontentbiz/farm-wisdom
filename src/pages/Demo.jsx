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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Agriculture from '@mui/icons-material/Agriculture';
import WbSunny from '@mui/icons-material/WbSunny';
import Timeline from '@mui/icons-material/Timeline';
import MonetizationOn from '@mui/icons-material/MonetizationOn';
import Build from '@mui/icons-material/Build';
import Help from '@mui/icons-material/Help';
import LocalFlorist from '@mui/icons-material/LocalFlorist';
import BugReport from '@mui/icons-material/BugReport';
import Nature from '@mui/icons-material/Nature';
import TrendingUp from '@mui/icons-material/TrendingUp';
import Pets from '@mui/icons-material/Pets';
import Inventory from '@mui/icons-material/Inventory';
import Landscape from '@mui/icons-material/Landscape';
import FitnessCenter from '@mui/icons-material/FitnessCenter';
import DirectionsRun from '@mui/icons-material/DirectionsRun';
import Restaurant from '@mui/icons-material/Restaurant';
import MonitorHeart from '@mui/icons-material/MonitorHeart';
import LocalDining from '@mui/icons-material/LocalDining';
import FiberManualRecord from '@mui/icons-material/FiberManualRecord';
import Store from '@mui/icons-material/Store';
import LocalShipping from '@mui/icons-material/LocalShipping';
import Storefront from '@mui/icons-material/Storefront';
import AttachMoney from '@mui/icons-material/AttachMoney';
import WaterDrop from '@mui/icons-material/WaterDrop';
import Thermostat from '@mui/icons-material/Thermostat';
import AcUnit from '@mui/icons-material/AcUnit';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import TimelineIcon from '@mui/icons-material/Timeline';
import PetsIcon from '@mui/icons-material/Pets';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HelpIcon from '@mui/icons-material/Help';

const DEMO_DURATION = 3600000; // 1 hour in milliseconds

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
      type: "Weekly Market",
      schedule: "Every Saturday 7AM-2PM",
      accepts: ["Fresh Produce", "Organic Crops", "Value-Added Products"],
      paymentTypes: ["Cash", "SNAP/EBT", "Credit Cards"],
      commission: "15%",
      requirements: "Local produce only, organic preferred"
    },
    {
      name: "Community Food Bank",
      type: "Food Bank",
      schedule: "Mon-Fri 9AM-4PM",
      accepts: ["All Fresh Produce", "Shelf-Stable Items"],
      paymentTypes: ["Tax Deduction Receipt"],
      commission: "0%",
      requirements: "Clean, edible produce"
    },
    {
      name: "Local Co-op Market",
      type: "Cooperative Store",
      schedule: "Daily 8AM-8PM",
      accepts: ["Organic Produce", "Local Crops", "Specialty Items"],
      paymentTypes: ["Direct Payment", "Store Credit"],
      commission: "20%",
      requirements: "Member-owned, quality standards apply"
    }
  ],
  gleaningOpportunities: [
    {
      organization: "Harvest Share",
      description: "Connects farmers with volunteers to harvest excess crops",
      benefits: ["Tax deduction", "Community goodwill", "Reduced waste"],
      schedule: "Seasonal (Spring-Fall)",
      contact: "harvest@share.org"
    },
    {
      organization: "Food Rescue Network",
      description: "Collects and distributes surplus farm produce",
      benefits: ["Free pickup", "Tax benefits", "Social impact"],
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
      requirements: "GAP certification preferred",
      products: ["Fresh produce", "Value-added products"],
      contact: "sales@localfoods.com"
    },
    {
      name: "Farm-to-School Program",
      type: "Educational Institution",
      minimumOrder: "Varies by school",
      paymentTerms: "Net 45",
      requirements: "Food safety certification required",
      products: ["Fresh fruits", "Vegetables", "Educational visits"],
      contact: "farm2school@edu.org"
    },
    {
      name: "Restaurant Alliance",
      type: "Restaurant Supplier",
      minimumOrder: "$50",
      paymentTerms: "Weekly payment",
      requirements: "Quality grading required",
      products: ["Premium produce", "Specialty crops"],
      contact: "orders@restaurantalliance.com"
    }
  ]
};

const weatherData = [
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
  const [dialogContent, setDialogContent] = useState({ title: '', content: null });
  const [autoIrrigation, setAutoIrrigation] = useState(false);
  const [moistureLevel, setMoistureLevel] = useState(65);
  const [notifications, setNotifications] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState('cattle');
  const [resourceEfficiency, setResourceEfficiency] = useState(78);
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
      disableBeacon: true,
    },
    {
      target: '.weather-monitoring',
      content: 'Get real-time weather updates and forecasts with smart alerts for adverse conditions.',
    },
    {
      target: '.livestock-management',
      content: 'Track livestock health, vaccination schedules, and feeding patterns with automated monitoring.',
    },
    {
      target: '.resource-planning',
      content: 'Optimize resource usage with predictive analytics and automated inventory management.',
    },
    {
      target: '.soil-analysis',
      content: 'Monitor soil health with IoT sensors and get AI-powered recommendations for improvement.',
    },
    {
      target: '.health-fitness',
      content: 'Track your health metrics and get personalized recommendations for farm work-life balance.',
    },
    {
      target: '.market-analysis',
      content: 'Access real-time market prices and trends to optimize your selling decisions.',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, DEMO_DURATION - elapsed);
      setTimeLeft(remaining);

      if (remaining === 0) {
        enqueueSnackbar('Demo session expired. Please upgrade to continue.', {
          variant: 'info',
          action: (
            <Button color="inherit" size="small" onClick={() => navigate('/pricing')}>
              Upgrade
            </Button>
          ),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [startTime, navigate, enqueueSnackbar]);

  useEffect(() => {
    // Simulate real-time data updates
    const interval = setInterval(() => {
      // Update moisture level
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

      // Update resource efficiency
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
    setDialogContent({ title, content });
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleAutoIrrigationChange = (event) => {
    setAutoIrrigation(event.target.checked);
    enqueueSnackbar(`Auto-irrigation ${event.target.checked ? 'enabled' : 'disabled'}`, {
      variant: 'success',
    });
  };

  const handleCropChange = (event) => {
    setSelectedCrop(event.target.value);
    enqueueSnackbar(`Switched to ${event.target.value} analysis`, {
      variant: 'info',
    });
  };

  const handleJoyrideCallback = (data) => {
    const { status } = data;
    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      enqueueSnackbar('Tutorial completed! Explore the features on your own.', { variant: 'success' });
    }
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

  const progress = ((DEMO_DURATION - timeLeft) / DEMO_DURATION) * 100;

  const renderMarketAnalysis = () => (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Market Price Trends
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={marketPrices}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <RechartsTooltip />
          <Legend />
          <Line type="monotone" dataKey="wheat" stroke="#8884d8" name="Wheat ($/ton)" />
          <Line type="monotone" dataKey="corn" stroke="#82ca9d" name="Corn ($/ton)" />
          <Line type="monotone" dataKey="soybeans" stroke="#ffc658" name="Soybeans ($/ton)" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );

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
          </Box>
        </Grid>

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
                  <LineChart width={500} height={200} data={weatherData}>
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
                      variant="outlined"
                      startIcon={<MonetizationOnIcon />}
                      onClick={() => handleOpenDialog('Price Alerts', 'Set up price alerts for your crops')}
                    >
                      Set Price Alerts
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<LocalShippingIcon />}
                      onClick={() => handleOpenDialog('Logistics', 'Plan your harvest logistics')}
                    >
                      Plan Logistics
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Livestock Management */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader
              title="Livestock Management"
              action={
                <Tooltip title="Monitor livestock health and manage feeding schedules">
                  <IconButton>
                    <HelpIcon />
                  </IconButton>
                </Tooltip>
              }
            />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>Select Animal Type</InputLabel>
                    <Select
                      value={selectedAnimal}
                      onChange={(e) => handleAnimalClick(e.target.value)}
                    >
                      <MenuItem value="cattle">Cattle</MenuItem>
                      <MenuItem value="sheep">Sheep</MenuItem>
                      <MenuItem value="chicken">Chicken</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <List>
                    <ListItem button onClick={() => handleOpenDialog('Feeding Schedule', 'View and adjust feeding schedules')}>
                      <ListItemIcon><TimelineIcon /></ListItemIcon>
                      <ListItemText 
                        primary="Feeding Schedule" 
                        secondary="Next feeding in 2 hours"
                      />
                    </ListItem>
                    <ListItem button onClick={() => handleOpenDialog('Health Records', 'View health records and vaccination history')}>
                      <ListItemIcon><PetsIcon /></ListItemIcon>
                      <ListItemText 
                        primary="Health Records" 
                        secondary="Last checkup: 3 days ago"
                      />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Resource Optimization */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader
              title="Resource Optimization"
              action={
                <Tooltip title="Track and optimize resource usage">
                  <IconButton>
                    <HelpIcon />
                  </IconButton>
                </Tooltip>
              }
            />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
                  <Box position="relative" display="inline-flex">
                    <CircularProgress
                      variant="determinate"
                      value={resourceEfficiency}
                      size={120}
                      thickness={4}
                    />
                    <Box
                      position="absolute"
                      top={0}
                      left={0}
                      bottom={0}
                      right={0}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Typography variant="h6" component="div" color="textSecondary">
                        {resourceEfficiency.toFixed(1)}%
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <List>
                    <ListItem button onClick={() => handleOpenDialog('Water Usage', 'Monitor and optimize water consumption')}>
                      <ListItemIcon><WaterDropIcon /></ListItemIcon>
                      <ListItemText 
                        primary="Water Usage" 
                        secondary="15% below average"
                      />
                    </ListItem>
                    <ListItem button onClick={() => handleOpenDialog('Energy Consumption', 'Track and reduce energy consumption')}>
                      <ListItemIcon><TimelineIcon /></ListItemIcon>
                      <ListItemText 
                        primary="Energy Consumption" 
                        secondary="Peak hours: 2PM - 5PM"
                      />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>{dialogContent.title}</DialogTitle>
        <DialogContent>
          {dialogContent.content}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default Demo;
