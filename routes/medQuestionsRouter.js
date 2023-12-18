const express = require("express");

const {
  getAllMedQuestions,
  singleSpecificMedQuestion,
  createEntry,
  deleteEntry,
  updateEntry,
} = require("../controllers/medQuestionsController");

//const whiteBoardModel = require("../models/whiteBoardModel");
const router = express.Router();

// GET
router.get("/", getAllMedQuestions);

//POST
router.get("/:id", singleSpecificMedQuestion);

// POST
router.post("/", createEntry);

// DELETE
router.delete("/:id", deleteEntry);

// UPDATE
router.patch("/:id", updateEntry);

module.exports = router;
