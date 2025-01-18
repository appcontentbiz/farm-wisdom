import express from 'express';
const router = express.Router();
import auth from '../middleware/auth.js';
import Farm from '../models/Farm.js';
import Crop from '../models/Crop.js';
import Employee from '../models/Employee.js';
import Task from '../models/Task.js';

// Farm Management
router.get('/farms', auth, async (req, res) => {
  try {
    const farms = await Farm.find({ owner: req.user.id });
    res.json(farms);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.post('/farms', auth, async (req, res) => {
  try {
    const newFarm = new Farm({
      ...req.body,
      owner: req.user.id
    });

    const farm = await newFarm.save();
    res.json(farm);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.put('/farms/:id', auth, async (req, res) => {
  try {
    let farm = await Farm.findById(req.params.id);
    if (!farm) return res.status(404).json({ msg: 'Farm not found' });

    // Make sure user owns farm
    if (farm.owner.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    farm = await Farm.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.json(farm);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.delete('/farms/:id', auth, async (req, res) => {
  try {
    const farm = await Farm.findById(req.params.id);
    if (!farm) return res.status(404).json({ msg: 'Farm not found' });

    // Make sure user owns farm
    if (farm.owner.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await farm.remove();
    res.json({ msg: 'Farm removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
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

export default router;
