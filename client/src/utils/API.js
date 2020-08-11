import axios from 'axios';

export const getAllSongs = function() {
    console.log("API");
    return axios.get('/api/songs');
};