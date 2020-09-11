const router = require('express').Router();

const {
    getAllSongs,
    createNewSong,
    createNewSetlist
} = require('../../controller/user-controller');

router.route('/songs').get(getAllSongs).post(createNewSong);

router.route('/setlists').post(createNewSetlist)

module.exports = router;