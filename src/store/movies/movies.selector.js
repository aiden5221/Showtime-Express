export const selectMovies = (state) => state.movies;
export const selectIsLoading = (state) => state.movies.isLoading;
export const selectTotalPages = (state) => state.movies.totalPages;
export const selectCurrentPage = (state) => state.movies.currentPage;
export const selectNominatedMovies = (state) => state.movies.nominatedMovies;
export const selectShowNominated  = (state) => state.movies.showNominated;