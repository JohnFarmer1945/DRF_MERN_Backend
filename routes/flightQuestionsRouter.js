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

router.get("/", getAllFlightQuestions);

router.get("/random", randomSpecificFlightQuestions);

router.get("/:id", singleSpecificFlightQuestion);

router.post("/", createEntry);

router.delete("/:id", deleteEntry);

router.patch("/:id", updateEntry);

module.exports = router;
