import React, {useEffect, useState} from 'react';
import VideoService from "../service/VideoService";

const VideoDetailsComponent = (props) => {
    const id = props.match.params.id;
    const [isLoading, setLoading] = useState(true);
    const [video, setVideo] = useState();
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        // setLoading(true);
        VideoService.getVideoWithRecommendations(id).then(r => {
            console.log(r.data)
            setVideo(r.data.video);
            console.log(video)
            setRecommendations(r.data.videoRecommendations)
            setLoading(false);
        })
    }, [])

    if (!isLoading) {
        return (
            <div>
                <div className="card" style={{width: "18rem;"}}>
                    <iframe
                        width="1100"
                        height="520"
                        src={"https://www.youtube.com/embed/" + video.url}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                    {/*<div className="card-body">*/}
                    {/*    <h5 className="card-title"><a href={"/video/" + props.data.id} >{props.data.name}</a></h5>*/}
                    {/*    /!*<a href={"/video/" + props.data.id} className="btn btn-primary">View details</a>*!/*/}
                    {/*</div>*/}
                </div>
            </div>
        );
    } else {
        return (<div><h3>Loading...</h3></div>)
    }

};

export default VideoDetailsComponent;