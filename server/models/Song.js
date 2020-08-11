const mongoose = require("mongoose");
// const { type } = require("os");
// const { string } = require("prop-types");
const Schema = mongoose.Schema;

const songSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    composer: {
        type: String,
        required: false
    },
    songKey: {
        type: String,
        required: false
    },
    style: {
        type: String,
        required: false
    }
})

const Song = mongoose.model('Song', songSchema);

module.exports = Song;