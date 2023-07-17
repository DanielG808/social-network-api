const router = require("express").Router();

const {
  createThought,
  getThoughts,
  getThoughtById,
} = require("../../controllers/thought-controller");

// GET and POST request for all thoughts
router.route("/").get(getThoughts).post(createThought);

// GET all ids
router.route("/:id").get(getThoughtById);

module.exports = router;
