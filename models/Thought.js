const { Schema, Types } = require("mongoose");

const thoughtSchema = new Schema(
  {
    thoughtText: { type: String, required: true, maxlength: 280, minlength: 1 },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);
