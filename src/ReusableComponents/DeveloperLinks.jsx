import gitLogo from '../Media/GitHub_Logo_White.png';
import linkedIn from '../Media/LinkedIn.png';
import { Link } from 'react-router-dom';
/**
 * Used for the three links (GitHub, LinkedIn, email) across the page.
 */
export default function DeveloperLinks() {
    return (
        <div id='developerLinks'>
            <button type="button" class="btn btn-primary btn-lg" onClick={() => {
                window.open('https://github.com/Angus-Moore-Dev');
            }}><img src={gitLogo} alt="GitHub"></img></button>
            <button type="button" class="btn btn-primary btn-lg" onClick={(() => {
                window.open('https://www.linkedin.com/in/angus-moore-103b0a221/');
            })}><img src={linkedIn} alt="LinkedIn"></img></button>
            <Link to="/HireMe">
            <button type="button" class="btn btn-warning btn-lg"><h4>Hire me!</h4></button>
            </Link>
        </div>
    )
}