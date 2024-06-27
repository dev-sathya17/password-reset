// Importing the dotenv library
require("dotenv").config();

// Extracting values from .env file
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;

// Exporting the values
module.exports = {
  MONGODB_URI,
  PORT,
};
