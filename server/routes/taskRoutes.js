const { Router } = require("express");
const express = require("express");
const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../controller/taskController");
const router = express.Router();
router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").put(updateTask).delete(deleteTask);
module.exports = router;
