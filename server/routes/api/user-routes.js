const router = require('express').Router();

const {
    getAllSongs,
    createNewSong
} = require('../../controller/user-controller');

router.route('/songs').get(getAllSongs).post(createNewSong);

module.exports = router;