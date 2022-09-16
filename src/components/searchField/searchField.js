import { MenuItem, Select, TextField } from '@mui/material';
import { useState } from 'react';
import { Box } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import './searchField.styles.scss'
import { useDispatch, useSelector } from 'react-redux';
import { LoadingButton } from '@mui/lab';
import { selectIsLoading, selectShowNominated } from '../../store/movies/movies.selector';
import { setMoviesAsync, setShowNominated } from '../../store/movies/movies.action';
import { Button, Typography } from '../../../node_modules/@mui/material/index';

const defaultFormFields = {
    title: '',
    type: '',
    year: 0,
    page: 1,
}

const SearchField = () => {
    const CATEGORIES = ['Movie', 'Series', 'Episode', 'Game', 'Any']
    const [formFields, setFormFields] = useState(defaultFormFields)
    const dispatch = useDispatch();
    var isLoading = useSelector(selectIsLoading);
    var showNominated = useSelector(selectShowNominated);

    // setup selector for getting page number from pagination and set it to page value
    const getMovies = () => {
        if(!formFields.title) return
        dispatch(setMoviesAsync(formFields))
    }


    const onTextChange = async (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value});

        if(e.key === 'Enter' && formFields.title){
            getMovies();
        }
    }
    const style = {
        'min-width':'40%'
    }

    return(
        <div 
            onKeyDown={onTextChange}
            tabIndex='0' 
            className='searchfield-container'
            style={style}
            >
                <Typography 
                    align='center'
                    variant='h3'
                    
                >
                    Movie Search
                </Typography>
                <Box sx={{ display: 'flex',  minWidth: '50%',  p: 1, borderRadius: 1, bgcolor: 'background.paper'}}>
                <TextField 
                    id="outlined-basic"  
                    className='searchfield' 
                    label='Search a movie' 
                    sx={{ flexShrink: 0,  minWidth: '5%', width:'60%', fontSize:'4vw',}}
                    onChange={onTextChange}
                    name='title'
                />
                <Select
                    labelId='label-type'
                    sx={{ flexShrink: 0.2, ml:0.5, minWidth:'11%', fontSize:'0.5vww'}}
                    autoWidth
                    defaultValue='none'
                    onChange={onTextChange}
                    name='type'
                >
                    <MenuItem value='none' disabled>Type</MenuItem>
                    {
                        CATEGORIES.map((category) => {
                            return <MenuItem key={category} value={category }>{category}</MenuItem>
                        }) 
                    }    
                </Select>
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    label='Year'
                    variant="filled"
                    size="medium"
                    sx={{ flexShrink: 1, ml:0.5,  minWidth: '5%'}}
                    onChange={onTextChange}
                    name='year'
                />
                <LoadingButton
                    endIcon={<SearchIcon/>}
                    loading={isLoading}
                    sx={{ flexShrink: 1.1, ml: 0.5, mr:1,  minWidth: '5%', fontSize:'0.8vw', justifyContent:'center' }}
                    onClick={getMovies}
                    loadingPosition="end"
                    variant="contained"
                >
                {
                    isLoading ? '' : 'Search'
                }
                </LoadingButton>
              
                </Box>
                <Button sx={{ flexShrink: 1, ml: 2,  minWidth: '5%'}} onClick={() => dispatch(setShowNominated(!showNominated))}>
                    Show Nominated Movies
                </Button>
        </div>
    );
}

export default SearchField;
