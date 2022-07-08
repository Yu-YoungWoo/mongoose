var express = require('express');
var router = express.Router();
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const User = require("../models/User");
const { route } = require('../app');
const mongoose = require("mongoose");


const comment = new Comment({
  _id: new mongoose.Types.ObjectId(),
  commenter: User._id,
  comment: "apple mac",
});

const userSchema = new User({
  _id: new mongoose.Types.ObjectId(),
  name: "apple",
  age: 30,
  married: true,
  comment: comment._id,
});

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.post('/', function(req, res, next) {
//   const user = User.create(user);
//   console.log(user);
// });


router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.post('/', async (req, res, next) => {
  const user = await User.create(userSchema);
  console.log(user);
});



// router.route('/')
// .get(async function(req, res, next) {
//   const { id } = req.params;
//   const post = await Post.findById(id).populate("comments");
//   // console.log(`id:  ${id}`);
//   res.render("index", {
//     post : post,
//     title: "test",
//   });
// })
// .post(async (req, res, next) => {
//   if(!res.status(200)) {
//     res.render('error');
//   }
// });

//   await Post.create(req.body, function(err, post) {
//     if(err) return res.json(err);
//     res.render("post", {
//       title: "express",
//       post : req.body,
//     });
//   });
// });

// router.get('/', async (req, res, next) => {
//   try {
//     const users = await User.find({});
//     res.render('mongoose', { users });
//   } catch(err) {
//     console.log(err);
//     next(err);
//   }
// })

// router.get('/:id', function(req, res, next) {
//   const title = req.params.title;
//   console.log(title);
// })


// router.route('/user')
// .get(async function(req, res, next) {
//   const { id } = req.params;
//   const user = await Post.findById(id).populate("comments").populate("posts");

//   res.render("user", {
//     user,
//   });
// })
// .post(async function(req, res, next) {

// });


module.exports = router;
