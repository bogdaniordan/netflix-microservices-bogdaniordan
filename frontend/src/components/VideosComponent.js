import React, {useEffect, useState} from 'react';
import NavbarComponent from "./NavbarComponent";
import VideoService from "../service/VideoService";
import VideoCardComponent from "./VideoCardComponent";

const VideosComponent = () => {
    const [videos, setVideos] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        VideoService.getAllVideos().then(r => {
            setVideos(r.data);
            setLoading(false);
        })
    },[])

    if (!isLoading) {
        return (
            <div>
                <NavbarComponent />
                {
                    videos.map(
                        video => <VideoCardComponent data={video}/>
                    )
                }
            </div>
        );
    } else {
        return (<div><h3>Loading...</h3></div>)
    }
};

export default VideosComponent;