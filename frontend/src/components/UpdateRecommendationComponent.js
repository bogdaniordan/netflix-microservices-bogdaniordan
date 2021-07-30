import React, {useEffect, useState} from 'react';
import VideoService from "../service/VideoService";
import ReactStars from "react-rating-stars-component";
import {Button} from "react-bootstrap";
import {LocalDate} from "@js-joda/core";

const UpdateRecommendationComponent = (props) => {
    const id = props.match.params.id;
    const [recommendation, setRecommendation] = useState();
    const [isLoading, setLoading] = useState(true);
    const [rating, setRating] = useState();
    const [newComment, setNewComment] = useState();

    useEffect(() => {
        VideoService.getRecommendationById(id).then(res => {
            console.log(res.data)
            setRecommendation(res.data)
            setLoading(false);
        })

    },[])


    const getComment = (event) => {
        setNewComment(event.target.value);
        event.target.value = "";
    }

    const getRating = (newRating) => {
        setRating(newRating)
    }

    const updateRecommendation = () => {
        const updatedRecommendation = {
            rating: rating,
            comment: newComment,
            videoId: recommendation.videoId,
            date: LocalDate.now().toString()
        }

        VideoService.updateRecommendation(id, updatedRecommendation).then(r => {
            console.log(updatedRecommendation)
        })
    }

    if (!isLoading) {
        return (
            <div>
                <div className="row justify-content-md-center p-5">
                    <div className="col-md-auto">
                        <input type="text" className="comment" id="comment" aria-describedby="comment"
                               placeholder="Comment" value={recommendation.comment} style={{ minWidth: "400px" }} onBlur={getComment}/>
                    </div>
                    <div className="col col-sm-2">
                        <ReactStars
                            count={5}
                            onChange={getRating}
                            size={24}
                            activeColor="#ffd700"
                            value={recommendation.rating}
                        />
                    </div>
                    <div className="col col-sm-2">
                        <Button onClick={updateRecommendation}>Update</Button>
                    </div>
                </div>
            </div>
        );
    } else {
        return <div>
            <h3>Loading...</h3>
        </div>
    }

};

export default UpdateRecommendationComponent;