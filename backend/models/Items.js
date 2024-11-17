const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age:Number
});

module.exports = mongoose.model('Item', itemSchema);
