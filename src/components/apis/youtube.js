import axios from 'axios';

const KEY = 'AIzaSyCbh1dNItxaLpXg86e9xYDmerLl22Elln8';

export default axios.create ({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 25,
        key: KEY,
    }
});