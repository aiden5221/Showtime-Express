import { Typography, Card, CardActionArea, CardContent, CardMedia, Button  } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './movieCard.styles.scss'
import noImage from '../../assets/noimage-placeholder.svg'
import { useSelector } from 'react-redux';
import { selectNominatedMovies } from '../../store/movies/movies.selector';
import { useEffect } from 'react';

const MovieCard = (movie) => {
    const { Title, Year, Type, Poster, imdbID } = movie;
    const nominatedMovies = useSelector(selectNominatedMovies);


    return(
        <div >
            <Card>
                <CardActionArea >
                    <CardMedia 
                        component='img'
                        image={Poster == 'N/A' ? noImage : Poster}
                        alt={Title}
                        style={{ maxWidth:'100%',  maxHeight:'100%', height:'25vh' }}
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
                        nominatedMovies.includes(imdbID) ? <RemoveIcon color='error' sx={{float:'right', p: 1}} fontSize='large' />  :  <AddIcon color='primary' sx={{float:'right', p: 1}} fontSize='large'/>
                    }
  
                    
                </CardActionArea>
                
            </Card>
        </div>
    )

}

export default MovieCard;


 // <div className='moviecard-container'>
        //     <h3>{Title}</h3>
        //     <span>Type:{Type}</span>
        //     <img src={Poster}/>
        //     <span>Year:{Year}</span>
        //     <Button variant='outlined'>Nominate</Button>
            
        // </div>