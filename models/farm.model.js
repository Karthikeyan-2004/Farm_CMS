const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  address: { type: String, required: true },
});

const farmSchema = new mongoose.Schema({
  _id: { type: String, required: true }, 
  name: { type: String, required: true },
  owner: { type: String, required: true },
  location: { type: locationSchema, required: true },
  sizeInAcres: { type: Number, required: true },
  createdDate: { type: Date, required: true, default: Date.now }, 
});

const Farm = mongoose.model('Farm', farmSchema);

module.exports = Farm;
