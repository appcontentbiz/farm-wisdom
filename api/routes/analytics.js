import express from 'express';
import auth from '../middleware/auth.js';
import Farm from '../models/Farm.js';
import Crop from '../models/Crop.js';
import Task from '../models/Task.js';

const router = express.Router();

// Get farm performance metrics
router.get('/performance/:farmId', auth, async (req, res) => {
  try {
    const { farmId } = req.params;
    const { startDate, endDate } = req.query;

    const crops = await Crop.find({
      farm: farmId,
      plantedDate: { $gte: startDate, $lte: endDate }
    });

    const tasks = await Task.find({
      farm: farmId,
      createdAt: { $gte: startDate, $lte: endDate }
    });

    const metrics = calculatePerformanceMetrics(crops, tasks);
    res.json(metrics);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get resource utilization
router.get('/resources/:farmId', auth, async (req, res) => {
  try {
    const { farmId } = req.params;
    const farm = await Farm.findById(farmId);
    
    const resourceMetrics = calculateResourceUtilization(farm.resources);
    res.json(resourceMetrics);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get productivity metrics
router.get('/productivity/:farmId', auth, async (req, res) => {
  try {
    const { farmId } = req.params;
    const { startDate, endDate } = req.query;

    const tasks = await Task.find({
      farm: farmId,
      completedAt: { $gte: startDate, $lte: endDate }
    }).populate('assignedTo');

    const productivityMetrics = calculateProductivityMetrics(tasks);
    res.json(productivityMetrics);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get financial metrics
router.get('/financial/:farmId', auth, async (req, res) => {
  try {
    const { farmId } = req.params;
    const { startDate, endDate } = req.query;

    const farm = await Farm.findById(farmId);
    const crops = await Crop.find({
      farm: farmId,
      harvestedDate: { $gte: startDate, $lte: endDate }
    });

    const financialMetrics = calculateFinancialMetrics(farm, crops);
    res.json(financialMetrics);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Helper functions for calculations
function calculatePerformanceMetrics(crops, tasks) {
  return {
    cropYield: calculateCropYield(crops),
    taskCompletion: calculateTaskCompletion(tasks),
    efficiency: calculateEfficiency(crops, tasks)
  };
}

function calculateResourceUtilization(resources) {
  return {
    waterUsage: calculateWaterUsage(resources),
    equipmentUtilization: calculateEquipmentUtilization(resources),
    laborAllocation: calculateLaborAllocation(resources)
  };
}

function calculateProductivityMetrics(tasks) {
  return {
    taskCompletionRate: calculateTaskCompletionRate(tasks),
    employeePerformance: calculateEmployeePerformance(tasks),
    timeEfficiency: calculateTimeEfficiency(tasks)
  };
}

function calculateFinancialMetrics(farm, crops) {
  return {
    revenue: calculateRevenue(crops),
    expenses: calculateExpenses(farm),
    profit: calculateProfit(crops, farm),
    roi: calculateROI(crops, farm)
  };
}

// Implement specific calculation functions
function calculateCropYield(crops) {
  return crops.reduce((total, crop) => total + (crop.yield || 0), 0);
}

function calculateTaskCompletion(tasks) {
  const completed = tasks.filter(task => task.status === 'completed').length;
  return (completed / tasks.length) * 100;
}

function calculateEfficiency(crops, tasks) {
  // Implement efficiency calculation logic
  return 85; // Placeholder
}

function calculateWaterUsage(resources) {
  // Implement water usage calculation
  return resources.water ? resources.water.used : 0;
}

function calculateEquipmentUtilization(resources) {
  // Implement equipment utilization calculation
  return 75; // Placeholder
}

function calculateLaborAllocation(resources) {
  // Implement labor allocation calculation
  return resources.labor ? resources.labor.allocation : {};
}

function calculateTaskCompletionRate(tasks) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.status === 'completed').length;
  return (completedTasks / totalTasks) * 100;
}

function calculateEmployeePerformance(tasks) {
  // Group tasks by employee and calculate performance metrics
  const employeePerformance = {};
  tasks.forEach(task => {
    if (!employeePerformance[task.assignedTo._id]) {
      employeePerformance[task.assignedTo._id] = {
        name: task.assignedTo.name,
        tasksCompleted: 0,
        totalTasks: 0
      };
    }
    employeePerformance[task.assignedTo._id].totalTasks++;
    if (task.status === 'completed') {
      employeePerformance[task.assignedTo._id].tasksCompleted++;
    }
  });
  return employeePerformance;
}

function calculateTimeEfficiency(tasks) {
  // Calculate average time per task completion
  const completedTasks = tasks.filter(task => task.status === 'completed');
  const totalTime = completedTasks.reduce((total, task) => {
    return total + (new Date(task.completedAt) - new Date(task.createdAt));
  }, 0);
  return totalTime / completedTasks.length;
}

function calculateRevenue(crops) {
  return crops.reduce((total, crop) => {
    return total + (crop.yield * crop.pricePerUnit || 0);
  }, 0);
}

function calculateExpenses(farm) {
  // Calculate total expenses from various categories
  return farm.expenses ? farm.expenses.reduce((total, expense) => {
    return total + expense.amount;
  }, 0) : 0;
}

function calculateProfit(crops, farm) {
  const revenue = calculateRevenue(crops);
  const expenses = calculateExpenses(farm);
  return revenue - expenses;
}

function calculateROI(crops, farm) {
  const profit = calculateProfit(crops, farm);
  const expenses = calculateExpenses(farm);
  return expenses ? (profit / expenses) * 100 : 0;
}

export default router;
