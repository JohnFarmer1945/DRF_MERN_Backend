const express = require("express");

const {
  getAllFlightQuestions,
  singleSpecificFlightQuestion,
  randomSpecificFlightQuestions,
  createEntry,
  deleteEntry,
  updateEntry,
} = require("../controllers/flightQuestionsController");

//const whiteBoardModel = require("../models/whiteBoardModel");
const router = express.Router();

// GET
router.get("/", getAllFlightQuestions);

//POST
router.get("/random", randomSpecificFlightQuestions);

//POST
router.get("/:id", singleSpecificFlightQuestion);

// POST
router.post("/", createEntry);

// DELETE
router.delete("/:id", deleteEntry);

// UPDATE
router.patch("/:id", updateEntry);

module.exports = router;
