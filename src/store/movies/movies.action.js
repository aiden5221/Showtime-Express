import { MOVIES_ACTION_TYPES } from "./movies.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setMoviesSuccess = (movies) => 
    createAction(MOVIES_ACTION_TYPES.SET_MOVIES_SUCCESS, movies);

export const setMoviesStart = () =>
    createAction(MOVIES_ACTION_TYPES.SET_MOVIES_START, true)

