import { MOVIES_ACTION_TYPES } from "./movies.types";

const INITIAL_STATE = {
    movies: [],
    totalPages: 0,
    isLoading: false,
    error: null,
    currentPage: 1,
    nominatedMovies: [],
    showNominated: false,
}

export const moviesReducer = (state = INITIAL_STATE, action ) => {
    const { type, payload } = action;

    switch(type) {
        case MOVIES_ACTION_TYPES.SET_MOVIES_START:
            return { ...state, isLoading: true, movies: [] };
        case MOVIES_ACTION_TYPES.SET_MOVIES_SUCCESS:
            return { ...state, movies: payload.movies, totalPages: payload.totalPages, isLoading: false };
        case MOVIES_ACTION_TYPES.SET_MOVIES_FAILURE:
            return { ...state, error: payload.error, isLoading: false };
        case MOVIES_ACTION_TYPES.SET_CURRENT_PAGE:
            return { ...state, currentPage: payload };
        case MOVIES_ACTION_TYPES.SET_NOMINATED_MOVIE:
            return { ...state, nominatedMovies: state.nominatedMovies.includes(payload) ? state.nominatedMovies.filter(movie => movie !== payload) : state.nominatedMovies.concat(payload)};
        case MOVIES_ACTION_TYPES.SET_SHOW_NOMINATED:
            return { ...state, showNominated: payload };
        default:
            return state;
    }
};