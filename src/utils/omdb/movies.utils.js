export const fetchMovies = async (options) => {
    var { title, type, year, page = 1 } = options;
    const reqUrl = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_APIKEY}&s=${title}&y=${year ? year : ''}&type=${type && type !== 'Any' ? type : ''}&r=json&page=${page}`;
    
    const { Search = {}, totalResults = 0, Error = "", Response  } =  await fetch(reqUrl)
                            .then((res) => res.json())
                            .then((data) => { return(data) })
                            .catch((err) => { return(err) });



    if(Error || Response == 'False') return Error;
    
    const filteredMovies = Search.filter((movie) => movie.Poster !== 'N/A');
    
    return {
        movies: filteredMovies,
        totalPages: Math.ceil(totalResults/10),
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