import { Grid } from "../../../node_modules/@mui/material/index";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
    const GITHUB_URL = "https://github.com/aiden5221"
    const LINKEDIN_URL = "https://www.linkedin.com/in/aidenjolleyruhn/"

    const handleRedirect = (url) => {
        window.open(url, '_blank');
    }

    return(
        <Grid container sx={{ml: 2}} >
            <Grid item xs={2}>
                <div onClick={() => handleRedirect(GITHUB_URL)}>
                    <GitHubIcon fontSize='large'/>
                </div>
            </Grid>
            <Grid item xs={10}>
                <div sx={{onmouseover:{backgroundColor:'blue'}}} onClick={() => handleRedirect(GITHUB_URL)}>
                    <LinkedInIcon fontSize='large'/>
                </div>
            </Grid>
           
        </Grid>
    )
}


export default Footer;