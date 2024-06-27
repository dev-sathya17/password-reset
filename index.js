// Importing mongoose library
const mongoose = require("mongoose");

// Importing values from config
const { MONGODB_URI } = require("./utils/config");

// Connecting to mongoDB
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error.message);
  });
