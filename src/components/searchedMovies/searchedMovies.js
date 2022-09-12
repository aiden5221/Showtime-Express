import { Grid } from '@mui/material';
import MovieCard from '../movieCard/movieCard';
import './searchedMovies.styles.scss'
import { useSelector } from 'react-redux';
import { selectMovies } from '../../store/movies/movies.selector';
const SearchedMovies = () => {
    const { movies } = useSelector(selectMovies);
    console.log(movies.Search)
    const HandleNominate = (e, movie) => {
        movies = movies.filter((val) => val.imdbID !== movie.imdbID)
    }

    return (
        <Grid 
            container 
            spacing={1}
            xs={8}
            
            sx={{ m: 1}}
            >
            {
                movies.hasOwnProperty('Search') ?
                    movies.Search.map((movie) => {
                        return (
                            <Grid key={movie.imdbID} spacing={3} item style={{ width: '10%'}} >
                                <div onClick={(e) => HandleNominate(e,movie)}>
                                    <MovieCard  {...movie} />
                                </div>
                            </Grid>
                        )
                    }) : null
            }
            
        </Grid>
        
    );
}

export default SearchedMovies;

