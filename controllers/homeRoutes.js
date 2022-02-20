const router = require("express").Router();
const { User, Post } = require("../models");

router.get("/", async (req, res) => {
  try {
    const session = req.session;

    const postData = await Post.findAll({
      order: [["date_stamp", "DESC"]],
      include: User
    });

    const posts = postData.map((posts) => posts.get({ plain: true }));
    // Pass serialized data into Handlebars.js template
    res.render("homepage", { data: { posts, session} });
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
    res.render("login", {data:{session}});
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
      const userData = await User.findByPk(req.session.user_id);
      const user = userData.get({plain: true});

      res.render("dashboard", { data: {posts, session, user} });
    } else {
      res.redirect("/login");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
