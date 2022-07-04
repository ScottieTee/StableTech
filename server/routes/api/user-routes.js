const router = require("express").Router();
const {totalUsers, newUser, getUserById, deleteUser} = require("../../controllers/user");
const verifyToken = require("../../utils/verifytoken");

router.route("/")
.get(totalUsers)
.post(newUser)

router.route("/:id")
.get(getUserById)
.delete(deleteUser)

router.route("/checkauthentication")
.get(verifyToken)

module.exports = router;
