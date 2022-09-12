import { MenuItem, Select, TextField } from '@mui/material';
import { useState } from 'react';
import { Box } from '@mui/system';
import './searchField.styles.scss'
import { useDispatch } from 'react-redux';
import { setMovies } from '../../store/movies/movies.action';
import { fetchMovies } from '../../utils/omdb/movies.utils';

const defaultFormFields = {
    title: '',
    type: '',
    year: 0,
}

const SearchField = () => {
    const CATEGORIES = ['Movie', 'Series', 'Episode', 'Game', 'Any']
    const [formFields, setFormFields] = useState(defaultFormFields)
    const dispatch = useDispatch();


    const onTextChange = async (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value});
        if(e.key == 'Enter' && formFields.title){
            console.log('fetching')
            let searchedMovies = await fetchMovies(formFields)
            dispatch(setMovies(searchedMovies))
        }
        console.log(`Form fields: ${formFields.movie}`)
        console.log(`Target: ${name}, value: ${value}`)
        
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
                    sx={{ flexShrink: 2 }}
                    onChange={onTextChange}
                    name='year'
                />
                </Box>
        </div>
    );
}

export default SearchField;
