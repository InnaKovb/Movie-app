import { combineReducers } from 'redux'
import  moviesReducer  from './movies/reducers' // импортнули из редюсера moviesSlice.reducer

// комбайн редюсер комбинирует все редюсеры в один главный редюсер.

export default combineReducers({ 
    moviesStore: moviesReducer,
    // cardsStore: cardsReducer,
})

// под капотом
// // {
//     movies: {
//         data: [...],
//         loading: ....
//     }
//     cards: {
//         data: [...],
//         loading: ....
//     }
// }