const router = require("express").Router();
const { User } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["id", "ASC"]],
    });

    const users = userData.map((users) => users.get({ plain: true }));

    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    let newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    newUser = newUser.get({plain: true});
    if(!newUser){
      res.status(400).json('New user rejected.');
      return
    }
      req.session.save(() => {
        req.session.user_id = newUser.id;
        req.session.logged_in = true;
        res.json({ user: newUser, message: "You are now logged in!" });
      });
    
    
  } catch (err) {
    res.status(500).json(err) 
  }
})

module.exports = router;
