const asyncHandler = require("express-async-handler");

exports.create_comment = asyncHandler( async(req, res, next) => {
  res.send('Create Comment');
});

exports.delete_comment = asyncHandler( async(req, res, next) => {
    res.send('Delete Comment');
  });