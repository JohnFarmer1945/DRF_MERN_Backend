const express = require("express");

const {
  getAllMedQuestions,
  getRandomMedQuestions,
  singleSpecificMedQuestion,
  createEntry,
  deleteEntry,
  updateEntry,
} = require("../controllers/medQuestionsController");

//const whiteBoardModel = require("../models/whiteBoardModel");
const router = express.Router();

// GET
router.get("/", getAllMedQuestions);

// GET
router.get("/random", getRandomMedQuestions);

//POST
router.get("/:id", singleSpecificMedQuestion);

// POST
router.post("/", createEntry);

// DELETE
router.delete("/:id", deleteEntry);

// UPDATE
router.patch("/:id", updateEntry);

module.exports = router;
