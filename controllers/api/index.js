const router = require("express").Router();
const loginRoutes = require("./loginRoutes");
const userRoutes = require("./userRoutes");
const postRoutes = require('./postRoutes');

router.use('/posts', postRoutes)
router.use("/users", userRoutes);
router.use("/login", loginRoutes);

module.exports = router;
