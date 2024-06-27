// Importing the express library
const express = require("express");

// Importing cors
const cors = require("cors");

// Importing routes
const userRouter = require("./routes/userRoutes");

// Creating an express application
const app = express();

// adding cors middleware for API calls from react
app.use(cors());

// Adding a middleware to parse request body as json
app.use(express.json());

// Creating routes
app.use("/users", userRouter);

module.exports = app;
