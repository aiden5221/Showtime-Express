import { MOVIES_ACTION_TYPES } from "./movies.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setMovies = (movies) => 
    createAction(MOVIES_ACTION_TYPES.SET_MOVIES, movies);