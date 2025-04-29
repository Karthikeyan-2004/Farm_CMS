const mongoose = require('mongoose');

const operationSchema = new mongoose.Schema({
  _id: { type: String, required: true }, 
  farmId: { type: String, required: true }, 
  fieldId: { type: String, required: true }, 
  type: { type: String, required: true, enum: ['planting', 'harvesting', 'fertilizing'] }, 
  startDate: { type: String, required: true }, 
  endDate: { type: String, required: true },
  equipmentUsed: [{ type: String, required: true }],
  notes: { type: String, required: false }, 
});


const Operation = mongoose.model('Operation', operationSchema);

module.exports = Operation;