const router = require("express").Router();

const {
  createThought,
  getThoughts,
  getThoughtById,
  updateThought,
} = require("../../controllers/thought-controller");

// GET and POST request for all thoughts
router.route("/").get(getThoughts).post(createThought);

// GET PUT and DELETE requests for finding, updating, and deleting a thought based on it's id
router.route("/:id").get(getThoughtById).put(updateThought);

module.exports = router;
