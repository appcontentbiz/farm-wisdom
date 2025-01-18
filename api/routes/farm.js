const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Farm = require('../models/Farm');
const Crop = require('../models/Crop');
const Employee = require('../models/Employee');
const Task = require('../models/Task');

// Farm Management
router.post('/farms', auth, async (req, res) => {
  try {
    const farm = new Farm({
      ...req.body,
      owner: req.user.id
    });
    await farm.save();
    res.json(farm);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.get('/farms', auth, async (req, res) => {
  try {
    const farms = await Farm.find({ owner: req.user.id });
    res.json(farms);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Crop Management
router.post('/crops', auth, async (req, res) => {
  try {
    const crop = new Crop({
      ...req.body,
      farm: req.body.farmId
    });
    await crop.save();
    res.json(crop);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.get('/crops/:farmId', auth, async (req, res) => {
  try {
    const crops = await Crop.find({ farm: req.params.farmId });
    res.json(crops);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Employee Management
router.post('/employees', auth, async (req, res) => {
  try {
    const employee = new Employee({
      ...req.body,
      farm: req.body.farmId
    });
    await employee.save();
    res.json(employee);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.get('/employees/:farmId', auth, async (req, res) => {
  try {
    const employees = await Employee.find({ farm: req.params.farmId });
    res.json(employees);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Task Management
router.post('/tasks', auth, async (req, res) => {
  try {
    const task = new Task({
      ...req.body,
      farm: req.body.farmId,
      assignedTo: req.body.employeeId
    });
    await task.save();
    res.json(task);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.get('/tasks/:farmId', auth, async (req, res) => {
  try {
    const tasks = await Task.find({ farm: req.params.farmId });
    res.json(tasks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Resource Management
router.post('/resources', auth, async (req, res) => {
  try {
    const farm = await Farm.findById(req.body.farmId);
    farm.resources.push(req.body.resource);
    await farm.save();
    res.json(farm.resources);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.get('/resources/:farmId', auth, async (req, res) => {
  try {
    const farm = await Farm.findById(req.params.farmId);
    res.json(farm.resources);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
