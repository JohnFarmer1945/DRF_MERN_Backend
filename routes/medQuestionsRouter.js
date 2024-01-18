const express = require("express");

const {
  getAllMedQuestions,
  getRandomMedQuestions,
  singleSpecificMedQuestion,
  randomSpecificMedQuestions,
  createEntry,
  deleteEntry,
  updateEntry,
} = require("../controllers/medQuestionsController");

//const whiteBoardModel = require("../models/whiteBoardModel");
const router = express.Router();

router.get("/", getAllMedQuestions);

// GET
router.get("/random", getRandomMedQuestions);

//POST
router.get("/:id", singleSpecificMedQuestion);

router.post("/", createEntry);

router.delete("/:id", deleteEntry);

router.patch("/:id", updateEntry);

module.exports = router;
