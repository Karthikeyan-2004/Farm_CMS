const mongoose = require('mongoose');


const equipmentSchema = new mongoose.Schema({
  _id: { type: String, required: true }, 
  name: { type: String, required: true }, 
  type: { type: String, required: true },
  status: { type: String, required: true, enum: ['available', 'in use', 'under maintenance'] }, 
});


const Equipment = mongoose.model('Equipment', equipmentSchema);

module.exports = Equipment;