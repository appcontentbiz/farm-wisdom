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
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
  Slider,
  LinearProgress,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Tooltip,
  Chip,
} from '@mui/material';
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  WaterDrop as WaterIcon,
  Agriculture as FarmIcon,
  EmojiObjects as InsightIcon,
  LocalShipping as EquipmentIcon,
  Person as WorkerIcon,
} from '@mui/icons-material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as ChartTooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

// Mock data for resources and tasks
const mockResources = [
  {
    id: 1,
    type: 'Equipment',
    name: 'Tractor 1',
    status: 'Available',
    efficiency: 85,
    maintenanceDate: '2025-02-15',
    hoursUsed: 120,
  },
  {
    id: 2,
    type: 'Worker',
    name: 'John Smith',
    status: 'Busy',
    efficiency: 95,
    specialization: 'Harvesting',
    hoursWorked: 32,
  },
  {
    id: 3,
    type: 'Equipment',
    name: 'Irrigation System',
    status: 'Active',
    efficiency: 78,
    maintenanceDate: '2025-02-01',
    waterUsage: 1200,
  },
];

const mockTasks = [
  {
    id: 1,
    name: 'Spring Planting',
    status: 'In Progress',
    priority: 'High',
    assignedResources: ['Tractor 1', 'John Smith'],
    progress: 65,
    startDate: '2025-01-25',
    endDate: '2025-02-10',
  },
  {
    id: 2,
    name: 'Field Irrigation',
    status: 'Scheduled',
    priority: 'Medium',
    assignedResources: ['Irrigation System'],
    progress: 0,
    startDate: '2025-02-01',
    endDate: '2025-02-03',
  },
];

