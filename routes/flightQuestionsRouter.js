const express = require("express");

const {
  getAllFlightQuestions,
  getRandomFlightQuestions,
  singleSpecificFlightQuestion,
  createEntry,
  deleteEntry,
  updateEntry,
} = require("../controllers/flightQuestionsController");

// import auth middleware function
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// Use requireAuthFunction for all flightQuestionRoutes
router.use(requireAuth);

router.get("/", getAllFlightQuestions);

//  GET
router.get("/random", getRandomFlightQuestions);

//POST
router.get("/:id", singleSpecificFlightQuestion);

router.post("/", createEntry);

router.delete("/:id", deleteEntry);

router.patch("/:id", updateEntry);

module.exports = router;
