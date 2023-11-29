const whiteBoardModel = require("../models/whiteBoardModel");
const mongoose = require("mongoose");

// get all entries
const getAllWhiteBoardEntrys = async (req, res) => {
  const WhiteBoardEntrys = await whiteBoardModel
    .find({})
    .sort({ createdAt: -1 });

  res.status(200).json(WhiteBoardEntrys);
};

// get a single entry
const singleSpecificWhiteBoardEntry = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }
  const singleEntry = await whiteBoardModel.findById(id);
  if (!singleEntry) {
    return res.status(404).json({ error: "No such entry" });
  }
  res.status(200).json(singleEntry);
};

// create a new entry
const createEntry = async (req, res) => {
  const { title, description } = req.body;

  // ad mongo-document to db
  try {
    const whiteBoardEntry = await whiteBoardModel.create({
      title,
      description,
    });

    res.status(200).json(whiteBoardEntry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a entry
const deleteEntry = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const singleEntryThatWasDeleted = await whiteBoardModel.findOneAndDelete({
    _id: id,
  });

  if (!singleEntryThatWasDeleted) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json(singleEntryThatWasDeleted);
};

// update a entry

const updateEntry = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }
  const updatedEntry = await whiteBoardModel.findOneAndUpdate(
    { _id: id },
    { ...req.body }
  );

  if (!updatedEntry) {
    return res.status(400).json({ werror: "No such workout" });
  }

  res.status(200).json({ updatedEntry });
};

module.exports = {
  getAllWhiteBoardEntrys,
  singleSpecificWhiteBoardEntry,
  createEntry,
  deleteEntry,
  updateEntry,
};
