import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import BusinessList from './features/businesses/BusinessList'

export default function HomePage() {
    const navigate = useNavigate();

    const businesses = useSelector(state => state.businesses.entities)
    const isLoading = useSelector(state => state.businesses.loading)

    return (
        <>
            <div className="row mt-3">
                <div className="col">
                    <p>There are {businesses.length} businesses in Redux</p>
                </div>
                <div className="col text-end">
                    <button className="btn btn-success" onClick={() => navigate("/business/new")}>New Business</button>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    { isLoading && <div className="text-muted">Loading...</div> }
                    <BusinessList businesses={businesses}/>
                </div>
            </div>
        </>
    )
}
