import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    moviesData: [],
    moviesPage: 0,
    totalMoviesPages: 0,
    totalMoviesQuantity: null,
    loading: false,
    error: null,
    currentMovie: null,
}

// редюсер - функции котрые меняет наш стор.
export const moviesSlice = createSlice( {
    name: "movies",
    initialState,
    reducers: {
        moviesRequested: (store) => {
            store.loading = true;
            
        },
        moviesRecived: (store, action) => {
            store.loading = false;
            store.moviesData = action.payload.results;
            store.totalMoviesPages = action.payload.total_pages;
            
        },
        moviesRequestFailed: (store, action) => {
            store.loading = false;
            store.error = action.payload.error;
        },
        currentMovieRequested: (store) => {
            store.loading = true;
        },
        currentMovieRecived: (store, action) => {
            store.loading = false;
            store.currentMovie = action.payload;
        },
        currentMovieRequestFailed: (store, action) => {
            store.loading = false;
            store.error = action.payload.error;
        }

    }
})

export const { moviesRequested, moviesRecived, moviesRequestFailed, currentMovieRequested, currentMovieRecived, currentMovieRequestFailed } = moviesSlice.actions;

export default moviesSlice.reducer
// это мы закинули в ентитис, назвали в  импорте ентитис его как угодно 
