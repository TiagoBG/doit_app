const {model, Schema} = require("mongoose");

const TaskSchema = new Schema({

  taskname: {type: String, required: true},
  urlimage: {type: String, required: false},
  priority: {type: Number, enum: [1, 2, 3],required: true},
  expdate: {type: Date, required: true},
  user: {type: Schema.ObjectId, ref:"User"}

});

module.exports = model("Task", TaskSchema);