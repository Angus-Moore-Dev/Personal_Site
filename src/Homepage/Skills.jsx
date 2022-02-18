import java from '../Media/java.png';
import c from '../Media/C.png';
import cpp from '../Media/cpp.svg';
import NET from '../Media/NET.png';
import React from '../Media/react.png';
import Python from '../Media/python.png';
import Rust from '../Media/Rust.png';
import Node from '../Media/nodejs.svg';
import SQL from '../Media/mysql.svg';
import MongoDB from '../Media/mongodb.svg';

import Docker from '../Media/docker.png';
import AWS from '../Media/aws.png';
import Azure from '../Media/Azure.png';
import GitHub from '../Media/GitHub-logo.png';
export default function Skills() {
    return (
        <div id='skills'>
            <h2>Skills</h2>
            <h3>Programming Languages</h3>
            <div className='itemsBoxList'>
                <div className="itemBox">
                    <img src={java} alt="Java"></img>
                </div>
                <div className="itemBox">
                    <img src={Node} alt="Node.js"></img>
                    Node.js
                </div>
                <div className="itemBox">
                    <img src={NET} alt=".NET"></img>
                    ASP/WPF Included
                </div>
                <div className="itemBox">
                    <img src={React} alt="React.js"></img>
                    React.js
                </div>
                <div className="itemBox">
                    <img src={Python} alt="Python"></img>
                    Python
                </div>
            </div>
            <div className='itemsBoxList'>
                <div className="itemBox" id='RustLogo'>
                    <img src={Rust} alt="Rust"></img>
                    Rust
                </div>
                <div className="itemBox">
                    <img src={c} alt="C Programming Language"></img>
                </div>
                <div className="itemBox">
                    <img src={cpp} alt="C++"></img>
                </div>
                <div className="itemBox">
                    <img src={SQL} alt="SQL"></img>
                </div>
                <div className="itemBox">
                    <img src={MongoDB} alt="MongoDB"></img>
                    MongoDB/NoSQL
                </div>
            </div>
            <h3>Deployment Software</h3>
            <div className='itemsBoxList'>
                <div className='itemBox'>
                    <img src={Docker} alt="Docker"></img>
                </div>
                <div className='itemBox'>
                    <img src={AWS} alt="Amazon Web Services"></img>
                    Amazon Web Services
                </div>
                <div className='itemBox'>
                    <img src={Azure} alt="Microsoft Azure"></img>
                    Microsoft Azure
                </div>
                <div className='itemBox' id='GithubLogo'>
                    <img src={GitHub} alt="GitHub"></img>
                    GitHub
                </div>
            </div>
            <h3>Primary Focuses</h3>
            <div className='itemsBoxList'>
                <ul>
                    <li><h4>API Development</h4></li>
                    <li><h4>User Authentication</h4></li>
                    <li><h4>Cybersecurity</h4></li>
                    <li><h4>Client/Server Interactions</h4></li>
                    <li><h4>Database Management</h4></li>
                    <li><h4>Threading / Concurrency Handling</h4></li>
                </ul>
            </div>
        </div>
    );
}