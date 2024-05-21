const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true, maxLength: 64 },
  password: { type: String, required: true },
  author: { type: Boolean }
});

module.exports = mongoose.model("User", UserSchema);