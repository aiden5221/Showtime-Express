import { MOVIES_ACTION_TYPES } from "./movies.types";
import { createAction } from "../../utils/reducer/reducer.utils";
import { fetchMovies } from "../../utils/omdb/movies.utils";

export const setMoviesSuccess = (movies) => 
    createAction(MOVIES_ACTION_TYPES.SET_MOVIES_SUCCESS, movies);

export const setMoviesStart = () =>
    createAction(MOVIES_ACTION_TYPES.SET_MOVIES_START);

export const setMoviesFailure = (error) =>
    createAction(MOVIES_ACTION_TYPES.SET_MOVIES_FAILURE, error);

export const setTotalPages = (pages) => 
    createAction(MOVIES_ACTION_TYPES.SET_MOVIES_FAILURE, pages);

export const setCurrentPage = (page) => 
    createAction(MOVIES_ACTION_TYPES.SET_CURRENT_PAGE, page);

export const setNominatedMovie = (imdbID) =>
    createAction(MOVIES_ACTION_TYPES.SET_NOMINATED_MOVIE, imdbID);

export const setShowNominated = (showNominated) =>
    createAction(MOVIES_ACTION_TYPES.SET_SHOW_NOMINATED, showNominated);

export const setMoviesAsync = (options) => async (dispatch) => {
    
    dispatch(setMoviesStart());
    try {
        const movies = await fetchMovies(options);
        console.log(movies)
        if(movies.Error) throw(movies.Error);
        dispatch(setCurrentPage(1));
        dispatch(setMoviesSuccess(movies));
    } catch (error) {
        dispatch(setMoviesFailure(error));
    }
    
}

