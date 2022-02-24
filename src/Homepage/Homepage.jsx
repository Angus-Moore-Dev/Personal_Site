import { Link } from 'react-router-dom';
import '../App.css';
import Footer from '../Navbar/Footer';
import DeveloperLinks from '../ReusableComponents/DeveloperLinks';
import Skills from './Skills';
/**
 * React Component for the Homepage.
 * @returns Homepage.
 */
export default function Homepage() {    
    return (
        <div id="homeBody" className='HomepageItems'>
            <div id='titleCard'>
                <h1>Angus Moore</h1>
                <h2>Systems Architect</h2>
                <h2>Programmer</h2>
                <h2>Lifter</h2> 
            <DeveloperLinks />
            </div>
            <div id='aboutMe'>
                <h3>
                    I am a Brisbane based developer who is interested in finance, economics, logistics and 
                    software development within these industries.
                </h3>
            </div>
            <Skills />
            <Link to="/Projects" id='projectLinkID'>
                <div type='button' className='btn btn-primary btn-lg' id='projectLink'>
                    <h1>
                        Check out my projects
                    </h1>
                </div>
            </Link>
            <h1 id='updateText'>I will be constantly adding more and more to this over time (testing more web features).</h1>
            <Footer />
        </div>
    );
    
}
