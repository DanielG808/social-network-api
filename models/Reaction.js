const { Schema, Types, model } = require("mongoose");

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: { type: String, required: true, maxlength: 280 },
});

const Reaction = model("Reaction", reactionSchema);

module.exports = reactionSchema;
