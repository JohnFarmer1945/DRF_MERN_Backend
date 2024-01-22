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

// import auth middleware function
const requireAuth = require("../middleware/requireAuth");

// Use requireAuthFunction for all flightQuestionRoutes
//router.use(requireAuth);
// Secure single endpoints with middlewre.

// GET
router.get("/", requireAuth, getAllMedQuestions);

router.get("/random", getRandomMedQuestions);

//POST
router.get("/:id", requireAuth, singleSpecificMedQuestion);

router.post("/", requireAuth, createEntry);

router.delete("/:id", requireAuth, deleteEntry);

router.patch("/:id", requireAuth, updateEntry);

module.exports = router;
