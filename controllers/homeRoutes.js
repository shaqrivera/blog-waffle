const router = require("express").Router();
const { User, Post } = require("../models");

router.get("/", async (req, res) => {
  try {
    // Get all users, sorted by name
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["name", "ASC"]],
    });

    // Serialize user data so templates can read it
    const users = userData.map((blogs) => blogs.get({ plain: true }));

    const postData = await Post.findAll({
      order: [["id", "DESC"]],
    });

    const posts = postData.map((posts) => posts.get({ plain: true }));
    // Pass serialized data into Handlebars.js template
    res.render("homepage", { users, posts });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/login", async (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
