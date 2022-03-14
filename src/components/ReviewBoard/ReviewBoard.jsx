import React from 'react';
import ReviewForm from '../ReviewForm/ReviewForm';
import { useState, useEffect } from 'react';
import * as reviewsAPI from '../../utilities/reviews-api';
import DisplayReviews from '../DisplayReviews/DisplayReviews';

export default function ReviewCard() {
    const [reviews, setReviews] = useState([]);

    useEffect(function() {
        async function getReviews() {
            const reviews = await reviewsAPI.getAll();
            setReviews(reviews);
        }
        getReviews();
    }, []);
    async function handleAddReview(reviewData) {
        const review = await reviewsAPI.add(reviewData);
        console.log(review)
        setReviews([...reviews, review]);
    }

    async function handleDelete(id) {
        const deletedReview = await reviewsAPI.deleteReview(id)
        const updatedReviews = reviews.filter(review => review._id !== deletedReview._id)
        setReviews (updatedReviews)
    }
    <div>
        <ReviewForm />
        <DisplayReviews />
    </div>
}