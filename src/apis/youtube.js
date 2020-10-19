import axios from 'axios';

const KEY = 'AIzaSyAoodyMvmcScHr-lfPfBtAf3dUoz29ne_0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 8,
        key: KEY
    }
})

