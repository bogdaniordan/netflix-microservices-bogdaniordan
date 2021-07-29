import React, {useEffect, useState} from 'react';
import NavbarComponent from "./NavbarComponent";

const VideosComponent = () => {
    const [videos, setVideos] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {

    },[])
    return (
        <div>
            <NavbarComponent />
            <div className="card" style={{width: "18rem;"}}>
                <video src="https://codingyaar.com/wp-content/uploads/video-in-bootstrap-card.mp4" controls/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};

export default VideosComponent;