import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import ReviewList from '../reviews/ReviewList';

export default function BusinessPage() {
    let { businessId } = useParams();
    businessId = parseInt(businessId, 10);
    
    const isBusinessLoading = useSelector(state => state.businesses.loading);
    const isReviewsLoading = useSelector(state => state.reviews.loading);
    const hasErrors = useSelector(state => state.businesses.error || state.reviews.error);
    const business = useSelector(state => state.businesses.entities.find(b => b.id === businessId));
    const reviews = useSelector(state => state.reviews.entities.filter(review => review.businessId === businessId));

    if(hasErrors) {
        return <div/>
    }

    return (
        <div className="row">
            <div className="col bg-light pt-3">
                <Link to="/">Back</Link>
                <h2 className="mt-3">{(isBusinessLoading) ? "" : business.name}</h2>
                <p>{(isBusinessLoading) ? "Loading..." : business.description}</p>
            </div>
            <div className="col mt-5">
                { isReviewsLoading && <div className="text-muted">Loading...</div> }
                <ReviewList reviews={reviews} />
            </div>
        </div>
    )
}
