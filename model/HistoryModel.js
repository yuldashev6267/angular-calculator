const mongoose = require("mongoose");
const moment = require("moment");
const historySchema = mongoose.Schema({
  history: {
    type: String,
  },
  date: {
    type: String,
    default: moment().format("dddd, MMMM Do YYYY"),
  },
});

const historyModel = mongoose.model("History", historySchema);

module.exports = historyModel;
