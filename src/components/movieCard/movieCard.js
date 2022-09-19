import { Typography, Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import noImage from '../../assets/noimage-placeholder.svg'
import { useSelector, shallowEqual } from 'react-redux';
import { selectNominatedMovies } from '../../store/movies/movies.selector';
import { useEffect } from 'react';

const MovieCard = (movie) => {
    const { Title, Year, Type, Poster, imdbID } = movie;
    const nominatedMovies = useSelector(selectNominatedMovies);
    var nominatedMoviesArray = Array.from(nominatedMovies)
    useEffect(() => {
        console.log('movies changed in moviecard')
    }, [nominatedMovies])

    return(
        <div >
            <Card>
                <CardActionArea >
                    <CardMedia 
                        component='img'
                        image={Poster == 'N/A' ? noImage : Poster}
                        alt={Title}
                        style={{ maxHeight:'100%', maxWidth:'100%', height: '25vh', width:'auto', minWidth:'100%' }}
                    />
                    <CardContent >
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {Type}
                    </Typography>
                    <Typography gutterBottom variant="body2" noWrap component="div">
                        {Title}
                    </Typography>
                    <Typography gutterBottom variant="caption" noWrap color='text.secondary'>
                        {Year}<br/>
                        
                    </Typography>

                    </CardContent>                    
                   
                    {
                        nominatedMoviesArray.length !== 0 && nominatedMoviesArray.findIndex((mov) => mov.imdbID===movie.imdbID) !== -1 ? <RemoveIcon color='error' sx={{float:'right', p: 1}} fontSize='large' />  :  <AddIcon color='primary' sx={{float:'right', p: 1}} fontSize='large'/>
                    }

                </CardActionArea>
            </Card>
        </div>
    )

}

export default MovieCard;