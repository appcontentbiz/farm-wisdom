import mongoose from 'mongoose';

const CropSchema = new mongoose.Schema({
  farm: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Farm',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  variety: {
    type: String,
    required: true
  },
  field: {
    name: String,
    size: {
      value: Number,
      unit: String
    },
    location: {
      type: {
        type: String,
        enum: ['Point'],
        default: 'Point'
      },
      coordinates: [Number]
    }
  },
  plantedDate: {
    type: Date,
    required: true
  },
  expectedHarvestDate: {
    type: Date,
    required: true
  },
  harvestedDate: Date,
  status: {
    type: String,
    enum: ['planned', 'planted', 'growing', 'ready-to-harvest', 'harvested', 'failed'],
    default: 'planned'
  },
  yield: {
    expected: {
      value: Number,
      unit: String
    },
    actual: {
      value: Number,
      unit: String
    }
  },
  pricePerUnit: {
    value: Number,
    currency: {
      type: String,
      default: 'USD'
    }
  },
  costs: [{
    category: String,
    amount: Number,
    date: Date,
    description: String
  }],
  treatments: [{
    type: {
      type: String,
      enum: ['fertilizer', 'pesticide', 'herbicide', 'irrigation', 'other'],
      required: true
    },
    product: String,
    amount: {
      value: Number,
      unit: String
    },
    date: Date,
    notes: String
  }],
  healthMetrics: [{
    date: Date,
    type: String,
    value: Number,
    unit: String,
    notes: String
  }],
  weather: [{
    date: Date,
    temperature: Number,
    humidity: Number,
    rainfall: Number,
    notes: String
  }],
  notes: [{
    date: {
      type: Date,
      default: Date.now
    },
    content: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  }],
  images: [{
    url: String,
    date: Date,
    description: String
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

// Index for geospatial queries on field location
CropSchema.index({ 'field.location': '2dsphere' });

// Middleware to update lastUpdated
CropSchema.pre('save', function(next) {
  this.lastUpdated = new Date();
  next();
});

// Virtual for current age
CropSchema.virtual('age').get(function() {
  return Math.floor((Date.now() - this.plantedDate) / (1000 * 60 * 60 * 24));
});

// Virtual for days until harvest
CropSchema.virtual('daysUntilHarvest').get(function() {
  if (this.status === 'harvested') return 0;
  return Math.floor((this.expectedHarvestDate - Date.now()) / (1000 * 60 * 60 * 24));
});

// Method to calculate profitability
CropSchema.methods.calculateProfitability = function() {
  const totalCosts = this.costs.reduce((sum, cost) => sum + cost.amount, 0);
  const revenue = this.yield.actual ? 
    (this.yield.actual.value * this.pricePerUnit.value) : 
    (this.yield.expected.value * this.pricePerUnit.value);
  
  return {
    costs: totalCosts,
    revenue: revenue,
    profit: revenue - totalCosts,
    roi: totalCosts > 0 ? ((revenue - totalCosts) / totalCosts) * 100 : 0
  };
};

export default mongoose.model('Crop', CropSchema);
