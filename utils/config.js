// Importing the dotenv library
require("dotenv").config();

// Extracting values from .env file
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;
const EMAIL_ID = process.env.EMAIL_ID;
const APP_PASSWORD = process.env.APP_PASSWORD;

// Exporting the values
module.exports = {
  MONGODB_URI,
  PORT,
  EMAIL_ID,
  APP_PASSWORD,
};
