import { Grid } from '@mui/material';
import MovieCard from '../movieCard/movieCard';
import './searchedMovies.styles.scss'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentPage, selectMovies, selectNominatedMovies } from '../../store/movies/movies.selector';
import { useEffect } from 'react';
import { setNominatedMovie } from '../../store/movies/movies.action';

const SearchedMovies = () => {
    var { movies = [] } = useSelector(selectMovies);
    const currentPage = useSelector(selectCurrentPage);
    const [currentMovies, setCurrentMovies] = useState([]);
    const dispatch = useDispatch();
    const nominatedMovies = useSelector(selectNominatedMovies);
    const MAX_MOVIES = 30;
    const MAX_NOMINATED_MOVIES = 5;

    console.log(movies)
    console.log('CURRENT PAGE SEARCHEDMOVIES: ' + currentPage)

    useEffect(() => {
        selectMoviesGrid();
    }, [currentPage, movies])

    const selectMoviesGrid = () => {

        console.log('inside select')
        var startIndex = currentPage != 0 ? (currentPage - 1) * MAX_MOVIES : 0
        var endIndex = currentPage != 0 ? currentPage * MAX_MOVIES : 0
        setCurrentMovies(movies.slice(startIndex, endIndex));
    }
    console.log(movies)
    const nominateMovie = (movie) => {
        // to limit max movies
        if(nominatedMovies.length == MAX_NOMINATED_MOVIES && !nominatedMovies.includes(movie.imdbID)){
            alert('Max movies!')
            return
        }
        dispatch(setNominatedMovie(movie.imdbID));
    }
    return (
        <Grid 
            container 
            direction='row'
            alignItems='center'
            justifyContent='center'
            sx={{ p:5}}
            rowSpacing={2}
            columnSpacing={2}
            >

            {
            currentMovies.length != 0 ? 
                currentMovies.map((movie) => {
                    
                    return(<Grid on  key={movie.imdbID} xs={6} md={3} lg ={1.2} item >
                                <div onClick={() => { nominateMovie(movie) }} >
                                    <MovieCard {...movie} />
                                </div>
                    </Grid>)
                })
                 : null
            }
            
            
        </Grid>
        
    );
}

export default SearchedMovies;

