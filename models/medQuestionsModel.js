const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const medQuestionsSchema = new Schema(
  {
    question: {
      type: String,
      required: true,
      maxLength: 30,
    },
    answer: {
      type: String,
      required: true,
      maxLength: 30,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("medQuestionsModel", medQuestionsSchema);
