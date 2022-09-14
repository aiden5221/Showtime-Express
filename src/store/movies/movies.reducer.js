import { MOVIES_ACTION_TYPES } from "./movies.types";

const INITIAL_STATE = {
    movies: [],
    totalPages: 0,
    isLoading: false,
    error: null,
}

export const moviesReducer = (state = INITIAL_STATE, action ) => {
    const { type, payload } = action;

    switch(type) {
        case MOVIES_ACTION_TYPES.SET_MOVIES_START:
            return { ...state, isLoading: true, movies: [] };
        case MOVIES_ACTION_TYPES.SET_MOVIES_SUCCESS:
            return { ...state, movies: payload.movies, totalPages: payload.totalPages, currentPage: payload.currentPage, isLoading: false };
        case MOVIES_ACTION_TYPES.SET_MOVIES_FAILURE:
            return { ...state, error: payload.error, isLoading: false };
        default:
            return state;
    }
};