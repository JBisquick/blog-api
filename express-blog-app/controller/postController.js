require('dotenv').config();
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require('express-validator');
const Post = require('../models/post');
const jwt = require('jsonwebtoken');

exports.get_all_posts = asyncHandler( async(req, res, next) => {
  const allPosts = await Post.find({}, 'title post_date public user')
    .sort({ post_date: 1 })
    .populate('user', 'username')
    .exec();

  res.json({
    allPosts: allPosts
  });
});

exports.get_post = asyncHandler( async(req, res, next) => {
  res.send('Get Post');
});

exports.create_post = [
  (req, res, next) => {
    jwt.verify(req.token, process.env.JWT_SECRET, (err, authData) => {
      if (err || authData.user.author === false) {
        res.sendStatus(403);
      } else {
        req.author = authData.user;
        next();
      }
    })
  },
  
  body('title')
    .trim()
    .isLength({ min: 1 })
    .withMessage('title must not be empty')
    .escape(),
  body('content')
    .trim()
    .isLength({ min: 1 })
    .withMessage('content must not be empty')
    .escape(),
  body('public')
    .trim()
    .isBoolean()
    .withMessage('pulic must be true or false value')
    .escape(),

  asyncHandler( async(req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.json({
        errors: errors.array()
      });
      return;
    }

    const post = Post({
      title: req.body.title,
      content: req.body.content,
      post_date: new Date(),
      public: req.body.public,
      user: req.author._id
    });

    await post.save();
    res.json({
      msg: 'Success!!!'
    });
  })
];

exports.delete_post = asyncHandler( async(req, res, next) => {
  res.send('Delete Post');
});

exports.update_post = [
  (req, res, next) => {
    jwt.verify(req.token, process.env.JWT_SECRET, (err, authData) => {
      if (err || authData.user.author === false) {
        res.sendStatus(403);
      } else {
        next();
      }
    })
  },
  
  body('title')
    .trim()
    .isLength({ min: 1 })
    .withMessage('title must not be empty')
    .escape(),
  body('content')
    .trim()
    .isLength({ min: 1 })
    .withMessage('content must not be empty')
    .escape(),
  body('public')
    .trim()
    .isBoolean()
    .withMessage('pulic must be true or false value')
    .escape(),

  asyncHandler( async(req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.json({
        errors: errors.array()
      });
      return;
    }

    await Post.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      content: req.body.content,
      public: req.body.public,
    }).exec();
    res.json({
      msg: 'Success!!!'
    });
  })
];