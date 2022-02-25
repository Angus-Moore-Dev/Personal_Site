import Footer from "../Navbar/Footer";
import angelaLogo from '../Media/angelaLogo.png';
import pagodaLogo from '../Media/pagodaLogo.png';
import midasLogo from '../Media/MidasIcon.png';
import { Link } from "react-router-dom";

export default function HireMe() {
    return (
        <div id='hireMe'>
            <div id='pageTop'>
                <h1>
                    Hire Me.
                </h1>
                <h2>
                    I am currently in the market for a developer job.
                </h2> 
            </div>
            <div id='pageBody'>
                <div id='workRelated'>
                    <p>
                        If you need a junior developer in Brisbane, Australia, who is skilled with Java, Spring, C#/.NET, Python, 
                        React.JS (including hooks), cybersecurity (both code analysis and implementations) or <b>anything that is involved in programming</b>, here I am.
                    </p>
                    <p>
                        Working on two startups and the freelance work I've done means that I've got a very solid grasp of all elements
                        involved in the software development lifecycle. Things like project management, git control, database integrity and querying,
                        systems that define the product a company is building, user authentication, logging, documentation, iterative design, I could go on...
                    </p>
                    <p>
                        Even though I am a junior and currently don't have any experience working in a big company, I will learn exceptionally fast how to 
                        blend in with a company's ethos and workflow. I really do take the extra initiative to ensure that I'm not stepping on anyone's toes and 
                        that I'm trying to produce the highest quality work that I can achieve.
                    </p>
                </div>
                <h3>
                    Previous Work
                </h3> 
                <div className='workContainer'>
                    <img src={pagodaLogo} alt='Pagoda Technologies PTY LTD'></img>
                    <section>
                        <h2>
                            Pagoda Technologies
                        </h2> 
                        <h5>
                            Role: Director & Co-Founder, Chief Technology Officer, Lead Developer
                        </h5>
                        <h5>
                            Length: January 2022 - Present
                        </h5>
                        <p>
                            I am the co-founder of a FinTech startup that specialises in cryptocurrencies and financial systems.
                            We are building systems and products that integrate and help normalise crypto into already existing 
                            ecosystems and making the new paradigm of decentralised finance easier to use in everyday life.
                        </p>
                        <p>
                            We are currently in the development stage of our first product. 
                        </p>
                        <a href="https://www.linkedin.com/company/pagoda-tech/" target="_blank" rel="noreferrer">LinkedIn</a>
                    </section>
                        
                </div>
                <div className='workContainer'>
                    <img src={midasLogo} alt='MidasBot'></img>
                    <section>
                        <h2>MidasBot Algorithmic Trading Bot</h2>
                        <h5>Role: Creator & Developer</h5>
                        <h5>Length: January 2021 - August 2021 (8 months)</h5>
                        <p>
                            I created multiple versions of an automated trading strategy that took in price data and analysed it using
                            numerous financial market indicators to execute trades. This worked solely using the Binance API, teaching me 
                            an absolute gargantuan amount about software development and other processes.
                        </p>
                        <p>
                            I built this initially in Python (twice), then built a full trading terminal, that is mentioned in the 
                            <Link to='/Projects'>
                             projects page.
                            </Link>
                        </p>
                    </section>
                </div>
                <div className='workContainer'>
                    <img src={angelaLogo} alt="Angela Women's Safety App" id='angela'></img>
                    <section>
                        <h2>
                            Angela Women's Safety App
                        </h2> 
                        <h5>
                            Role: Sole Software Developer
                        </h5>
                        <h5>
                            Length: September 2020 - December 2021 (1 year, 3 months)
                        </h5>
                        <p>I worked as the sole developer when the company was in its absolute infancy. I worked with Matt Kairl,
                            the company's founder to help build an MVP and shape features that would be contained in the finished product.
                            They are currently taking the design work I did, alongside features and concepts I introduced forward into building
                            a fully fledged product.
                        </p>
                        <a href="https://www.linkedin.com/company/angela-safety/" target="_blank" rel="noreferrer">LinkedIn</a>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
}