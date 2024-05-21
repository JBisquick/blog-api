const asyncHandler = require("express-async-handler");

exports.get_all_posts = asyncHandler( async(req, res, next) => {
  res.send('Home Page');
});

exports.get_post = asyncHandler( async(req, res, next) => {
  res.send('Get Post');
});

exports.create_post = asyncHandler( async(req, res, next) => {
  res.send('Create Post');
});

exports.delete_post = asyncHandler( async(req, res, next) => {
  res.send('Delete Post');
});

exports.update_post = asyncHandler( async(req, res, next) => {
  res.send('Update Post');
});