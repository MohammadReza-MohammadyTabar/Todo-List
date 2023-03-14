const tasks = require("../model/tasksModel");
const getAllTasks = async (req, res) => {
  try {
    const allTasks = await tasks.find();
    res.status(200).json(allTasks);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createTask = async (req, res) => {
  try {
    const { name, dateExpired, complete, star } = req.body;
    await new tasks({
      name,
      dateModified: new Date(),
      dateExpired,
      complete,
      star,
    })
      .save()
      .then((data) => {
        res.status(201).json(data);
      });
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateTask = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, dateExpired, complete, star } = req.body;
    await tasks
      .findByIdAndUpdate(
        { _id: id },
        {
          name: name,
          dateModified: new Date(),
          dateExpired: dateExpired,
          complete: complete,
          star: star,
        }
      )
      .then((data) => {
        res.status(204).json(data);
      });
  } catch (error) {
    res.status(500).send(error);
  }
};
const deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await tasks.findByIdAndDelete({ _id: id });
    res.status(200).json(task);
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = { getAllTasks, createTask, updateTask, deleteTask };
