import React from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import BusinessPage from './features/businesses/BusinessPage';
import { useSelector } from 'react-redux';
import BusinessFormPage from './features/businesses/BusinessFormPage';

function App() {
  const errorMessage = useSelector(state => state.businesses.error || state.reviews.error)

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">Gulp</Link>
        </div>
      </nav>
      <div className="container">
        {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/business/new" element={<BusinessFormPage />} />
          <Route path="/business/:businessId" element={<BusinessPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
