const express = require("express");

const {
  getAllFlightQuestions,
  getRandomFlightQuestions,
  singleSpecificFlightQuestion,
  randomSpecificFlightQuestions,
  createEntry,
  deleteEntry,
  updateEntry,
} = require("../controllers/flightQuestionsController");

const router = express.Router();

router.get("/", getAllFlightQuestions);

//  GET
router.get("/random", getRandomFlightQuestions);

//POST
router.get("/:id", singleSpecificFlightQuestion);

router.post("/", createEntry);

router.delete("/:id", deleteEntry);

router.patch("/:id", updateEntry);

module.exports = router;
