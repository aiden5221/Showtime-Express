import { MOVIES_ACTION_TYPES } from "./movies.types";
import { createAction } from "../../utils/reducer/reducer.utils";
import { fetchMovies } from "../../utils/omdb/movies.utils";
import { OPTIONS_TYPES } from "../options/options.types";
import { setOptions } from "../options/options.action";
export const setMoviesSuccess = (movies) => 
    createAction(MOVIES_ACTION_TYPES.SET_MOVIES_SUCCESS, movies);

export const setMoviesStart = () =>
    createAction(MOVIES_ACTION_TYPES.SET_MOVIES_START);

export const setMoviesFailure = (error) =>
    createAction(MOVIES_ACTION_TYPES.SET_MOVIES_FAILURE, error);

export const setTotalPages = (pages) => 
    createAction(MOVIES_ACTION_TYPES.SET_MOVIES_FAILURE, pages);

export const setMoviesAsync = (options) => async (dispatch) => {
    
    dispatch(setMoviesStart());
    try {
        const movies = await fetchMovies(options);
        console.log(movies)
        if(movies.Error) throw(movies.Error);
        
        dispatch(setMoviesSuccess(movies));
    } catch (error) {
        dispatch(setMoviesFailure(error));
    }
    
}