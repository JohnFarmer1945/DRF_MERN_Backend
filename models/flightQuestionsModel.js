const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const flightQuestionsSchema = new Schema(
  {
    question: {
      type: String,
      required: true,
      maxLength: 20,
    },
    answer: {
      type: String,
      required: true,
      maxLength: 50,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("flightQuestionsModel", flightQuestionsSchema);
