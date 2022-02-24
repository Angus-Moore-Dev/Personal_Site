import Footer from "../Navbar/Footer";

export default function Projects() {
    return (
        <div id='Projects'>
            <div id='projectsPageTop'>
                <h1>Projects (background image needed)</h1>
            </div>
            <div id='projectsPageBody'>
                <div className='projectContainer'>
                    <h2>Trading Terminal</h2>
                    <h4>Tech Stack & Principles:</h4>
                    <ul>
                        <li>Java</li>
                        <li>WPF / XAML / .NET</li>
                        <li>Python</li>
                        <li>MongoDB</li>
                        <li>MidasBot code principles and logic</li>
                        <li>Multiple News APIs</li>
                        <li>Stanford Core NLP AI</li>
                        <li>Twitter & Reddit Dev APIs</li>
                        <li>Binance API (REST and Websocket)</li>
                        <li>OAuth2 User Verification</li>
                    </ul>
                </div>
                <div className='projectContainer'>
                    <h2>This Website</h2>
                    <h4>Tech Stack & Principles:</h4>
                    <ul>
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>Three.js (soon)</li>
                    </ul>
                </div>
                <div className='projectContainer'>
                    <h2>MidasBot Algorithmic Trading Bot</h2>
                    <h4>Tech Stack & Principles:</h4>
                    <ul>
                        <li>Python</li>
                        <li>Yaml (config and strategy files)</li>
                        <li>Binance API</li>
                        <li>Docker</li>
                        <li>Behaviour Driven Development</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
}