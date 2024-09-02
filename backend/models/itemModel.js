const mongoose = require("mongoose");
const trainingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const items = mongoose.model("Items", itemSchema);
module.exports = items;
