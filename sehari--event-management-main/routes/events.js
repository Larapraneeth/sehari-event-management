const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

router.post('/', async (req, res) => {
  try {
    const newEvent = new Event({
      name: req.body.name,
      date: req.body.date,
      venue: req.body.venue,
      guests: req.body.guests,
      notes: req.body.notes
    });

    await newEvent.save();
    res.send('✅ Event created successfully!');
  } catch (err) {
    res.status(500).send('❌ Error saving event: ' + err.message);
  }
});

module.exports = router;
