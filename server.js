// Access to process variables
require("dotenv").config();

const express = require("express");

// Databank
const mongoose = require("mongoose");

// express app
const app = express();

//middleware
// send data via json
app.use(express.json());

// small own little logger as middelware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//Manage CrossOverRessorceSharing Frontend and Backend on different servers
const cors = require("cors");

app.use(
  cors({
    origin: "https://drf-crewbriefing.netlify.app",
  })
);

// Get Router
const whiteboardRoutes = require("./routes/whiteboard");
const flightQuestionsRouter = require("./routes/flightQuestionsRouter");
const medQuestionsRouter = require("./routes/medQuestionsRouter");

const tasksRouter = require("./routes/weekTasksRouter");

const usersRouter = require("./routes/user.js");

// routes
app.use("/api/whiteboard", whiteboardRoutes);
app.use("/api/flightQuestions", flightQuestionsRouter);
app.use("/api/medQuestions", medQuestionsRouter);
app.use("/api/tasks", tasksRouter);
app.use("/api/user", usersRouter);

// Connect to db
console.log("*** Backend Node.JS Server started ... ***");
console.log("");
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to database.");
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Server listening on port " + process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
console.log("CORS API ONLY https://drf-crewbriefing.netlify.app ");
