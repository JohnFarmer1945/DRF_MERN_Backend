const express = require("express");

const {
  getAllTasks,
  singleTask,
  createEntry,
  deleteEntry,
  updateEntry,
} = require("../controllers/weekTasksController");

//const whiteBoardModel = require("../models/whiteBoardModel");
const router = express.Router();

// GET
router.get("/", getAllTasks);

//POST
router.get("/:id", singleTask);

// POST
router.post("/", createEntry);

// DELETE
router.delete("/:id", deleteEntry);

// UPDATE
router.patch("/:id", updateEntry);

module.exports = router;
