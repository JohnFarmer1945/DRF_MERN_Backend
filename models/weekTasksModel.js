const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const weekTasksSchema = new Schema(
  {
    Number: {
      type: Number,
      required: true,
      maxLength: 1,
    },
    Day: {
      type: String,
      required: true,
      maxLength: 10,
    },
    TagFlug: {
      type: String,
      required: true,
      maxLength: 120,
    },
    TagMedizin: {
      type: String,
      required: true,
      maxLength: 120,
    },
    NachtFlug: {
      type: String,
      required: true,
      maxLength: 120,
    },
    NachtMedizin: {
      type: String,
      required: true,
      maxLength: 120,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("weekTasksModel", weekTasksSchema);
