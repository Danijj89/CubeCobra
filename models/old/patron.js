const mongoose = require('mongoose');

const patronSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
  level: {
    type: String,
    enum: ['Patron', 'Cobra Hatchling', 'Coiling oracle', 'Lotus Cobra'],
    default: 'Patron',
  },
});

patronSchema.index({
  user: 1,
  active: 1,
});

patronSchema.index({
  email: 1,
});

module.exports = mongoose.model('Patron', patronSchema);
