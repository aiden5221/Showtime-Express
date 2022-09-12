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
                        style={{width: 'auto', height: '25vh'}}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="body2" noWrap component="div">
                        {Title}
                    </Typography>
                    <Typography gutterBottom variant="caption" noWrap color='text.secondary'>
                        {Year}<br/>
                        {Type}
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