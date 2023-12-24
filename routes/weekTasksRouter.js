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

// GET
router.get("/", getAllTasks);

//POST
router.get("/:id", singleTask);

//POST
router.get("/day/:Number", singleDay);

// POST
router.post("/", createEntry);

// DELETE
router.delete("/:id", deleteEntry);

// UPDATE
router.patch("/:id", updateEntry);

module.exports = router;
