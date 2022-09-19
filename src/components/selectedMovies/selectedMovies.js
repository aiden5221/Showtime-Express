import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Typography } from "../../../node_modules/@mui/material/index";
import { setNominatedMovie, setShowNominated } from "../../store/movies/movies.action";
import { selectMovies, selectNominatedMovies, selectShowNominated } from "../../store/movies/movies.selector";
import MovieCard from "../movieCard/movieCard";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const SelectedMovies = () => {
    const nominatedMovies = useSelector(selectNominatedMovies);
    const showNominated = useSelector(selectShowNominated);

    const dispatch = useDispatch();
    console.log(nominatedMovies)
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        minWidth: '50%',
        minHeight: '50%',
        bgcolor: 'rgba(21, 164, 203, 0.9)',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        borderRadius: '16px',
    };


    return(
        <Modal
        open={showNominated}
        onClose={() => dispatch(setShowNominated(false))}
        >
            <Grid sx={style}>
                <Typography align='center' variant='h4'>
                    Nominated Movies!
                </Typography>
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
            nominatedMovies.length != 0 ? 
                nominatedMovies.map((movie) => {
                    //var currentMovie = movies.movies.find((movie) => movie.imdbID == id);
                    return(<Grid on key={movie.imdbID} xs={6} md={3} lg ={2.4} item >
                        
                                <div onClick={() => { dispatch(setNominatedMovie(movie))}} >
                                    <MovieCard {...movie} />
                                </div>
                    </Grid>)
                })
                 : <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    
                }}><SentimentVeryDissatisfiedIcon sx={{m:2 }}/><span>No nominated movies..</span></div>
            }
            
            
        </Grid>
            </Grid>
        </Modal>
    )

}

export default SelectedMovies;