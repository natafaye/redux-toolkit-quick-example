import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import businessReducer from '../features/businesses/businessSlice';
import reviewReducer from '../features/reviews/reviewSlice';

export const store = configureStore({
  reducer: {
    businesses: businessReducer,
    reviews: reviewReducer,
    counter: counterReducer,
  },
});
