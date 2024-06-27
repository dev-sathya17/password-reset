// Importing mongoose library
const mongoose = require("mongoose");

// Creating schema for users collection
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  authString: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("User", userSchema, "users");
