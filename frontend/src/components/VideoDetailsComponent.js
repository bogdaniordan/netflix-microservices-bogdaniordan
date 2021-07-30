import React, {useEffect, useState} from 'react';
import VideoService from "../service/VideoService";
import {ListGroup} from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import {Button} from "react-bootstrap";
import axios from "axios";
import {LocalDate} from "@js-joda/core";


const VideoDetailsComponent = (props) => {
    const id = props.match.params.id;
    const [isLoading, setLoading] = useState(true);
    const [video, setVideo] = useState();
    const [recommendations, setRecommendations] = useState([]);
    const [rating, setRating] = useState();
    const [newComment, setNewComment] = useState();

    useEffect(() => {
        VideoService.getVideoWithRecommendations(id).then(r => {
            // console.log(r.data)
            setVideo(r.data.video);
            // console.log(r.data.videoRecommendations)
            setRecommendations(r.data.videoRecommendations)
            setLoading(false);
        })
    }, [id])

    const getComment = (event) => {
        setNewComment(event.target.value);
        event.target.value = "";
    }

    const getRating = (newRating) => {
        setRating(newRating)
    }

    const addRecommendation = () => {
        const localDate = LocalDate.now();
        const recommendation = {
            rating: rating,
            comment: newComment,
            videoId: id,
            date: LocalDate.now().toString()
        }
        console.log(recommendation)
        VideoService.addRecommendation(id, recommendation).then(response => {
            console.log(response.data)
        })
    }

    if (!isLoading) {
        return (
            <div>
                <div className="card" style={{width: "100%;"}}>
                    <iframe
                        width="1100"
                        height="520"
                        src={"https://www.youtube.com/embed/" + video.url}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                </div>
                <ListGroup className={'m-5'}>
                    <h4>Recommendations</h4>
                    {recommendations.map((rec, i) => (
                        <ListGroup.Item key={i} variant="info" className={"d-inline mb-2"}>
                            <ListGroup horizontal className={'justify-content-center'}>
                                <ListGroup.Item variant={"info"}>{rec.comment}</ListGroup.Item>
                                <ListGroup.Item variant={"info"}>{rec.date}</ListGroup.Item>
                                <ListGroup.Item variant={"info"} className={''}>
                                    <ReactStars
                                        value={rec.rating}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                </ListGroup.Item>
                            </ListGroup>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
                <div className="row justify-content-md-center p-5">
                    <div className="col-md-auto">
                        <input type="text" className="comment" id="comment" aria-describedby="comment"
                               placeholder="Comment" style={{ minWidth: "400px" }} onBlur={getComment}/>
                    </div>
                    <div className="col col-sm-2">
                        <ReactStars
                            count={5}
                            onChange={getRating}
                            size={24}
                            activeColor="#ffd700"
                        />
                    </div>
                    <div className="col col-sm-2">
                        <Button onClick={addRecommendation}>Add</Button>
                    </div>
                </div>
            </div>
        );
    } else {
        return (<div><h3>Loading...</h3></div>)
    }

};

export default VideoDetailsComponent;