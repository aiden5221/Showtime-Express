import { combineReducers } from "redux";
import { moviesReducer } from "./movies/movies.reducer";
import { optionsReducer } from "./options/options.reducer";
export const rootReducer = combineReducers({
    movies: moviesReducer,
    options: optionsReducer,
});