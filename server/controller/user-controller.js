const { Song, Setlist } = require("../models");

module.exports = {
  async getAllSongs(req, res) {
    try {
      const allSongs = await Song.find();
      res.json(allSongs);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  },

  async createNewSong({ body }, res) {
      console.log("body", body)
    try {
      const newSong = await Song.create(body);
      res.json(newSong);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  },

  async createNewSetlist({body}, res) {
    console.log("Made it! body is ", body)
  try {
    const newSetlist = await Setlist.create(body);
    res.json(newSetlist);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
},
};
