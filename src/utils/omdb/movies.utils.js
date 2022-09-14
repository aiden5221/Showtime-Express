
export const fetchMovies = async (options, filteredMovies = []) => {
    
    var { title, type, year, page } = options;
    const maxResults = 30
    
    const reqUrl = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_APIKEY}&s=${title}&y=${year ? year : ''}&type=${type && type !== 'Any' ? type : ''}&r=json&page=${page}`;
    // get rid of page param and make it so the pagination is oriented around # of movies not page number
    const { Search = {}, totalResults = 0, Error = "", Response  } =  await fetch(reqUrl)
                            .then((res) => res.json())
                            .then((data) => { return(data) })
                            .catch((err) => { return(err) });
    
    if(Error || Response == 'False') return Error;
    console.log(Search.length)
    //filteredMovies.push(...Search.filter((movie) => movie.Poster !== 'N/A'));
    filteredMovies.push(...Search)
    console.log(filteredMovies.length)
    // if filteredMovies != 30  && Search.length == 10
    if((Search.length == 10) && ((filteredMovies.length) < maxResults)) {
        options.page = options.page + 1 || 1
        return await fetchMovies(options, filteredMovies)
    }

    var newPage = options.page;
    console.log('finished')
    return {
        movies: filteredMovies,
        totalPages: Math.ceil(totalResults/maxResults),
        currentPage: newPage
    };
}

 // for(var i = 2; i < (Math.ceil(firstReq.totalResults/10)); i++){
    //     var reqUrl = baseUrl + `page=${i}`
       
    //     var { Search } = await getData(reqUrl);
        
    //     Search.map((movie) => {
    //         if(movie.Poster !== 'N/A'){
    //             filteredMovies = filteredMovies.concat(movie)               
    //         }
    //     })
    // }