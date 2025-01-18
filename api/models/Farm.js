const mongoose = require('mongoose');

const ResourceSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  unit: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['available', 'in-use', 'maintenance', 'depleted'],
    default: 'available'
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
});

const ExpenseSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  description: String,
  recurring: {
    type: Boolean,
    default: false
  }
});

const FarmSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: {
      type: [Number],
      required: true
    },
    address: {
      street: String,
      city: String,
      state: String,
      country: String,
      zipCode: String
    }
  },
  size: {
    value: {
      type: Number,
      required: true
    },
    unit: {
      type: String,
      required: true
    }
  },
  farmType: {
    type: String,
    enum: ['crop', 'livestock', 'mixed', 'organic', 'hydroponics', 'aquaponics', 'other'],
    required: true
  },
  resources: [ResourceSchema],
  expenses: [ExpenseSchema],
  weatherStations: [{
    name: String,
    location: {
      type: {
        type: String,
        enum: ['Point'],
        default: 'Point'
      },
      coordinates: [Number]
    },
    status: {
      type: String,
      enum: ['active', 'inactive', 'maintenance'],
      default: 'active'
    }
  }],
  soil: {
    type: {
      type: String
    },
    ph: Number,
    organicMatter: Number,
    nitrogen: Number,
    phosphorus: Number,
    potassium: Number,
    lastTested: Date
  },
  certifications: [{
    name: String,
    issuedBy: String,
    issuedDate: Date,
    expiryDate: Date,
    status: {
      type: String,
      enum: ['active', 'expired', 'pending'],
      default: 'active'
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
});

// Index for geospatial queries
FarmSchema.index({ location: '2dsphere' });

// Middleware to update lastUpdated
FarmSchema.pre('save', function(next) {
  this.lastUpdated = new Date();
  next();
});

module.exports = mongoose.model('Farm', FarmSchema);
