

import { moviesRequested, moviesRecived, moviesRequestFailed } from "./reducers"

const API_KEY = 'bda7fa433b3a835662d4cd7b68962b54';
const apiURL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=`;

export const requestMoviesList = (page = 1) => async (dispatch) => {
    try {
        dispatch(moviesRequested())
        const moviesList = await fetch(apiURL+page).then(res => res.json());
        console.log(moviesList);
        return dispatch(moviesRecived(moviesList));
        

        
    } catch (error) {
        return dispatch(moviesRequestFailed(error.message))
    }
}
// moviesList это
// { 
//     results: [],
//     pages: 11,
//     totalitems: 4545545,
//     currentPage: 1,
// }
// moviesList.results = []
