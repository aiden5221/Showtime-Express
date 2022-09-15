
export const fetchMovies = async (options, filteredMovies = []) => {
    
    var { title, type, year, page } = options;
    const MAX_RESULTS = 30;

    const reqUrl = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_APIKEY}&s=${title}&y=${year ? year : ''}&type=${type && type !== 'Any' ? type : ''}&r=json&page=${page}`;

    const { Search = {}, totalResults = 0, Error = "", Response  } =  await fetch(reqUrl)
                            .then((res) => res.json())
                            .then((data) => { return(data) })
                            .catch((err) => { return(err) });
    
    console.log(page)
    if(Error || Response == 'False') return Error;

    // remove movies with no image
    // filteredMovies.push(...Search.filter((movie) => movie.Poster !== 'N/A'));
    filteredMovies.push(...Search)

    if((Search.length == 10) && ((filteredMovies.length) < totalResults)) {
        options.page = options.page + 1 || 1
        return await fetchMovies(options, filteredMovies)
    }

    var newPage = options.page;

    return {
        movies: filteredMovies,
        totalPages: Math.ceil(totalResults/MAX_RESULTS),
    };
}
