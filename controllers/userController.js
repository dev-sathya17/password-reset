// Importing bcrypt library for encrypting passwords
const bcrypt = require("bcrypt");

// Importing the User model
const User = require("../models/user");

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
};

module.exports = userController;
