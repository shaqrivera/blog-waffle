const router = require("express").Router();
const { User, Post } = require("../models");

router.get("/", async (req, res) => {
  try {
    const session = req.session;
    // Get all users, sorted by name
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["name", "ASC"]],
    });

    // Serialize user data so templates can read it
    const users = userData.map((users) => users.get({ plain: true }));

    const postData = await Post.findAll({
      order: [["id", "DESC"]],
    });

    const posts = postData.map((posts) => posts.get({ plain: true }));
    // Pass serialized data into Handlebars.js template
    res.render("homepage", { users, posts, session });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/login", async (req, res) => {
  try {
    const session = req.session;
    if(req.session.logged_in){
      res.redirect('/dashboard');
    }
    else{
    res.render("login", {session});
  }
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/dashboard", async (req, res) => {
  try {
    const session = req.session;
    if (req.session.logged_in) {
      const postData = await Post.findAll({
        where: { user_id: req.session.user_id },
      });
      const posts = postData.map((posts) => posts.get({ plain: true }));
      res.render("dashboard", { posts, session });
    } else {
      res.redirect("/login");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
