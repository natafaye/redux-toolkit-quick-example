import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const REVIEWS_ENDPOINT = "http://localhost:3001/reviews"

export const fetchReviews = createAsyncThunk("reviews/fetchAll", async () => {
  try {
      const response = await fetch(REVIEWS_ENDPOINT);
      if(!response.ok) {
          throw new Error(response.statusCode + ": " + response.statusText);
      }
      const data = await response.json();
      return data;
  }
  catch(error) {
      return Promise.reject(error.message);
  }
})

export const reviewSlice = createSlice({
  name: 'reviews',
  initialState: {
    entities: [],
    loading: false,
    error: null
  },
  reducers: {
    // we could have normal reducers here
  },
  extraReducers: {
      [fetchReviews.pending]: (state) => {
          state.loading = true;
          state.error = null;
      },
      [fetchReviews.rejected]: (state, action) => {
          state.loading = false;
          state.error = action.error.message;
      },
      [fetchReviews.fulfilled]: (state, action) => {
          state.loading = false;
          state.error = null;
          state.entities = action.payload;
      },
  }
});

//export const { } = reviewSlice.actions;

export default reviewSlice.reducer;
