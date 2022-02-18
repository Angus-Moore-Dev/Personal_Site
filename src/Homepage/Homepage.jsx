import Stopwatch from 'statman-stopwatch';
import '../App.css';
import DeveloperLinks from '../ReusableComponents/DeveloperLinks';
import Skills from './Skills';
/**
 * React Component for the Homepage.
 * @returns Homepage.
 */
export default function Homepage() {    
    // This just uses a JSON object to write containers for other data.
    let timer = new Stopwatch();
    timer.time()
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
                <h3>I am a Brisbane based developer who is interested in finance, economics, logistics and 
                    software development within these industries.
                </h3>
            </div>
            <Skills />
        </div>
    );
    
}
