require("dotenv").config();

const express = require("express");
const whiteboardRoutes = require("./routes/whiteboard");
const mongoose = require("mongoose");
const cors = require("cors");

// express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(
  cors({
    origin: "*",
  })
);

// routes
app.use("/api/whiteboard", whiteboardRoutes);

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
console.log("");
console.log("Cors added with *");
