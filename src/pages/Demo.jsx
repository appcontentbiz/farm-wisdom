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
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer } from 'recharts';

const DEMO_DURATION = 30 * 60 * 1000; // 30 minutes

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

function Demo() {
  const [startTime] = useState(Date.now());
  const [timeLeft, setTimeLeft] = useState(DEMO_DURATION);
  const [selectedTab, setSelectedTab] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState({ title: '', content: null });
  const [autoIrrigation, setAutoIrrigation] = useState(true);
  const [selectedCrop, setSelectedCrop] = useState('Wheat');
  const [selectedTimeRange, setSelectedTimeRange] = useState('week');
  
  const [cropData] = useState({
    cropType: 'Wheat',
    growthStage: 'Flowering',
    healthScore: 85,
    expectedYield: 4.2,
  });
  const [weatherData] = useState({
    temperature: 23,
    humidity: 65,
    rainfall: 25,
    forecast: [
      { date: '2025-01-20', temp: 22, rain: 20 },
      { date: '2025-01-21', temp: 24, rain: 10 },
      { date: '2025-01-22', temp: 21, rain: 30 },
    ],
  });
  const [pestData] = useState({
    riskLevel: 'Medium',
    activeThreats: ['Aphids', 'Spider Mites'],
    lastInspection: '2025-01-19',
    treatmentHistory: generateTreatmentHistory(),
  });
  const [equipmentData] = useState({
    tractor: { status: 'Operational', nextService: '2025-02-15' },
    harvester: { status: 'Maintenance Required', nextService: '2025-01-25' },
    irrigationSystem: { status: 'Operational', nextService: '2025-03-01' },
  });
  const [livestock, setLivestock] = useState(LivestockData);
  const [resources, setResources] = useState(ResourceData);
  const [soil, setSoil] = useState(SoilData);
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
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const cropRecommendations = [
    { crop: 'Wheat', confidence: 95, reason: 'Optimal soil conditions and season' },
    { crop: 'Corn', confidence: 85, reason: 'Good market demand, suitable climate' },
    { crop: 'Soybeans', confidence: 80, reason: 'Crop rotation benefit, soil nitrogen' },
  ];

  const marketPrices = [
    { date: '2025-01-20', wheat: 220, corn: 150, soybeans: 380 },
    { date: '2025-01-21', wheat: 225, corn: 152, soybeans: 375 },
    { date: '2025-01-22', wheat: 223, corn: 155, soybeans: 378 },
    { date: '2025-01-23', wheat: 228, corn: 153, soybeans: 382 },
    { date: '2025-01-24', wheat: 230, corn: 151, soybeans: 385 },
  ];

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

  const handleJoyrideCallback = (data) => {
    const { status } = data;
    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      enqueueSnackbar('Tutorial completed! Explore the features on your own.', { variant: 'success' });
    }
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
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Farm Management Demo
        </Typography>
        <LinearProgress variant="determinate" value={progress} sx={{ mb: 2 }} />
        <Typography variant="body2" color="text.secondary">
          Demo time remaining: {Math.floor(timeLeft / 60000)} minutes
        </Typography>
      </Box>

      <Tabs value={selectedTab} onChange={handleTabChange} variant="scrollable" scrollButtons="auto" sx={{ mb: 3 }}>
        <Tab label="Farm Overview" />
        <Tab label="Crop Management" />
        <Tab label="Weather & Irrigation" />
        <Tab label="Livestock" />
        <Tab label="Resources" />
        <Tab label="Market Analysis" />
      </Tabs>

      {selectedTab === 0 && (
        <Grid container spacing={3}>
          {/* Quick Stats */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>Quick Stats</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={3}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="subtitle2">Crop Health</Typography>
                    <CircularProgress variant="determinate" value={cropData.healthScore} color="success" />
                    <Typography variant="body2">{cropData.healthScore}%</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="subtitle2">Resource Usage</Typography>
                    <CircularProgress variant="determinate" value={75} color="primary" />
                    <Typography variant="body2">75% Efficient</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="subtitle2">Livestock Health</Typography>
                    <CircularProgress variant="determinate" value={92} color="success" />
                    <Typography variant="body2">92% Healthy</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="subtitle2">Profit Margin</Typography>
                    <CircularProgress variant="determinate" value={85} color="primary" />
                    <Typography variant="body2">85% Target</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          {/* Crop Planning */}
          <Grid item xs={12} md={6} className="crop-planning">
            <Card>
              <CardHeader
                title="Crop Planning"
                avatar={<Agriculture color="primary" />}
                action={
                  <Tooltip title="Plan and monitor your crops">
                    <IconButton>
                      <Help />
                    </IconButton>
                  </Tooltip>
                }
              />
              <CardContent>
                <Box sx={{ mb: 2 }}>
                  <Chip icon={<LocalFlorist />} label={`Growth Stage: ${cropData.growthStage}`} sx={{ mr: 1 }} />
                  <Chip icon={<Nature />} label={`Health: ${cropData.healthScore}%`} color="success" />
                </Box>
                <Typography variant="h6" color="primary">
                  Expected Yield: {cropData.expectedYield} tons/acre
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Weather Monitoring */}
          <Grid item xs={12} md={6} className="weather-monitoring">
            <Card>
              <CardHeader
                title="Weather Monitoring"
                avatar={<WbSunny color="primary" />}
                action={
                  <Tooltip title="Monitor weather conditions">
                    <IconButton>
                      <Help />
                    </IconButton>
                }
              />
              <CardContent>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body1">
                    Temperature: {weatherData.temperature}°C
                  </Typography>
                  <Typography variant="body1">
                    Humidity: {weatherData.humidity}%
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Livestock Management */}
          <Grid item xs={12} md={6} className="livestock-management">
            <Card>
              <CardHeader
                title="Livestock Management"
                avatar={<Pets color="primary" />}
                action={
                  <Tooltip title="Track livestock health and schedules">
                    <IconButton>
                      <Help />
                    </IconButton>
                }
              />
              <CardContent>
                <TableContainer component={Paper}>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>Type</TableCell>
                        <TableCell align="right">Count</TableCell>
                        <TableCell align="right">Health %</TableCell>
                        <TableCell align="right">Feed Level %</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {Object.entries(livestock).map(([type, data]) => (
                        <TableRow key={type}>
                          <TableCell component="th" scope="row">
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                          </TableCell>
                          <TableCell align="right">{data.count}</TableCell>
                          <TableCell align="right">
                            <Chip
                              label={`${data.health}%`}
                              color={data.health > 90 ? 'success' : 'warning'}
                              size="small"
                            />
                          </TableCell>
                          <TableCell align="right">
                            <Chip
                              label={`${data.feed}%`}
                              color={data.feed > 80 ? 'success' : 'warning'}
                              size="small"
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Grid>

          {/* Resource Planning */}
          <Grid item xs={12} md={6} className="resource-planning">
            <Card>
              <CardHeader
                title="Resource Planning"
                avatar={<Inventory color="primary" />}
                action={
                  <Tooltip title="Monitor and manage farm resources">
                    <IconButton>
                      <Help />
                    </IconButton>
                }
              />
              <CardContent>
                <TableContainer component={Paper}>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>Resource</TableCell>
                        <TableCell align="right">Current Stock</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Cost/Unit</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {Object.entries(resources).map(([name, data]) => (
                        <TableRow key={name}>
                          <TableCell component="th" scope="row">
                            {name.charAt(0).toUpperCase() + name.slice(1)}
                          </TableCell>
                          <TableCell align="right">
                            {data.current} {data.unit}
                          </TableCell>
                          <TableCell align="right">
                            <Chip
                              label={data.current > data.reorderPoint ? 'Sufficient' : 'Low'}
                              color={data.current > data.reorderPoint ? 'success' : 'error'}
                              size="small"
                            />
                          </TableCell>
                          <TableCell align="right">${data.cost}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Grid>

          {/* Soil Analysis */}
          <Grid item xs={12} className="soil-analysis">
            <Card>
              <CardHeader
                title="Soil Analysis"
                avatar={<Landscape color="primary" />}
                action={
                  <Tooltip title="Monitor soil health and nutrients">
                    <IconButton>
                      <Help />
                    </IconButton>
                }
              />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TableContainer component={Paper}>
                      <Table size="small">
                        <TableHead>
                          <TableRow>
                            <TableCell>Parameter</TableCell>
                            <TableCell align="right">Current Value</TableCell>
                            <TableCell align="right">Ideal Range</TableCell>
                            <TableCell align="right">Status</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {soil.map((param) => {
                            const [min, max] = param.ideal.split('-').map(Number);
                            const status = param.value >= min && param.value <= max ? 'Optimal' : 'Attention Needed';
                            return (
                              <TableRow key={param.id}>
                                <TableCell component="th" scope="row">
                                  {param.id}
                                </TableCell>
                                <TableCell align="right">{param.value}</TableCell>
                                <TableCell align="right">{param.ideal}</TableCell>
                                <TableCell align="right">
                                  <Chip
                                    label={status}
                                    color={status === 'Optimal' ? 'success' : 'warning'}
                                    size="small"
                                  />
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Local Markets and Gleaning */}
          <Grid item xs={12}>
            <Card>
              <CardHeader
                title="Local Markets & Gleaning Opportunities"
                avatar={<Store color="primary" />}
                action={
                  <Tooltip title="Find places to sell or donate your harvest">
                    <IconButton>
                      <Help />
                    </IconButton>
                }
              />
              <CardContent>
                <Grid container spacing={3}>
                  {/* Farmers Markets */}
                  <Grid item xs={12} md={4}>
                    <Card variant="outlined">
                      <CardHeader
                        title="Local Markets"
                        avatar={<Storefront color="primary" />}
                      />
                      <CardContent>
                        {localMarkets.markets.map((market, index) => (
                          <Box key={index} sx={{ mb: 3 }}>
                            <Typography variant="h6" color="primary">
                              {market.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {market.type} - {market.schedule}
                            </Typography>
                            <Typography variant="body2">
                              <strong>Accepts:</strong> {market.accepts.join(", ")}
                            </Typography>
                            <Typography variant="body2">
                              <strong>Payment:</strong> {market.paymentTypes.join(", ")}
                            </Typography>
                            <Typography variant="body2">
                              <strong>Commission:</strong> {market.commission}
                            </Typography>
                          </Box>
                        ))}
                      </CardContent>
                    </Card>
                  </Grid>

                  {/* Gleaning Opportunities */}
                  <Grid item xs={12} md={4}>
                    <Card variant="outlined">
                      <CardHeader
                        title="Gleaning Programs"
                        avatar={<LocalShipping color="primary" />}
                      />
                      <CardContent>
                        {localMarkets.gleaningOpportunities.map((opportunity, index) => (
                          <Box key={index} sx={{ mb: 3 }}>
                            <Typography variant="h6" color="primary">
                              {opportunity.organization}
                            </Typography>
                            <Typography variant="body2">
                              {opportunity.description}
                            </Typography>
                            <Typography variant="body2">
                              <strong>Benefits:</strong>
                            </Typography>
                            <List dense>
                              {opportunity.benefits.map((benefit, i) => (
                                <ListItem key={i}>
                                  <ListItemIcon>
                                    <FiberManualRecord sx={{ width: 8, height: 8 }} />
                                  </ListItemIcon>
                                  <ListItemText primary={benefit} />
                                </ListItem>
                              ))}
                            </List>
                            <Typography variant="body2">
                              <strong>Schedule:</strong> {opportunity.schedule}
                            </Typography>
                            <Typography variant="body2">
                              <strong>Contact:</strong> {opportunity.contact}
                            </Typography>
                          </Box>
                        ))}
                      </CardContent>
                    </Card>
                  </Grid>

                  {/* Distributors */}
                  <Grid item xs={12} md={4}>
                    <Card variant="outlined">
                      <CardHeader
                        title="Distribution Partners"
                        avatar={<AttachMoney color="primary" />}
                      />
                      <CardContent>
                        {localMarkets.distributors.map((distributor, index) => (
                          <Box key={index} sx={{ mb: 3 }}>
                            <Typography variant="h6" color="primary">
                              {distributor.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {distributor.type}
                            </Typography>
                            <Typography variant="body2">
                              <strong>Minimum Order:</strong> {distributor.minimumOrder}
                            </Typography>
                            <Typography variant="body2">
                              <strong>Payment Terms:</strong> {distributor.paymentTerms}
                            </Typography>
                            <Typography variant="body2">
                              <strong>Products:</strong> {distributor.products.join(", ")}
                            </Typography>
                            <Typography variant="body2">
                              <strong>Contact:</strong> {distributor.contact}
                            </Typography>
                          </Box>
                        ))}
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Health & Fitness */}
          <Grid item xs={12} className="health-fitness">
            <Card>
              <CardHeader
                title="Health & Fitness"
                avatar={<FitnessCenter color="primary" />}
                action={
                  <Tooltip title="Monitor your health and daily activity">
                    <IconButton>
                      <Help />
                    </IconButton>
                }
              />
              <CardContent>
                <Grid container spacing={3}>
                  {/* Activity Metrics */}
                  <Grid item xs={12} md={6}>
                    <Card variant="outlined">
                      <CardHeader
                        title="Activity"
                        avatar={<DirectionsRun color="primary" />}
                      />
                      <CardContent>
                        <Typography variant="body1">
                          Steps: {healthMetrics.activity.steps}
                        </Typography>
                        <Typography variant="body1">
                          Active Minutes: {healthMetrics.activity.activeMinutes}
                        </Typography>
                        <Typography variant="body1">
                          Calories Burned: {healthMetrics.activity.caloriesBurned} kcal
                        </Typography>
                        <Typography variant="body1">
                          Distance: {healthMetrics.activity.distanceKm} km
                        </Typography>
                        <Typography variant="body1">
                          Heart Rate: {healthMetrics.activity.heartRate} bpm
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>

                  {/* Nutrition Metrics */}
                  <Grid item xs={12} md={6}>
                    <Card variant="outlined">
                      <CardHeader
                        title="Nutrition"
                        avatar={<Restaurant color="primary" />}
                      />
                      <CardContent>
                        <Typography variant="body1">
                          Water Intake: {healthMetrics.nutrition.waterIntake}L
                        </Typography>
                        <Typography variant="body1">
                          Calories: {healthMetrics.nutrition.calories} kcal
                        </Typography>
                        <Typography variant="body1">
                          Protein: {healthMetrics.nutrition.protein}g
                        </Typography>
                        <Typography variant="body1">
                          Carbs: {healthMetrics.nutrition.carbs}g
                        </Typography>
                        <Typography variant="body1">
                          Fats: {healthMetrics.nutrition.fats}g
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>

                  {/* Rest & Recovery */}
                  <Grid item xs={12} md={6}>
                    <Card variant="outlined">
                      <CardHeader
                        title="Rest & Recovery"
                        avatar={<MonitorHeart color="primary" />}
                      />
                      <CardContent>
                        <Typography variant="body1">
                          Sleep: {healthMetrics.rest.sleepHours} hours
                        </Typography>
                        <Typography variant="body1">
                          Sleep Quality: {healthMetrics.rest.sleepQuality}%
                        </Typography>
                        <Typography variant="body1">
                          Rest Periods: {healthMetrics.rest.restPeriods}
                        </Typography>
                        <Typography variant="body1">
                          Stress Level: {healthMetrics.rest.stressLevel}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>

                  {/* Meal Tracking */}
                  <Grid item xs={12} md={6}>
                    <Card variant="outlined">
                      <CardHeader
                        title="Farm-to-Table Meals"
                        avatar={<LocalDining color="primary" />}
                      />
                      <CardContent>
                        {healthMetrics.meals.map((meal, index) => (
                          <Box key={index} sx={{ mb: 2 }}>
                            <Typography variant="subtitle1" color="primary">
                              {meal.time} ({meal.calories} kcal)
                            </Typography>
                            <List dense>
                              {meal.foods.map((food, foodIndex) => (
                                <ListItem key={foodIndex}>
                                  <ListItemIcon>
                                    <FiberManualRecord sx={{ width: 8, height: 8 }} />
                                  </ListItemIcon>
                                  <ListItemText primary={food} />
                                </ListItem>
                              ))}
                            </List>
                          </Box>
                        ))}
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}

      {selectedTab === 1 && (
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader title="Crop Selection" />
              <CardContent>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel>Select Crop</InputLabel>
                  <Select value={selectedCrop} onChange={handleCropChange}>
                    <MenuItem value="Wheat">Wheat</MenuItem>
                    <MenuItem value="Corn">Corn</MenuItem>
                    <MenuItem value="Soybeans">Soybeans</MenuItem>
                  </Select>
                </FormControl>
                <Typography variant="h6" gutterBottom>AI Recommendations</Typography>
                <List>
                  {cropRecommendations.map((rec) => (
                    <ListItem key={rec.crop}>
                      <ListItemIcon>
                        <LocalFlorist color={rec.confidence > 90 ? "success" : "primary"} />
                      </ListItemIcon>
                      <ListItemText
                        primary={`${rec.crop} (${rec.confidence}% confidence)`}
                        secondary={rec.reason}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}

      {selectedTab === 2 && (
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader
                title="Weather & Irrigation Control"
                action={
                  <FormControlLabel
                    control={
                      <Switch
                        checked={autoIrrigation}
                        onChange={handleAutoIrrigationChange}
                        color="primary"
                      />
                    }
                    label="Auto Irrigation"
                  />
                }
              />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Thermostat color="primary" sx={{ fontSize: 40 }} />
                      <Typography variant="h6">{weatherData.temperature}°C</Typography>
                      <Typography variant="body2">Temperature</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Box sx={{ textAlign: 'center' }}>
                      <WaterDrop color="primary" sx={{ fontSize: 40 }} />
                      <Typography variant="h6">{weatherData.humidity}%</Typography>
                      <Typography variant="body2">Humidity</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Box sx={{ textAlign: 'center' }}>
                      <AcUnit color="primary" sx={{ fontSize: 40 }} />
                      <Typography variant="h6">{weatherData.rainfall}mm</Typography>
                      <Typography variant="body2">Rainfall</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}

      {selectedTab === 5 && (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {renderMarketAnalysis()}
          </Grid>
        </Grid>
      )}

      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle>{dialogContent.title}</DialogTitle>
        <DialogContent>{dialogContent.content}</DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default Demo;
