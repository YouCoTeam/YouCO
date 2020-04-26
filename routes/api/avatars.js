const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Avatar Model
const Avatar = require('../../models/Avatar');

// @route   GET api/avatars
// @desc    Get Curernt user Avatar
// @access  Private
router.get('/',auth, (req, res) => {
    Avatar.findOne({User: req.user.id},(err,avatar) => {
    res.json(avatar)
    })
});

// @route   POST api/avatars
// @desc    Create An Avatar
// @access  Private
router.post('/', auth, (req, res) => {
  const newAvatar = new Avatar({
    topType: req.body.topType,
    accessoriesType: req.body.accessoriesType,
    hairColor: req.body.hairColor,
    facialHairType: req.body.facialHairType,
    clotheType: req.body.clotheType,
    eyeType: req.body.eyeType,
    eyebrowType: req.body.eyebrowType,
    mouthType: req.body.mouthType,
    skinColor: req.body.skinColor,
    User: req.user.id
  });

  newAvatar.save().then(item => res.json(item));
});

module.exports = router;
