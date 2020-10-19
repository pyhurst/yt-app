import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm])
    
    const search = async term => {
        const videoResponse = await youtube.get('/search', {
            params: {
                q: term
            }
        })

        setVideos(videoResponse.data.items);
    }

    return [videos, search]
}

export default useVideos;