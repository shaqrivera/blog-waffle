const router = require("express").Router();
const req = require("express/lib/request");
const { Post, Comment } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      order: [["date_stamp", "DESC"]],
    });

    const posts = postData.map((posts) => posts.get({ plain: true }));

    res.status(200).json(posts);
  } catch (err) {
    res.status(500);
    console.log(err);
  }
});

router.get("/:post_id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.post_id);

    const post = postData.get({ plain: true });

    res.status(200).json(post);
  } catch (err) {
    res.status(500);
    console.log(err);
  }
});

router.post("/:post_id/comments", async (req, res) => {
  try {

    const commentData = await Comment.create({
      body: req.body.body,
      user_id: req.session.user_id,
      date_stamp: req.body.date_stamp,
      post_id: req.params.post_id
    });

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500)
    console.log(err);
  }
});


router.post('/', async (req, res) => {
  try {
    const newPost = Post.create({
      title: req.body.title,
      body: req.body.body,
      user_id: req.session.user_id,
      date_stamp: req.body.date_stamp
    });
    if(!newPost){
      res.status(400).json('New post rejected.');
    }
    else{
      res.status(200).json(newPost);
    }
    
  } catch (err) {
    res.status(500);
    console.log(err); 
  }
});

router.delete('/', async (req,res) => {
  try {
    const deletedPost = await Post.destroy({
    where:
    {
    user_id: req.session.user_id,
    id: req.body.post_id 
    }
    });
    res.status(200).json(deletedPost);
    console.log('Post successfully deleted');
  } catch (err) {
    res.status(500)
    console.log(err)
  }
})
router.delete('/:post_id/comments', async (req,res) => {
  try {
    const deletedComment = await Comment.destroy({
    where:
    {
    post_id: req.params.post_id,
    id: req.body.comment_id 
    }
    });
    res.status(200).json(deletedComment);
    console.log('Comment successfully deleted');
  } catch (err) {
    res.status(500)
    console.log(err)
  }
})

module.exports = router;
