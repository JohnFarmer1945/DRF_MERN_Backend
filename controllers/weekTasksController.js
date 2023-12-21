const weekTasksModel = require("../models/weekTasksModel");
const mongoose = require("mongoose");

// get all entries
const getAllTasks = async (req, res) => {
  const allTasks = await weekTasksModel.find({}).sort({ createdAt: -1 });

  res.status(200).json(allTasks);
};

// get a single entry
const singleTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Task" });
  }
  const singleTask = await weekTasksModel.findById(id);
  if (!singleTask) {
    return res.status(404).json({ error: "No such Task" });
  }
  res.status(200).json(singleTask);
};

// create a new entry
const createEntry = async (req, res) => {
  const { day, TagFlug, TagMedizin, NachtFlug, NachtMedizin } = req.body;

  // ad mongo-document to db
  try {
    const singleSpecificTask = await weekTasksModel.create({
      day,
      TagFlug,
      TagMedizin,
      NachtFlug,
      NachtMedizin,
    });
    console.log(singleSpecificTask);
    res.status(200).json(singleSpecificTask);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a entry
const deleteEntry = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Task." });
  }

  const singleTaskThatWasDeleted = await weekTasksModel.findOneAndDelete({
    _id: id,
  });

  if (!weekTasksModel) {
    return res.status(404).json({ error: "No such Task" });
  }

  res.status(200).json(singleTaskThatWasDeleted);
};

// update a entry

const updateEntry = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Task." });
  }
  const updatedTask = await weekTasksModel.findOneAndUpdate(
    { _id: id },
    { ...req.body }
  );

  if (!updatedTask) {
    return res.status(400).json({ werror: "No such Task" });
  }

  res.status(200).json({ updatedTask });
};

module.exports = {
  getAllTasks,
  singleTask,
  createEntry,
  deleteEntry,
  updateEntry,
};
