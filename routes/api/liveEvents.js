const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Avatar Model
const LiveEvent = require('../../models/LiveEvent');

// @route   GET api/liveevent
// @desc    Get Curernt user LiveEvent
// @access  Private
router.get('/',auth, (req, res) => {
    LiveEvent.find({user: req.user.id},(err,events) => {
    res.json(events)
    }).sort({ created: -1 })
});

// @route   POST api/liveevent
// @desc    Create An LiveEvent
// @access  Private
router.post('/', auth, (req, res) => {
  const newLiveEvent = new LiveEvent({
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    user: req.user.id,
    startDate: req.body.startDate,
    endDate: req.body.endDate
  });

  newLiveEvent.save().then(item => res.json(item));
});

module.exports = router;
