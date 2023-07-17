const router = require("express").Router();

const {
  createUser,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
} = require("../../controllers/user-controller");

// GET and POST request for all users
router.route("/").get(getAllUsers).post(createUser);

// GET, PUT, and DELETE for getting a single user, updating, and deleting a single user by ID
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

//

module.exports = router;
