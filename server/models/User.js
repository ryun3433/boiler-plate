const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    minglength: 5,
  },
  facebookId: {
    type: Number,
    maxlength: 50,
  },
  githubId: {
    type: Number,
    maxlength: 50,
  },
  googleId: {
    type: Number,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },

  image: String,
  token: {
    type: String,
  },
});

const userSchema = mongoose.Schema({});
