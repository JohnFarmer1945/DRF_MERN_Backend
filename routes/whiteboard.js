const express = require("express");
const {
  getAllWhiteBoardEntrys,
  singleSpecificWhiteBoardEntry,
  createEntry,
  deleteEntry,
  updateEntry,
} = require("../controllers/whiteBoardController");

//const whiteBoardModel = require("../models/whiteBoardModel");
const router = express.Router();

// import auth middleware function
const requireAuth = require("../middleware/requireAuth");

// GET
router.get("/", getAllWhiteBoardEntrys);

//POST
router.get("/:id", requireAuth, singleSpecificWhiteBoardEntry);

// POST
router.post("/", requireAuth, createEntry);

// DELETE
router.delete("/:id", requireAuth, deleteEntry);

// UPDATE
router.patch("/:id", requireAuth, updateEntry);

module.exports = router;
