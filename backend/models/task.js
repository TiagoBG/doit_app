const {model, Schema} = require("mongoose");

const TaskSchema = new Schema({

  taskname: {type: String, required: true},
  urlimage: {type: String, required: true},
  priority: {type: String, enum: ['High', 'Mid', 'Low'],required: true},
  expdate: {type: Date, required: true},
  user: {type: Schema.ObjectId, ref:"User"}

});

module.exports = model("Task", TaskSchema);