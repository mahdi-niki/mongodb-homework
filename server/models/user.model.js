const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: true,
  },
  age: Number,
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
  exp: Number,
  type: {
    type: String,
    enum: ["Full Time", "Part Time"],
    required: true,
  },
  qualification: {
    type: String,
    enum: ["Ph.D", "Master's"],
    required: true,
  },
});

const User=mongoose.model("User", userSchema);
module.exports= User;
