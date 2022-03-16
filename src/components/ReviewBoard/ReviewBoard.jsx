import React from 'react';
import ReviewForm from '../ReviewForm/ReviewForm';
import { useState, useEffect } from 'react';
import * as reviewsAPI from '../../utilities/reviews-api';
import DisplayReviews from '../DisplayReviews/DisplayReviews';

export default function ReviewBoard({ golfer }) {
    const [reviews, setReviews] = useState([]);

    useEffect(function () {
        async function getReviews() {
            const reviews = await reviewsAPI.getForGolfer(golfer._id);
            setReviews(reviews);
        }
        getReviews();
    }, [golfer._id]);

    async function handleAddReview(reviewData) {
        const review = await reviewsAPI.add(reviewData, golfer._id);
        setReviews([...reviews, review]);
    }

    async function handleDelete(id) {
        const deletedReview = await reviewsAPI.deleteReview(id)
        const updatedReviews = reviews.filter(review => review._id !== deletedReview._id)
        setReviews(updatedReviews)
    }
    return (
        <div>
            <ReviewForm handleAddReview={handleAddReview}/>
            <DisplayReviews handleDelete={handleDelete} reviews={reviews}/>
        </div>
    )
}