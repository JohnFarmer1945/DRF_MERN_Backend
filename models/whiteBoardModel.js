const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const whiteBoardSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 12,
    },
    description: {
      type: String,
      required: true,
      maxLength: 50,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("whiteBoardModel", whiteBoardSchema);
