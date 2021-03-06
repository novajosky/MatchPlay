import React from 'react'
import ReviewCard from '../../components/ReviewCard/ReviewCard'

export default function DisplayReviews({ reviews, handleDelete }) {
  const reviewCards = reviews.map((r, index) => (
    <ReviewCard key={index} review={r} handleDelete={handleDelete} />
  ))

  return (
    <div>
       {reviewCards}
    </div>
  )
}