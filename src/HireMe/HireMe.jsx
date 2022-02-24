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
                    <img src={angelaLogo} id='angela'></img>
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