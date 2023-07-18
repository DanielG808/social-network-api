const router = require("express").Router();

const {
  createThought,
  getThoughts,
  getThoughtById,
  updateThought,
  deleteThought,
} = require("../../controllers/thought-controller");

// GET and POST request for all thoughts
router.route("/").get(getThoughts).post(createThought);

// GET PUT and DELETE requests for finding, updating, and deleting a thought based on it's id
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// POST and DELETE request to add a reaction to a thought and delete it from a thought
router.route("/:thoughtId/reactions");

module.exports = router;
