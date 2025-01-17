// Importing the express library
const express = require("express");

// Creating a router object from express
const userRouter = express.Router();

// Importing the controller
const userController = require("../controllers/userController");

// Route for registering new users
userRouter.post("/", userController.register);
userRouter.post("/forgot", userController.forgotPassword);
userRouter.get("/verify/:authString", userController.authVerify);
userRouter.post("/reset", userController.resetPassword);

// Exporting the router object
module.exports = userRouter;
