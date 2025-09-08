const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: String,
  date: String,
  venue: String,
  guests: Number,
  notes: String
});

module.exports = mongoose.model('Event', eventSchema);
