const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const LiveEventSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    trim: true
  },
  category: {
    type: String,
    required: 'Category is required'
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {type: mongoose.Schema.ObjectId, ref: 'user'},
  published: {
    type: Boolean,
    default: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  }
});

module.exports = Item = mongoose.model('liveevent', LiveEventSchema);
