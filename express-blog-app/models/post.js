const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: { type: String },
  text: { type: String, required: true },
  post_date: { type: Date, default: Date.now },
  public: { type: Boolean },
  user: { type: Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Post", PostSchema);