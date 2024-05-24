require('dotenv').config();
const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const Comment = require('../models/comment');

exports.create_comment = [
  (req, res, next) => {
    jwt.verify(req.token, process.env.JWT_SECRET, (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        req.user = authData.user;
        next();
      }
    })
  },

  body('text')
    .trim()
    .isLength({ min: 1 })
    .withMessage('comment must not be empty')
    .escape(),

  asyncHandler( async(req, res, next) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
      res.json({
        error: error
      });
      return;
    }

    const comment = Comment({
      text: req.body.text,
      post_date: new Date(),
      user: req.user._id,
      post: req.params.postid
    });

    comment.save();
    res.json({
      msg: 'Success!!!'
    })
  })
];

exports.delete_comment = [
  (req, res, next) => {
    jwt.verify(req.token, process.env.JWT_SECRET, (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        req.user = authData.user;
        next();
      }
    })
  },

  asyncHandler( async(req, res, next) => {
    const comment = await Comment.find({_id: req.params.id}).exec();

    if (comment.user === req.user._id) {
      res.sendStatus(403);
      return;
    }

    await Comment.findByIdAndDelete(req.params.id).exec();
    res.json({
      msg: 'Success!!!'
    });
  })
];