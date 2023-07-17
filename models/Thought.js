const { Schema, Types, model } = require("mongoose");

const thoughtSchema = new Schema({
  thoughtText: { type: String, required: true, maxlength: 280, minlength: 1 },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
// write a vitrual to format the timestamp

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
