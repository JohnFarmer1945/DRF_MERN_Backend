const express = require("express");

const {
  getAllMedQuestions,
  singleSpecificMedQuestion,
  randomSpecificMedQuestions,
  createEntry,
  deleteEntry,
  updateEntry,
} = require("../controllers/medQuestionsController");

//const whiteBoardModel = require("../models/whiteBoardModel");
const router = express.Router();

router.get("/", getAllMedQuestions);

router.get("/random", randomSpecificMedQuestions);

router.get("/:id", singleSpecificMedQuestion);

router.post("/", createEntry);

router.delete("/:id", deleteEntry);

router.patch("/:id", updateEntry);

module.exports = router;
