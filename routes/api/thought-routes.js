const router = require("express").Router();

const {
  createThought,
  getThoughts,
  getThoughtById,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");

// GET and POST request for all thoughts
router.route("/").get(getThoughts).post(createThought);

// GET PUT and DELETE requests for finding, updating, and deleting a thought based on it's id
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// PUT request to add a reaction to a thought
router.route("/:id/reactions").put(createReaction);

// DELETE request to delete a reaction from a thought
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
