// Importing bcrypt library for encrypting passwords
const bcrypt = require("bcrypt");

// Importing the User model
const User = require("../models/user");

const { generateRandomString } = require("../helpers/userHelper");

const transporter = require("../utils/transporter");

const { EMAIL_ID } = require("../utils/config");

const userController = {
  register: async (req, res) => {
    try {
      // Extracting values from request body
      const { email, password } = req.body;

      // Checking is user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res
          .status(409)
          .json({ message: "User with this email already exists" });
      }

      // Encrypting the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Creating a new user
      const user = new User({
        email,
        password: hashedPassword,
      });

      // Saving the user
      await user.save();

      // Sending a success response
      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      // Sending an error response
      res.status(500).json({ message: error.message });
    }
  },
  forgotPassword: async (req, res) => {
    try {
      // Extracting values from request body
      const { email } = req.body;

      // Checking if this email is of a valid user
      const user = await User.findOne({ email });
      if (!user) {
        return res
          .status(404)
          .json({ message: "User with this email does not exist" });
      }

      // Generating auth string
      const authString = generateRandomString();

      // Update user
      user.authString = authString;
      await user.save();

      // Send email
      transporter.sendMail({
        from: EMAIL_ID,
        to: email,
        subject: "Password Reset",
        text: `Click here to reset your password: http://localhost:3000/reset/${authString}`,
      });

      // Sending a success response
      res
        .status(200)
        .json({ message: "Password reset link sent to your email" });
    } catch (error) {
      // Sending an error response
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = userController;
