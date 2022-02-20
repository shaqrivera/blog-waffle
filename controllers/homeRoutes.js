const router = require("express").Router();
const { User, Post, Comment } = require("../models");

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

router.get('/post/:post_id', async (req,res)=>{
  const session = req.session;
  const postData = await Post.findByPk(req.params.post_id, {
    include: User
  });
  const post = postData.get({plain: true});
      let postDate = new Date(post.date_stamp);
      const formattedPostMonth = postDate.toLocaleString('default', { month: 'long' });
      let formattedPostDate = `${formattedPostMonth} ${postDate.getDate()}, ${postDate.getFullYear()} `;
      let formattedPostTime = `${postDate.toLocaleTimeString()}`;

  const commentData = await Comment.findAll({
    where: {
      post_id : req.params.post_id
    },
    include: User 
  });
  const comments = commentData.map((comment)=> comment.get({plain: true}));
  

  res.render("post", {data: {post, session, formattedPostDate, formattedPostTime, comments}})
});
module.exports = router;
