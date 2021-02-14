const mongoose = require("mongoose");

const Task = mongoose.model(
  "Task",
  new mongoose.Schema({
    task: String,
    assignee: String,
    priority: String,
    image: String,
    expdate: Date    
  })
);

module.exports = Task;