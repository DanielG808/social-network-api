const { Thought, User } = require("../models");

const thoughtController = {
  // POST request to create a new Thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      console.log(thought);
      const user = await User.findOneAndUpdate(
        { userId: req.params.userId },
        { $push: { thoughts: thought._id } },
        { new: true }
      )
        .populate({ path: "thoughts", select: "-__v" })
        .populate({ path: "friends", select: "-__v" });

      res.status(200).json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // GET request to get all the Thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find().populate({
        path: "reactions",
        select: "-__v",
      });

      res.status(200).json(thoughts);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // GET request to get one Thought by id
  // PUT request to update one Thought by id
  // DELETE request to delete one Thought by id
  // PUT request to add a reaction to a Thought
  // DELETE request to delete a reaction from a Thought
};

module.exports = thoughtController;
