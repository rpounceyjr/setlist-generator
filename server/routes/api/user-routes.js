const router = require('express').Router();

const {
    getAllSongs
} = require('../../controller/user-controller')

router.route('/songs').get(getAllSongs);

module.exports = router;