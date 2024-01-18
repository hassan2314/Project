const mongoose= require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true, // The 'name' field is required
    },
    email: {
      type: String,
      required: true, // The 'email' field is required
    },
    password: {
      type: String,
      required: true, // The 'password' field is required
    },
  });

module.exports=mongoose.model("users",UserSchema)