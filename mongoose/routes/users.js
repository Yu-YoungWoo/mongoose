var express = require('express');
var router = express.Router();
const User = require('../models/User');
const Comment = require('../models/Comment');

router.get('/', async (req, res, next) => {
  try {
    // User.find({})
    // .sort({ username: 1 })
    // .exec(function (err, users) {
    //   if (err) return res.json(err);
    //   res.render("users/index", { users: users });
    // });
    res.render('users/index');
  } catch(err) {
    console.error(err);
    next(err);
  }
});
router.post('/', async (req, res, next) => {
  try {
    const user = await User.create({
      name: req.body.name,
      age: req.body.age,
      married: req.body.married,
    });
  } catch(err) {
    console.error(err);
    next(err);
  }
});


router.get('/:id/comments', async (req, res, next) => {
  try {
    const comments = await Comment.find({ commenter: req.params.id }).populate('commenter');
    console.log(comments);
    res.json(comments);
  } catch(err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
