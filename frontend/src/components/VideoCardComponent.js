import React, {useEffect} from 'react';

const VideoCardComponent = (props) => {
    useEffect(() => {
        console.log(props.data)
    }, [])
    return (
        <div>
            <div className="card" style={{width: "18rem;"}}>
                <iframe
                    width="1100"
                    height="520"
                    src={"https://www.youtube.com/embed/" + props.data.url}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
                <div className="card-body">
                    <h5 className="card-title">{props.data.name}</h5>
                    <a href={"/video/" + props.data.id} className="btn btn-primary">View details</a>
                </div>
            </div>
        </div>
    );
};

export default VideoCardComponent;