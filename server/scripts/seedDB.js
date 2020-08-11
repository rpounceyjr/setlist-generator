const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/setlist-generator"
);

const songSeed = [
    {
        title: "Beatrice",
        composer: "Sam Rivers",
        songKey: "f major",
        style: "swing"
    },
    {
        title: "Trise",
        composer: "Antonio Carlos Jobim",
        songKey: "bb major",
        style: "bossa"
    },
    {
        title: "Emily",
        composer: "Johnny Mandel",
        songKey: "c major",
        style: "waltz"
    },
    {
        title: "2 + 2 = 5",
        composer: "Thom Yorke",
        songKey: "f minor",
        style: "rock"
    },
    {
        title: "Old Folks",
        composer: "Willard Robison",
        songKey: "f major",
        style: "ballad"
    }
]

db.Song.remove({})
  .then(() => db.Song.collection.insertMany(songSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
