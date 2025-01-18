import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  farm: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Farm',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['planting', 'harvesting', 'maintenance', 'inspection', 'treatment', 'other'],
    required: true
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high', 'urgent'],
    default: 'medium'
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed', 'cancelled', 'delayed'],
    default: 'pending'
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee'
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  crop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Crop'
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: [Number],
    description: String
  },
  schedule: {
    startDate: {
      type: Date,
      required: true
    },
    dueDate: {
      type: Date,
      required: true
    },
    estimatedHours: Number,
    actualHours: Number
  },
  equipment: [{
    name: String,
    quantity: Number,
    status: {
      type: String,
      enum: ['available', 'in-use', 'maintenance', 'unavailable'],
      default: 'available'
    }
  }],
  materials: [{
    name: String,
    quantity: Number,
    unit: String,
    status: {
      type: String,
      enum: ['available', 'low', 'unavailable'],
      default: 'available'
    }
  }],
  weather: {
    required: {
      type: Boolean,
      default: false
    },
    conditions: {
      temperature: {
        min: Number,
        max: Number,
        unit: {
          type: String,
          default: 'celsius'
        }
      },
      precipitation: {
        chance: Number,
        amount: Number,
        unit: String
      },
      wind: {
        speed: Number,
        unit: String
      }
    }
  },
  dependencies: [{
    task: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task'
    },
    type: {
      type: String,
      enum: ['blocks', 'blocked-by', 'related-to']
    }
  }],
  progress: {
    percentage: {
      type: Number,
      min: 0,
      max: 100,
      default: 0
    },
    lastUpdated: Date,
    milestones: [{
      description: String,
      completed: {
        type: Boolean,
        default: false
      },
      completedAt: Date
    }]
  },
  attachments: [{
    name: String,
    url: String,
    type: String,
    uploadedAt: {
      type: Date,
      default: Date.now
    }
  }],
  comments: [{
    content: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  history: [{
    field: String,
    oldValue: mongoose.Schema.Types.Mixed,
    newValue: mongoose.Schema.Types.Mixed,
    changedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    changedAt: {
      type: Date,
      default: Date.now
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  },
  completedAt: Date
});

// Indexes for efficient queries
TaskSchema.index({ farm: 1, status: 1 });
TaskSchema.index({ assignedTo: 1, status: 1 });
TaskSchema.index({ 'schedule.dueDate': 1 });
TaskSchema.index({ location: '2dsphere' });

// Middleware to update lastUpdated
TaskSchema.pre('save', function(next) {
  this.lastUpdated = new Date();
  if (this.status === 'completed' && !this.completedAt) {
    this.completedAt = new Date();
  }
  next();
});

// Virtual for time remaining
TaskSchema.virtual('timeRemaining').get(function() {
  if (this.status === 'completed') return 0;
  return Math.max(0, this.schedule.dueDate - new Date());
});

// Virtual for overdue status
TaskSchema.virtual('isOverdue').get(function() {
  return this.status !== 'completed' && this.schedule.dueDate < new Date();
});

// Method to check if task can be started
TaskSchema.methods.canStart = function() {
  if (this.status !== 'pending') return false;
  
  // Check if all blocking tasks are completed
  const blockingTasks = this.dependencies.filter(dep => dep.type === 'blocked-by');
  return blockingTasks.every(dep => dep.task.status === 'completed');
};

// Method to update progress
TaskSchema.methods.updateProgress = function(percentage, milestone = null) {
  this.progress.percentage = percentage;
  this.progress.lastUpdated = new Date();
  
  if (milestone) {
    this.progress.milestones.push({
      description: milestone,
      completed: true,
      completedAt: new Date()
    });
  }
  
  if (percentage === 100) {
    this.status = 'completed';
    this.completedAt = new Date();
  }
};

export default mongoose.model('Task', TaskSchema);
