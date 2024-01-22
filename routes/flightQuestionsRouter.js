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
//router.use(requireAuth);
// Secure single endpoints with middlewre.

router.get("/", requireAuth, getAllFlightQuestions);

//  GET
router.get("/random", getRandomFlightQuestions);

//POST
router.get("/:id", requireAuth, singleSpecificFlightQuestion);

router.post("/", requireAuth, createEntry);

router.delete("/:id", requireAuth, deleteEntry);

router.patch("/:id", requireAuth, updateEntry);

module.exports = router;
