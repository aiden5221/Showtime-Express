import { Box, LinearProgress } from "../../../node_modules/@mui/material/index";

const Placeholder = ({ isLoading }) => {
    return(
        <div>
            {
                isLoading ? <Box sx={{width: '100%'}}>
                    <LinearProgress />
                </Box>: null
            }
        </div>
        
    );
}

export default Placeholder;