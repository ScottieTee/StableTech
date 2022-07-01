const router = require("express").Router();
const userRoutes = require("./user-routes");
const horseRoutes = require("./horse-routes")
const authRoutes = require("./auth");
const bcrypt = require("bcrypt");


router.use("/user", userRoutes);
router.use("/horse", horseRoutes);
router.use("/auth", authRoutes);

module.exports = router;