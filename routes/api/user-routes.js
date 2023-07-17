const router = require("express").Router();

const {
  createUser,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/user-controller");

// GET and POST request for all users
router.route("/").get(getAllUsers).post(createUser);

// GET, PUT, and DELETE for getting a single user, updating, and deleting a single user by ID
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// PUT and DELETE requests for adding a friend
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
