const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const whiteBoardSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("whiteBoardModel", whiteBoardSchema);
