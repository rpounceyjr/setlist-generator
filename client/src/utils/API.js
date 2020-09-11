import axios from 'axios';

export const getAllSongs = function() {
    return axios.get('/api/songs');
};

export const createNewSong = function(song) {
    console.log("song", song)
    return axios.post('api/songs', song);
}

export const createNewSetlist = function(setlist) {
    console.log("setlist", setlist)
    return axios.post('api/setlists', setlist);
}