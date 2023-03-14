const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  name: String,
  pass: String,
  admin: Boolean,
  tasks: [],
});

const user = mongoose.model("users", usersSchema);
module.exports = user;
