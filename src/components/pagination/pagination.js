import { Box, Pagination } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { selectTotalPages } from "../../store/movies/movies.selector";
import { setCurrentPage } from "../../store/movies/movies.action";

const PaginationComponent = () => {
    const dispatch = useDispatch();
    const totalPages = useSelector(selectTotalPages);  
    
    const changePage = (page) => {
        dispatch(setCurrentPage(page))
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
            <Pagination count={totalPages} showFirstButton showLastButton onChange={(e,page) => changePage(page)}/>
        </Box>
    )
}

export default PaginationComponent;