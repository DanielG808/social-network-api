const router = require("express").Router();

const {
  createThought,
  getThoughts,
} = require("../../controllers/thought-controller");

// GET and POST request for all thoughts
router.route("/").get(getThoughts).post(createThought);

module.exports = router;
