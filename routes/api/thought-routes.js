const router = require("express").Router();

const { createThought } = require("../../controllers/thought-controller");

// GET and POST request for all thoughts
router.route("/").post(createThought);

module.exports = router;
