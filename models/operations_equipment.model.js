const mongoose = require('mongoose');

const operationsEquipmentSchema = new mongoose.Schema({
  _id: { type: String, required: true }, 
  operationId: { type: String, required: true }, 
  equipmentId: { type: String, required: true }, 
});


const OperationsEquipment = mongoose.model('OperationsEquipment', operationsEquipmentSchema);

module.exports = OperationsEquipment;