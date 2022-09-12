export const fetchMovies = async (options) => {
    const { title, type, year } = options;
    const baseUrl = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_APIKEY}&`
    const requestUrl = baseUrl + `s=${title}&y=${year ? year : ''}&type=${type && type !== 'Any' ? type : ''}&r=json`
    console.log(options)
    let { Search } = await fetch(requestUrl)
                            .then((res) => res.json())
                            .then((data) => { return(data) })
    Search = Search.filter((movie) =>movie.Poster !== 'N/A')
    console.log(Search)
    return Search;
}