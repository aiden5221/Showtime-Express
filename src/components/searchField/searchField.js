import { Button, MenuItem, Select, TextField } from '@mui/material';
import { useState } from 'react';
import { Box } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import './searchField.styles.scss'
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from '../../store/movies/movies.action';
import { fetchMovies } from '../../utils/omdb/movies.utils';
import { LoadingButton } from '@mui/lab';
import { selectIsLoading } from '../../store/movies/movies.selector';
import { setMoviesStart, setMoviesSuccess } from '../../store/movies/movies.action';
const defaultFormFields = {
    title: '',
    type: '',
    year: 0,
}

const SearchField = () => {
    const CATEGORIES = ['Movie', 'Series', 'Episode', 'Game', 'Any']
    const [formFields, setFormFields] = useState(defaultFormFields)
    const dispatch = useDispatch();
    var isLoading = useSelector(selectIsLoading);

    const getMovies = async () => {
        dispatch(setMoviesStart())
        let searchedMovies = await fetchMovies(formFields)
        console.log(searchedMovies)
        dispatch(setMoviesSuccess(searchedMovies))
    }

    const onTextChange = async (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value});

        if(e.key == 'Enter' && formFields.title){
            // fetch movies and filter out movies with no image
            await getMovies();
        }
    }

    return(
        <div 
            onKeyDown={onTextChange}
            tabIndex='0' 
            className='searchfield-container'>
                <Box sx={{ display: 'flex', p: 1, borderRadius: 1, bgcolor: 'background.paper'}}>
                <TextField 
                    id="outlined-basic"  
                    className='searchfield' 
                    label='Search a movie' 
                    sx={{ width: '100%' }}
                    onChange={onTextChange}
                    name='title'
                />
                <Select
                    labelId='label-type'
                    sx={{ flexShrink: 0, minWidth:'20%' }}
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
                    sx={{ flexShrink: 1}}
                    onChange={onTextChange}
                    name='year'
                />
                <LoadingButton
                    endIcon={<SearchIcon/>}
                    loading={isLoading}
                    sx={{ flexShrink: 0.5 }}
                    onClick={getMovies}
                    loadingPosition="end"
                    variant="contained"
                >Search</LoadingButton>
              
                </Box>
        </div>
    );
}

export default SearchField;
