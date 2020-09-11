const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const setlistSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  songs: {
    type: Array,
    required: true,
  },
});

const Setlist = mongoose.model("Setlist", setlistSchema);
module.exports = Setlist;
