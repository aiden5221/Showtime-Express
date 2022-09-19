import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './footer.styles.scss';

const Footer = () => {
    const GITHUB_URL = "https://github.com/aiden5221"
    const LINKEDIN_URL = "https://www.linkedin.com/in/aidenjolleyruhn/"

    const handleRedirect = (url) => {
        window.open(url, '_blank');
    }

    return(
        <div className='footer-container'>
            <div className='footer-icon'onClick={() => handleRedirect(GITHUB_URL)}>
                <GitHubIcon fontSize='large'/>
            </div>
            <div className='footer-icon' onClick={() => handleRedirect(LINKEDIN_URL)}>
                <LinkedInIcon fontSize='large'/>
            </div>
        </div>
    )
}


export default Footer;