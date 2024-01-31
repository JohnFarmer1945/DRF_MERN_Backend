const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const whiteBoardSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 30,
    },
    description: {
      type: String,
      required: true,
      maxLength: 30,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("whiteBoardModel", whiteBoardSchema);
