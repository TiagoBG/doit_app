const mongoose = require("mongoose");

const Task = mongoose.model(
  "Task",
  new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    priority: {type: String, required: true},
    image: {type: String, required: true},
    expdate: {type: Date, enum: ['High', 'Mid', 'Low'],required: true}    
  })
);

module.exports = Task;