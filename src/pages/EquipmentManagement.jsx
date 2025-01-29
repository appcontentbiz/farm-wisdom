import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  Box,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Alert,
  Chip,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Switch,
  FormControlLabel,
  Tooltip,
} from '@mui/material';
import {
  LocalShipping as EquipmentIcon,
  Warning as AlertIcon,
  Build as MaintenanceIcon,
  Share as ShareIcon,
  Speed as UsageIcon,
  Timeline as HistoryIcon,
  Add as AddIcon,
  Edit as EditIcon,
} from '@mui/icons-material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as ChartTooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';

// Mock data for equipment
const mockEquipment = [
  {
    id: 1,
    name: 'John Deere Tractor',
    model: '8R 410',
    status: 'Active',
    health: 85,
    hoursUsed: 2500,
    nextMaintenance: '2025-02-15',
    location: 'Field A',
    fuelLevel: 75,
    maintenanceHistory: [
      { date: '2024-12-15', type: 'Oil Change', cost: 250 },
      { date: '2024-11-01', type: 'Filter Replacement', cost: 150 },
    ],
    usageData: Array.from({ length: 30 }, (_, i) => ({
      date: new Date(Date.now() - (30 - i) * 24 * 60 * 60 * 1000).toLocaleDateString(),
      hours: Math.floor(Math.random() * 8 + 4),
    })),
  },
  {
    id: 2,
    name: 'Irrigation System',
    model: 'Valley 8000',
    status: 'Maintenance Required',
    health: 65,
    hoursUsed: 3200,
    nextMaintenance: '2025-01-30',
    location: 'Field B',
    waterPressure: 85,
    maintenanceHistory: [
      { date: '2024-12-01', type: 'Nozzle Cleaning', cost: 100 },
      { date: '2024-10-15', type: 'Pump Service', cost: 350 },
    ],
    usageData: Array.from({ length: 30 }, (_, i) => ({
      date: new Date(Date.now() - (30 - i) * 24 * 60 * 60 * 1000).toLocaleDateString(),
      hours: Math.floor(Math.random() * 12 + 6),
    })),
  },
];

const mockAlerts = [
  {
    id: 1,
    equipment: 'John Deere Tractor',
    type: 'Maintenance Due',
    message: 'Oil change required in 50 operating hours',
    severity: 'warning',
  },
  {
    id: 2,
    equipment: 'Irrigation System',
    type: 'Performance Alert',
    message: 'Water pressure below optimal level',
    severity: 'error',
  },
];

const mockSharing = [
  {
    id: 1,
    equipment: 'Combine Harvester',
    owner: 'Smith Farm',
    availability: 'Available next week',
    rate: '$200/day',
    distance: '5 miles',
  },
  {
    id: 2,
    equipment: 'Sprayer',
    owner: 'Green Acres',
    availability: 'Available now',
    rate: '$150/day',
    distance: '8 miles',
  },
];

