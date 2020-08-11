const {Song} = require('../models');

module.exports = {
    async getAllSongs(req, res) {
        try {
            const allSongs = await Song.find();
            res.json(allSongs);
        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    }
}
