const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  text: { type: String, required: true, maxLength: 1000 },
  post_date: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  post: { type: Schema.Types.ObjectId, ref: "Post" }
});

module.exports = mongoose.model("Comment", CommentSchema);