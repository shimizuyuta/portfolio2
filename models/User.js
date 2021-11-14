const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 1,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      // required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    provider:{
      default:'email',
      enum: ['github', 'google', 'email',],
      type:String
  },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);