import { MOVIES_ACTION_TYPES } from "./movies.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setMoviesSuccess = (movies) => 
    createAction(MOVIES_ACTION_TYPES.SET_MOVIES_SUCCESS, movies);

export const setMoviesStart = () =>
    createAction(MOVIES_ACTION_TYPES.SET_MOVIES_START, true)

export const setMoviesFailure = (Error) =>
    createAction(MOVIES_ACTION_TYPES.SET_MOVIES_FAILURE, Error)

export const setTotalPages = (totalPages) =>
    createAction(MOVIES_ACTION_TYPES.SET_TOTAL_PAGES, totalPages)

export const setCurrentPage = (page) =>
    createAction(MOVIES_ACTION_TYPES.SET_CURRENT_PAGE, page)