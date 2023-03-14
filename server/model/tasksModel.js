const mongoose = require("mongoose");

const tasksSchema = new mongoose.Schema({
  name: String,
  dateModified: Date,
  dateExpired: Date,
  complete: Boolean,
  star: Boolean,
});

module.exports = mongoose.model("tasks", tasksSchema);
