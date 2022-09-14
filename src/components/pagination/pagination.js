import { Box, Pagination } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentPage, selectTotalPages } from "../../store/movies/movies.selector";
import { setMoviesAsync } from "../../store/movies/movies.action";
import { selectOptions } from "../../store/options/options.selector";
import { setOptions } from "../../store/options/options.action";

const PaginationComponent = () => {
    const dispatch = useDispatch();
    var currentOptions = useSelector(selectOptions);
    const totalPages = useSelector(selectTotalPages);
    const currentPage = useSelector(selectCurrentPage)


    const changePage = () => {    
        currentOptions.page = currentPage
        console.log(currentPage)
        dispatch(setOptions(currentOptions))
        dispatch(setMoviesAsync(currentOptions))
    }

    return(
        <Box 
            justifyContent={'center'} 
            alignItems={'center'} 
            display={'flex'}
            sx={{
                m: "20px 0px"
            }}
            >
            <Pagination count={totalPages} showFirstButton showLastButton onChange={(e,page) => changePage()}/>
        </Box>
    )
}

export default PaginationComponent;