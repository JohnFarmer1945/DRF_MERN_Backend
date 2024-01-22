const express = require("express");

const {
  getAllTasks,
  singleTask,
  singleDay,
  createEntry,
  deleteEntry,
  updateEntry,
} = require("../controllers/weekTasksController");

//const whiteBoardModel = require("../models/whiteBoardModel");
const router = express.Router();

// import auth middleware function
const requireAuth = require("../middleware/requireAuth");

// GET
router.get("/", requireAuth, getAllTasks);

//POST
router.get("/:id", requireAuth, singleTask);

//POST
router.get("/day/:Number", singleDay);

// POST
router.post("/", requireAuth, createEntry);

// DELETE
router.delete("/:id", requireAuth, deleteEntry);

// UPDATE
router.patch("/:id", requireAuth, updateEntry);

module.exports = router;
