import React from 'react'

export default function ReviewCard({ review }) {
  return (
    <div className="card m-3">
        <div className="card-body">
            <h4 className="card-title">{ review.rating } stars</h4>
            <p className="card-text">{ review.text }</p>
        </div>
    </div>
  )
}
