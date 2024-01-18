const express = require("express");
const { loginUser, singnupUser } = require("../controllers/userController");

// controller functions

const router = express.Router();

// login route

router.post("/login", loginUser);

// signup route
router.post("/signup", singnupUser);

module.exports = router;
