const asyncHandler = require("express-async-handler");

exports.sign_up = asyncHandler( async(req, res, next) => {
  res.send('Post Sign Up');
});

exports.log_in = asyncHandler( async(req, res, next) => {
  res.send('Post Log In');
});

exports.log_out = asyncHandler( async(req, res, next) => {
  res.send('Post Log Out');
});