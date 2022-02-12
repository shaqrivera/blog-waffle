const router = require("express").Router();
const loginRoutes = require("./loginRoutes");
const userRoutes = require("./userRoutes");

router.use("/users", userRoutes);
router.use("/login", loginRoutes);

module.exports = router;
