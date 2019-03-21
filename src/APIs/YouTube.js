import axios from 'axios';

const KEY = 'AIzaSyAftlrpRY1DaRm9s92n-HXYsZN00Wk-6EY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});



