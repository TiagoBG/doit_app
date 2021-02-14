const {Schema, model} = require("mongoose");

const UserSchema = new Schema({
  name:{
    type: String, required: true
  },
  surname:{
    type: String, required: true
  },
  email:{
    type: String, required: true
  },
  password:{
    type: String, required: true
  },
  created_since: {
    type: Date, default: Date.now,
  },
  tasks:{
    type: Schema.ObjectId, ref:""
  }
  //OJOOOOOOOOOO PENDIENTE REVISARRRRR LA UNIOOOONNNNNNNNNNN
})
module.exports = model('User', UserSchema);