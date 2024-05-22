const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

exports.sign_up = [
  body('username')
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage('Username must be between 4 to 20 characters')
    .escape(),
  body('password')
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage('Password must be between 1 to 20 characters')
    .escape(),
  body('conf_password')
    .trim()
    .custom((value, { req }) => {
      return value === req.body.password;
    })
    .withMessage('Passwords do not match')
    .escape(),

  asyncHandler( async(req, res, next) => {
    const errors = validationResult(req);

    const nameTaken = await User.findOne({ username: req.body.username })
    if (nameTaken !== null) {
      errors.errors.push({ msg: "Username is already taken" });
    }
    if (!errors.isEmpty()) {
      res.json({
        errors: errors.array(),
      })
      return;
    }

    const hash = await bcrypt.hash(req.body.password, 10)

    const user = new User({
      username: req.body.username,
      password: hash,
      author: false
    });

    await user.save();
    res.json({
      message: 'Success!!!'
    });
  })
];

exports.log_in = asyncHandler( async(req, res, next) => {
  res.send('Post Log In');
});

exports.log_out = asyncHandler( async(req, res, next) => {
  res.send('Post Log Out');
});