const medQuestionsModel = require("../models/medQuestionsModel");
const mongoose = require("mongoose");

// get all entries
const getAllMedQuestions = async (req, res) => {
  const allMedQuestions = await medQuestionsModel
    .find({})
    .sort({ createdAt: -1 });

  res.status(200).json(allMedQuestions);
};

// get a single entry
const singleSpecificMedQuestion = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such question" });
  }
  const singleMedQuestion = await medQuestionsModel.findById(id);
  if (!singleMedQuestion) {
    return res.status(404).json({ error: "No such entry" });
  }
  res.status(200).json(singleMedQuestion);
};

// get a random entry
const randomSpecificMedQuestions = async (req, res) => {
  const allMedQuestions = await medQuestionsModel.find({});

  const randomIndex = Math.floor(Math.random() * allMedQuestions.length);

  const singleSpecificMedQuestion = res
    .status(200)
    .json(allMedQuestions[randomIndex]);
};

// create a new entry
const createEntry = async (req, res) => {
  const { question, answer } = req.body;

  // ad mongo-document to db
  try {
    const singleSpecificMedQuestion = await medQuestionsModel.create({
      question,
      answer,
    });

    res.status(200).json(singleSpecificMedQuestion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a entry
const deleteEntry = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such question" });
  }

  const singleMedQuestionThatWasDeleted =
    await medQuestionsModel.findOneAndDelete({
      _id: id,
    });

  if (!singleMedQuestionThatWasDeleted) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json(singleMedQuestionThatWasDeleted);
};

// update a entry

const updateEntry = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such question" });
  }
  const updatedMedQuestion = await medQuestionsModel.findOneAndUpdate(
    { _id: id },
    { ...req.body }
  );

  if (!updatedMedQuestion) {
    return res.status(400).json({ werror: "No such workout" });
  }

  res.status(200).json({ updatedMedQuestion });
};

module.exports = {
  getAllMedQuestions,
  singleSpecificMedQuestion,
  randomSpecificMedQuestions,
  createEntry,
  deleteEntry,
  updateEntry,
};
