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
      ).populate({
        path: "reactions",
        select: "-__v",
      });
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
  async getThoughtById(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.id }).populate({
        path: "reactions",
        select: "-__v",
      });

      if (!thought) {
        return res.status(404).json({ message: "No Thought with this ID." });
      }

      res.status(200).json(thought);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // PUT request to update one Thought by id
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
      ).populate({
        path: "reactions",
        select: "-__v",
      });

      if (!thought) {
        return res.status(404).json({ message: "No Thought with this ID." });
      }

      res.status(200).json(thought);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // DELETE request to delete one Thought by id
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({ _id: req.params.id });

      if (!thought) {
        return res.status(404).json({ message: "No Thought with this ID." });
      }

      res.status(200).json({ message: "Thought deleted!" });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // PUT request to add a reaction to a Thought
  async createReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { reactions: req.body } },
        { new: true, runValidators: true }
      ).populate({
        path: "reactions",
        select: "-__v",
      });

      if (!thought) {
        return res.status(404).json({ message: "No Thought with this ID." });
      }

      res.status(200).json(thought);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // DELETE request to delete a reaction from a Thought
};

module.exports = thoughtController;
