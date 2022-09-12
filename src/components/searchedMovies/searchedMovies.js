import { Grid } from '@mui/material';
import MovieCard from '../movieCard/movieCard';
import './searchedMovies.styles.scss'
import { useSelector } from 'react-redux';
import { selectMovies } from '../../store/movies/movies.selector';
const SearchedMovies = () => {
    const { movies } = useSelector(selectMovies);
    console.log(movies)
    const HandleNominate = (e, movie) => {
        movies = movies.filter((val) => val.imdbID !== movie.imdbID)
    }

    return (
        <Grid 
            container 
            rowSpacing={1}
            columnSpacing={0.5}
            xs={6}
            sx={{ m: 1}}
           
            >
            {
                movies.length !== 0 ?
                    movies.map((movie, ind) => {
                        return (
                            
                            <Grid key={movie.imdbID} xs={2} justifyContent='space-evenly' item >
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

