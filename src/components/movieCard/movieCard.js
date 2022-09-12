import { Typography, Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import './movieCard.styles.scss'
const MovieCard = (movie) => {
    const { Title, Year, Type, Poster } = movie;
    
    return(
        <div >
            <Card>
                <CardActionArea  >
                    <CardMedia 
                        component='img'
                        image={Poster}
                        alt={Title}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="overline" noWrap component="div">
                        {Title}
                    </Typography>
                    <Typography gutterBottom variant="body2" color='text.secondary'>
                        Year:{Year}<br/>
                        Type:{Type}
                    </Typography>
                    </CardContent>
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