import { Box, Pagination } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { selectCurrentPage, selectTotalPages } from "../../store/movies/movies.selector";
import { setCurrentPage } from "../../store/movies/movies.action";
import { useEffect } from "react";
const PaginationComponent = () => {
    const dispatch = useDispatch();
    const totalPages = useSelector(selectTotalPages);
    const currentPage = useSelector(selectCurrentPage);
    const [page, setPage ] = useState(1);

    useEffect(() => {
        setPage(currentPage);
    }, [currentPage])

    console.log('current page: ' + page)
    const changePage = (page) => {  
        console.log('inside change page:' + page)  
        setPage(page)
        dispatch(setCurrentPage(page))
        console.log(page)
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
            <Pagination page={page} count={totalPages} showFirstButton showLastButton onChange={(e,page) => changePage(page)}/>
        </Box>
    )
}

export default PaginationComponent;