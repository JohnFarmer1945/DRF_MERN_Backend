const flightQuestionsModel = require("../models/flightQuestionsModel");
const mongoose = require("mongoose");

// get all entries
const getAllFlightQuestions = async (req, res) => {
  const allFlightQuestions = await flightQuestionsModel
    .find({})
    .sort({ createdAt: -1 });

  res.status(200).json(allFlightQuestions);
};

// get a single entry
const singleSpecificFlightQuestion = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }
  const singleFlightQuestion = await flightQuestionsModel.findById(id);
  if (!singleFlightQuestion) {
    return res.status(404).json({ error: "No such entry" });
  }
  res.status(200).json(singleFlightQuestion);
};

// create a new entry
const createEntry = async (req, res) => {
  const { question, answer } = req.body;

  // ad mongo-document to db
  try {
    const singleSpecificFlightQuestion = await flightQuestionsModel.create({
      question,
      answer,
    });

    res.status(200).json(singleSpecificFlightQuestion);
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

  const singleFlightQuestionThatWasDeleted =
    await flightQuestionsModel.findOneAndDelete({
      _id: id,
    });

  if (!singleFlightQuestionThatWasDeleted) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json(singleFlightQuestionThatWasDeleted);
};

// update a entry

const updateEntry = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }
  const updatedFlightQuestion = await flightQuestionsModel.findOneAndUpdate(
    { _id: id },
    { ...req.body }
  );

  if (!updatedFlightQuestion) {
    return res.status(400).json({ werror: "No such workout" });
  }

  res.status(200).json({ updatedFlightQuestion });
};

module.exports = {
  getAllFlightQuestions,
  singleSpecificFlightQuestion,
  createEntry,
  deleteEntry,
  updateEntry,
};
