const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
    topType: {
    type: String,
    default: "ShortHairTheCaesar"
  },
  accessoriesType: {
    type: String,
    default: "Blank"
  },
  hairColor: {
    type: String,
    default: "Blank"
  },
  facialHairType: {
    type: String,
    default: "Blank"
  },
  clotheType: {
    type: String,
    default: "BlazerShirt"
  },
  eyeType: {
    type: String,
    default: "Default"
  },
  eyebrowType: {
    type: String,
    default: "Default"
  },
  mouthType: {
    type: String,
    default: "Default"
  },
  skinColor: {
    type: String,
    default: "Light"
  },
  User: {type: mongoose.Schema.ObjectId, ref: 'user'}
});

module.exports = Item = mongoose.model('avatar', ItemSchema);