export default function EquipmentManagement() {
  const [equipment, setEquipment] = useState(mockEquipment);
  const [alerts, setAlerts] = useState(mockAlerts);
  const [sharing, setSharing] = useState(mockSharing);
  const [selectedEquipment, setSelectedEquipment] = useState(mockEquipment[0]);
  const [openDialog, setOpenDialog] = useState(false);
  const [sharingEnabled, setSharingEnabled] = useState(false);
  const [showOptimization, setShowOptimization] = useState(false);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setEquipment(prevEquipment =>
        prevEquipment.map(eq => ({
          ...eq,
          health: Math.max(0, Math.min(100, eq.health + (Math.random() - 0.5) * 2)),
          hoursUsed: eq.hoursUsed + (Math.random() * 0.1),
          fuelLevel: eq.fuelLevel ? Math.max(0, Math.min(100, eq.fuelLevel + (Math.random() - 0.6))) : undefined,
          waterPressure: eq.waterPressure ? Math.max(0, Math.min(100, eq.waterPressure + (Math.random() - 0.5) * 2)) : undefined,
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getHealthColor = (health) => {
    if (health >= 80) return 'success';
    if (health >= 60) return 'warning';
    return 'error';
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'success';
      case 'maintenance required':
        return 'warning';
      case 'out of service':
        return 'error';
      default:
        return 'default';
    }
  };

  const generateOptimizationTips = (equipment) => {
    const tips = [];
    if (equipment.health < 80) {
      tips.push('Schedule preventive maintenance to improve equipment health');
    }
    if (equipment.fuelLevel && equipment.fuelLevel < 30) {
      tips.push('Refuel soon to avoid operational delays');
    }
    if (equipment.waterPressure && equipment.waterPressure < 70) {
      tips.push('Check and adjust water pressure for optimal performance');
    }
    return tips;
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Header */}
        <Grid item xs={12}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h4" component="h1" gutterBottom>
              Farm Equipment Management
            </Typography>
            <Box>
              <FormControlLabel
                control={
                  <Switch
                    checked={sharingEnabled}
                    onChange={(e) => setSharingEnabled(e.target.checked)}
                  />
                }
                label="Equipment Sharing"
              />
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={() => setOpenDialog(true)}
                sx={{ ml: 2 }}
              >
                Add Equipment
              </Button>
            </Box>
          </Box>
        </Grid>

        {/* Alerts */}
        <Grid item xs={12}>
          {alerts.map((alert, index) => (
            <Alert
              key={index}
              severity={alert.severity}
              sx={{ mb: 2 }}
              action={
                <IconButton size="small">
                  <AlertIcon />
                </IconButton>
              }
            >
              <strong>{alert.equipment} - {alert.type}:</strong> {alert.message}
            </Alert>
          ))}
        </Grid>

        {/* Equipment Overview */}
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Equipment Status
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Equipment</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Health</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>Next Maintenance</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {equipment.map((eq) => (
                    <TableRow
                      key={eq.id}
                      hover
                      onClick={() => setSelectedEquipment(eq)}
                      sx={{ cursor: 'pointer' }}
                    >
                      <TableCell>
                        <Box display="flex" alignItems="center">
                          <EquipmentIcon sx={{ mr: 1 }} />
                          <div>
                            <Typography variant="body1">{eq.name}</Typography>
                            <Typography variant="body2" color="text.secondary">
                              {eq.model}
                            </Typography>
                          </div>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={eq.status}
                          color={getStatusColor(eq.status)}
                          size="small"
                        />
                      </TableCell>
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <LinearProgress
                            variant="determinate"
                            value={eq.health}
                            color={getHealthColor(eq.health)}
                            sx={{ flexGrow: 1, mr: 1 }}
                          />
                          <Typography variant="body2">
                            {Math.round(eq.health)}%
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>{eq.location}</TableCell>
                      <TableCell>{eq.nextMaintenance}</TableCell>
                      <TableCell>
                        <Tooltip title="View Details">
                          <IconButton onClick={() => setSelectedEquipment(eq)}>
                            <HistoryIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>

        {/* Usage Analytics */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Usage Analytics - {selectedEquipment.name}
            </Typography>
            <Box sx={{ height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={selectedEquipment.usageData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <ChartTooltip />
                  <Area
                    type="monotone"
                    dataKey="hours"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.3}
                    name="Hours Used"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>

        {/* Equipment Details */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
              <Typography variant="h6">
                Equipment Details - {selectedEquipment.name}
              </Typography>
              <Button
                variant="outlined"
                startIcon={<UsageIcon />}
                onClick={() => setShowOptimization(!showOptimization)}
              >
                Optimization Tips
              </Button>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Maintenance History
                    </Typography>
                    {selectedEquipment.maintenanceHistory.map((record, index) => (
                      <Box key={index} sx={{ mb: 2 }}>
                        <Typography variant="body1">
                          {record.type} - {record.date}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Cost: ${record.cost}
                        </Typography>
                      </Box>
                    ))}
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Performance Metrics
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        Total Hours Used
                      </Typography>
                      <Typography variant="h5">
                        {Math.round(selectedEquipment.hoursUsed)} hrs
                      </Typography>
                    </Box>
                    {selectedEquipment.fuelLevel && (
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          Fuel Level
                        </Typography>
                        <LinearProgress
                          variant="determinate"
                          value={selectedEquipment.fuelLevel}
                          sx={{ height: 10, borderRadius: 5 }}
                        />
                        <Typography variant="body2" sx={{ mt: 1 }}>
                          {Math.round(selectedEquipment.fuelLevel)}%
                        </Typography>
                      </Box>
                    )}
                    {selectedEquipment.waterPressure && (
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          Water Pressure
                        </Typography>
                        <LinearProgress
                          variant="determinate"
                          value={selectedEquipment.waterPressure}
                          sx={{ height: 10, borderRadius: 5 }}
                        />
                        <Typography variant="body2" sx={{ mt: 1 }}>
                          {Math.round(selectedEquipment.waterPressure)}%
                        </Typography>
                      </Box>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Optimization Tips */}
        {showOptimization && (
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Optimization Recommendations
              </Typography>
              {generateOptimizationTips(selectedEquipment).map((tip, index) => (
                <Alert key={index} severity="info" sx={{ mb: 1 }}>
                  {tip}
                </Alert>
              ))}
            </Paper>
          </Grid>
        )}

        {/* Equipment Sharing Marketplace */}
        {sharingEnabled && (
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Equipment Sharing Marketplace
              </Typography>
              <Grid container spacing={2}>
                {sharing.map((item) => (
                  <Grid item xs={12} md={4} key={item.id}>
                    <Card>
                      <CardContent>
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                          <Typography variant="h6">{item.equipment}</Typography>
                          <Chip icon={<ShareIcon />} label={item.distance} />
                        </Box>
                        <Typography color="text.secondary" gutterBottom>
                          Owner: {item.owner}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          {item.availability}
                        </Typography>
                        <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                          <Typography variant="h6" color="primary">
                            {item.rate}
                          </Typography>
                          <Button variant="contained" size="small">
                            Request
                          </Button>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
