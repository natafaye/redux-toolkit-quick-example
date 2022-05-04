import React from 'react'
import ReviewCard from './ReviewCard'

export default function ReviewList({ reviews }) {
  return (
    <div>
        { reviews.map(review => <ReviewCard review={review} key={review.id} />)}
    </div>
  )
}
