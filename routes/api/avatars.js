const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Avatar Model
const Avatar = require('../../models/Avatar');

// @route   GET api/avatars
// @desc    Get Curernt user Avatar
// @access  Private
router.get('/', auth, (req, res) => {
    Avatar.findOne({user: req.user.id},(err,avatar) => {
    res.json(avatar);
    })
});

// @route   POST api/avatars
// @desc    Create An Avatar
// @access  Private
router.post('/', auth, (req, res) => {

  Avatar.findOneAndUpdate({user: req.user.id},{
    top: req.body.top,
    facialHairType: req.body.facialHairType,
    clotheType: req.body.clotheType,
    eyeType: req.body.eyeType,
    eyebrowType: req.body.eyebrowType,
    mouthType: req.body.mouthType,
    skinColor: req.body.skinColor,
   },(err,avatar) => {
    res.json(avatar);
  })
});

module.exports = router;
