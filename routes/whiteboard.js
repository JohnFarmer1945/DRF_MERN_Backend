const express = require("express");
const {
  getAllWhiteBoardEntrys,
  singleSpecificWhiteBoardEntry,
  createEntry,
  deleteEntry,
  updateEntry,
} = require("../controllers/whiteBoardController");
const whiteBoardModel = require("../models/whiteBoardModel");
const router = express.Router();

// GET
router.get("/", getAllWhiteBoardEntrys);

//POST
router.get("/:id", singleSpecificWhiteBoardEntry);

// POST
router.post("/", createEntry);

// DELETE
router.delete("/:id", deleteEntry);

// UPDATE
router.patch("/:id", updateEntry);

module.exports = router;
