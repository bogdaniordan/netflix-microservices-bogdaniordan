import React from 'react';

const VideoCardComponent = (props) => {
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
                    <h5 className="card-title"><a href={"/video/" + props.data.id} >{props.data.name}</a></h5>
                    {/*<a href={"/video/" + props.data.id} className="btn btn-primary">View details</a>*/}
                </div>
            </div>
        </div>
    );
};

export default VideoCardComponent;