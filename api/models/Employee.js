import mongoose from 'mongoose';

const CertificationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  issuedBy: String,
  issuedDate: Date,
  expiryDate: Date,
  status: {
    type: String,
    enum: ['active', 'expired', 'pending'],
    default: 'active'
  },
  document: {
    url: String,
    verified: {
      type: Boolean,
      default: false
    }
  }
});

const TrainingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['safety', 'technical', 'operational', 'management', 'other'],
    required: true
  },
  completedDate: Date,
  validUntil: Date,
  score: Number,
  instructor: String,
  notes: String
});

const EmployeeSchema = new mongoose.Schema({
  farm: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Farm',
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: String,
  role: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'on-leave', 'terminated'],
    default: 'active'
  },
  employmentType: {
    type: String,
    enum: ['full-time', 'part-time', 'seasonal', 'contract'],
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: Date,
  emergencyContact: {
    name: String,
    relationship: String,
    phone: String
  },
  certifications: [CertificationSchema],
  training: [TrainingSchema],
  schedule: {
    regularHours: {
      monday: { start: String, end: String },
      tuesday: { start: String, end: String },
      wednesday: { start: String, end: String },
      thursday: { start: String, end: String },
      friday: { start: String, end: String },
      saturday: { start: String, end: String },
      sunday: { start: String, end: String }
    },
    timeZone: String
  },
  skills: [{
    name: String,
    level: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced', 'expert']
    },
    yearsExperience: Number
  }],
  performance: [{
    period: {
      start: Date,
      end: Date
    },
    metrics: {
      productivity: Number,
      quality: Number,
      attendance: Number,
      safety: Number
    },
    goals: [{
      description: String,
      status: {
        type: String,
        enum: ['pending', 'in-progress', 'completed', 'cancelled']
      }
    }],
    feedback: String,
    reviewer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  }],
  payroll: {
    rate: {
      amount: Number,
      type: {
        type: String,
        enum: ['hourly', 'salary', 'project-based']
      },
      currency: {
        type: String,
        default: 'USD'
      }
    },
    bankInfo: {
      accountName: String,
      accountNumber: String,
      routingNumber: String,
      bankName: String
    }
  },
  documents: [{
    type: {
      type: String,
      enum: ['id', 'contract', 'visa', 'insurance', 'other']
    },
    name: String,
    url: String,
    expiryDate: Date,
    verified: {
      type: Boolean,
      default: false
    }
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
  createdAt: {
    type: Date,
    default: Date.now
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
});

// Index for efficient queries
EmployeeSchema.index({ farm: 1, status: 1 });
EmployeeSchema.index({ email: 1 }, { unique: true });

// Virtual for full name
EmployeeSchema.virtual('fullName').get(function() {
  return `${this.firstName} ${this.lastName}`;
});

// Middleware to update lastUpdated
EmployeeSchema.pre('save', function(next) {
  this.lastUpdated = new Date();
  next();
});

// Method to check if certification is valid
EmployeeSchema.methods.isCertificationValid = function(certificationName) {
  const cert = this.certifications.find(c => c.name === certificationName);
  if (!cert) return false;
  return cert.status === 'active' && new Date(cert.expiryDate) > new Date();
};

// Method to calculate years of service
EmployeeSchema.methods.getYearsOfService = function() {
  const end = this.endDate || new Date();
  const years = (end - this.startDate) / (1000 * 60 * 60 * 24 * 365.25);
  return Math.floor(years * 10) / 10; // Round to 1 decimal place
};

export default mongoose.model('Employee', EmployeeSchema);
