/* eslint-disable no-loop-func */

export const fetchMovies = async (options) => {
    var { title, type, year } = options;
    const baseUrl = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_APIKEY}&s=${title}&y=${year ? year : ''}&type=${type && type !== 'Any' ? type : ''}&r=json&`;
    var filteredMovies;


    const getData = async (url) => await fetch(url)
                                        .then((res) => res.json())
                                        .then((data) => { return(data) })
                                        .catch((err) => { return(err) });
    
    

    var firstReq = await getData(baseUrl);
    console.log(firstReq)
    filteredMovies = firstReq.Search.filter((movie) => movie.Poster !== 'N/A');
   
    if(filteredMovies.Error || filteredMovies.Response == 'False') return filteredMovies.Error;
    
    for(var i = 1; i < (Math.ceil(firstReq.totalResults/10)); i++){
        var reqUrl = baseUrl + `page=${i}`
       
        var { Search } = await getData(reqUrl);
        
        Search.map((movie) => {
            filteredMovies.map(({imdbID}) => {
                if(movie.Poster !== 'N/A' && (movie.imdbID !== imdbID)){
                    filteredMovies = filteredMovies.concat(movie)               
                }
            })
        })
    }
    
    return filteredMovies;
}