const mockEfficiencyData = [
  { name: 'Equipment', value: 85 },
  { name: 'Labor', value: 92 },
  { name: 'Water', value: 78 },
  { name: 'Energy', value: 88 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function ResourceOptimization() {
  const [resources, setResources] = useState(mockResources);
  const [tasks, setTasks] = useState(mockTasks);
  const [openTaskDialog, setOpenTaskDialog] = useState(false);
  const [openResourceDialog, setOpenResourceDialog] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [selectedResource, setSelectedResource] = useState(null);
  const [efficiencyData, setEfficiencyData] = useState(mockEfficiencyData);

  // Simulate real-time efficiency updates
  useEffect(() => {
    const interval = setInterval(() => {
      setEfficiencyData(prev =>
        prev.map(item => ({
          ...item,
          value: Math.min(100, Math.max(0, item.value + (Math.random() - 0.5) * 5)),
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const [newTask, setNewTask] = useState({
    name: '',
    priority: 'Medium',
    assignedResources: [],
    startDate: '',
    endDate: '',
  });

  const [newResource, setNewResource] = useState({
    type: 'Equipment',
    name: '',
    status: 'Available',
    efficiency: 85,
  });

  const handleAddTask = () => {
    const task = {
      id: tasks.length + 1,
      ...newTask,
      status: 'Scheduled',
      progress: 0,
    };
    setTasks([...tasks, task]);
    setOpenTaskDialog(false);
    setNewTask({
      name: '',
      priority: 'Medium',
      assignedResources: [],
      startDate: '',
      endDate: '',
    });
  };

  const handleAddResource = () => {
    const resource = {
      id: resources.length + 1,
      ...newResource,
      hoursUsed: 0,
      maintenanceDate: '2025-02-15',
    };
    setResources([...resources, resource]);
    setOpenResourceDialog(false);
    setNewResource({
      type: 'Equipment',
      name: '',
      status: 'Available',
      efficiency: 85,
    });
  };

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'error';
      case 'medium':
        return 'warning';
      case 'low':
        return 'success';
      default:
        return 'default';
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'available':
      case 'active':
        return 'success';
      case 'busy':
      case 'in progress':
        return 'warning';
      case 'maintenance':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Header */}
        <Grid item xs={12}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h4" component="h1" gutterBottom>
              Farm Resource Optimization
            </Typography>
            <Box>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={() => setOpenTaskDialog(true)}
                sx={{ mr: 2 }}
              >
                Add Task
              </Button>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={() => setOpenResourceDialog(true)}
              >
                Add Resource
              </Button>
            </Box>
          </Box>
        </Grid>

        {/* Resource Overview */}
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Resource Utilization
            </Typography>
            <Box sx={{ height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={resources}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <ChartTooltip />
                  <Legend />
                  <Bar dataKey="efficiency" name="Efficiency %" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>

        {/* Efficiency Overview */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Overall Efficiency
            </Typography>
            <Box sx={{ height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={efficiencyData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => \`\${name}: \${value.toFixed(1)}%\`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {efficiencyData.map((entry, index) => (
                      <Cell key={\`cell-\${index}\`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <ChartTooltip />
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>

        {/* Active Tasks */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Active Tasks
            </Typography>
            <Grid container spacing={2}>
              {tasks.map((task) => (
                <Grid item xs={12} md={6} key={task.id}>
                  <Card>
                    <CardContent>
                      <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="h6">{task.name}</Typography>
                        <Box>
                          <Chip
                            label={task.priority}
                            color={getPriorityColor(task.priority)}
                            size="small"
                            sx={{ mr: 1 }}
                          />
                          <Chip
                            label={task.status}
                            color={getStatusColor(task.status)}
                            size="small"
                          />
                        </Box>
                      </Box>
                      <Box sx={{ mt: 2 }}>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          Progress
                        </Typography>
                        <LinearProgress
                          variant="determinate"
                          value={task.progress}
                          sx={{ height: 10, borderRadius: 5 }}
                        />
                      </Box>
                      <Box sx={{ mt: 2 }}>
                        <Typography variant="body2" color="text.secondary">
                          Assigned Resources:
                        </Typography>
                        <Box display="flex" flexWrap="wrap" gap={1} mt={1}>
                          {task.assignedResources.map((resource, index) => (
                            <Chip
                              key={index}
                              label={resource}
                              size="small"
                              icon={
                                resources.find(r => r.name === resource)?.type === 'Equipment' ?
                                <EquipmentIcon /> : <WorkerIcon />
                              }
                            />
                          ))}
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>

        {/* Resources List */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Available Resources
            </Typography>
            <Grid container spacing={2}>
              {resources.map((resource) => (
                <Grid item xs={12} md={4} key={resource.id}>
                  <Card>
                    <CardContent>
                      <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Box display="flex" alignItems="center">
                          {resource.type === 'Equipment' ? (
                            <EquipmentIcon sx={{ mr: 1 }} />
                          ) : (
                            <WorkerIcon sx={{ mr: 1 }} />
                          )}
                          <Typography variant="h6">{resource.name}</Typography>
                        </Box>
                        <Chip
                          label={resource.status}
                          color={getStatusColor(resource.status)}
                          size="small"
                        />
                      </Box>
                      <Box sx={{ mt: 2 }}>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          Efficiency
                        </Typography>
                        <LinearProgress
                          variant="determinate"
                          value={resource.efficiency}
                          sx={{ height: 10, borderRadius: 5 }}
                        />
                      </Box>
                      {resource.type === 'Equipment' && (
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                          Next Maintenance: {resource.maintenanceDate}
                        </Typography>
                      )}
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      {/* Add Task Dialog */}
      <Dialog open={openTaskDialog} onClose={() => setOpenTaskDialog(false)}>
        <DialogTitle>Add New Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Task Name"
            fullWidth
            value={newTask.name}
            onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
          />
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>Priority</InputLabel>
            <Select
              value={newTask.priority}
              label="Priority"
              onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
            >
              <MenuItem value="High">High</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="Low">Low</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>Assigned Resources</InputLabel>
            <Select
              multiple
              value={newTask.assignedResources}
              label="Assigned Resources"
              onChange={(e) => setNewTask({ ...newTask, assignedResources: e.target.value })}
            >
              {resources.map((resource) => (
                <MenuItem key={resource.id} value={resource.name}>
                  {resource.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            label="Start Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={newTask.startDate}
            onChange={(e) => setNewTask({ ...newTask, startDate: e.target.value })}
          />
          <TextField
            margin="dense"
            label="End Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={newTask.endDate}
            onChange={(e) => setNewTask({ ...newTask, endDate: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenTaskDialog(false)}>Cancel</Button>
          <Button onClick={handleAddTask} variant="contained">
            Add Task
          </Button>
        </DialogActions>
      </Dialog>

      {/* Add Resource Dialog */}
      <Dialog open={openResourceDialog} onClose={() => setOpenResourceDialog(false)}>
        <DialogTitle>Add New Resource</DialogTitle>
        <DialogContent>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>Resource Type</InputLabel>
            <Select
              value={newResource.type}
              label="Resource Type"
              onChange={(e) => setNewResource({ ...newResource, type: e.target.value })}
            >
              <MenuItem value="Equipment">Equipment</MenuItem>
              <MenuItem value="Worker">Worker</MenuItem>
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            label="Resource Name"
            fullWidth
            value={newResource.name}
            onChange={(e) => setNewResource({ ...newResource, name: e.target.value })}
          />
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>Status</InputLabel>
            <Select
              value={newResource.status}
              label="Status"
              onChange={(e) => setNewResource({ ...newResource, status: e.target.value })}
            >
              <MenuItem value="Available">Available</MenuItem>
              <MenuItem value="Busy">Busy</MenuItem>
              <MenuItem value="Maintenance">Maintenance</MenuItem>
            </Select>
          </FormControl>
          <Box sx={{ mt: 2 }}>
            <Typography gutterBottom>Initial Efficiency</Typography>
            <Slider
              value={newResource.efficiency}
              onChange={(e, value) => setNewResource({ ...newResource, efficiency: value })}
              valueLabelDisplay="auto"
              step={5}
              marks
              min={0}
              max={100}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenResourceDialog(false)}>Cancel</Button>
          <Button onClick={handleAddResource} variant="contained">
            Add Resource
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
