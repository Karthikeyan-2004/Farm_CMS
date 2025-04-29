const mongoose = require('mongoose');

const fieldSchema = new mongoose.Schema({
  _id: { type: String, required: true }, 
  farmId: { type: String, required: true },
  name: { type: String, required: true },
  sizeInAcres: { type: Number, required: true },
  crop: { type: String, required: true },
  soilType: { type: String, required: true },
});

const Field = mongoose.model('Field', fieldSchema);

module.exports = Field;
