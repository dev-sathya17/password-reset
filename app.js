// Importing the express library
const express = require("express");
const userRouter = require("./routes/userRoutes");

// Creating an express application
const app = express();

// Adding a middleware to parse request body as json
app.use(express.json());

// Creating routes
app.use("/users", userRouter);

module.exports = app;
