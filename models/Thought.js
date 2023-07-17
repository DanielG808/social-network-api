const { Schema, Types, model } = require("mongoose");

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: { type: String, required: true, maxlength: 280 },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (time) => moment(time).format("MMMM Do YYYY, h:mm:ss a"),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

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
