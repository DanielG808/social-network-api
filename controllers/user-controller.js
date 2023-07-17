const { User } = require("../models");

const userController = {
  // POST a new user
  async createUser(req, res) {
    try {
      const userData = await User.create(req.body);
      res.status(200).json(userData);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // GET a user by ID
  async getUserById(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.id })
        .populate({ path: "thoughts", select: "-__v" })
        .populate({ path: "friends", select: "-__v" });

      if (!user) {
        return res.status(404).json({ message: "No post with that ID" });
      }

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // GET all users
  async getAllUsers(req, res) {
    try {
      const users = await User.find()
        .populate({ path: "thoughts", select: "-__v" })
        .populate({ path: "friends", select: "-__v" });

      res.status(200).JSON(users);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // PUT update a user by ID
  async updateUser(req, res) {
    try {
      const user = User.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
      });

      if (!user) {
        res.status(404).json({ message: "No User with this ID." });
      }

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // DELETE a user by ID
  async deleteUser(req, res) {
    try {
      const user = User.findOneAndDelete({ _id: req.params.id });

      if (!user) {
        res.status(404).json({ message: "No User with this ID." });
      }

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = userController;
