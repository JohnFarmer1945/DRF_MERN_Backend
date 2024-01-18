const express = require("express");

const {
  getAllFlightQuestions,
  getRandomFlightQuestions,
  singleSpecificFlightQuestion,
  createEntry,
  deleteEntry,
  updateEntry,
} = require("../controllers/flightQuestionsController");

const router = express.Router();

// GET
router.get("/", getAllFlightQuestions);

//  GET
router.get("/random", getRandomFlightQuestions);

//POST
router.get("/:id", singleSpecificFlightQuestion);

// POST
router.post("/", createEntry);

// DELETE
router.delete("/:id", deleteEntry);

// UPDATE
router.patch("/:id", updateEntry);

module.exports = router;
