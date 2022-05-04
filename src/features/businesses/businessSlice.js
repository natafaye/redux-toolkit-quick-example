import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const BUSINESSES_ENDPOINT = "http://localhost:3001/businesses"

export const fetchBusinesses = createAsyncThunk("business/fetchAll", async () => {
    try {
        const response = await fetch(BUSINESSES_ENDPOINT);
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

export const createBusiness = createAsyncThunk("business/create", async (newBusiness) => {
    try {
        const response = await fetch(BUSINESSES_ENDPOINT, { 
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBusiness)
        });
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

export const businessSlice = createSlice({
    name: 'businesses',
    initialState: {
        entities: [],
        loading: false,
        error: null
    },
    reducers: {
        // we could have normal reducers here
    },
    extraReducers: {
        [fetchBusinesses.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [fetchBusinesses.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [fetchBusinesses.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = null;
            state.entities = action.payload;
        },
        [createBusiness.rejected]: (state, action) => {
            state.error = action.error.message;
        },
        [createBusiness.fulfilled]: (state, action) => {
            state.error = null;
            state.entities.push(action.payload);
        },
    }
});

//export const { } = businessSlice.actions;

export default businessSlice.reducer;
