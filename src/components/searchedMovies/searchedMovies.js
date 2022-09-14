import { Grid } from '@mui/material';
import MovieCard from '../movieCard/movieCard';
import './searchedMovies.styles.scss'
import { useSelector } from 'react-redux';
import { selectMovies } from '../../store/movies/movies.selector';
const SearchedMovies = () => {
    const { movies = [] } = useSelector(selectMovies);
    console.log(movies)
    const HandleNominate = (e, movie) => {
        movies = movies.filter((val) => val.imdbID !== movie.imdbID)
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
                movies.length !== 0 ?
                    movies.map((movie) => {
                        
                        return (
                            
                            <Grid key={movie.imdbID} xs={6} md={3} lg ={1.2} item >
                                <div onClick={(e) => HandleNominate(e,movie)}>
                                    <MovieCard {...movie} />
                                </div>
                            </Grid>
                        )
                    }) : null
            }
            
        </Grid>
        
    );
}

export default SearchedMovies;

