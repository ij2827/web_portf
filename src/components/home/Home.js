import React from 'react';
import {NavLink} from 'react-router-dom';

const Home = () => (
    <div className="main-content">
        <h2>Home</h2>
        <div className="divider"></div>
        <p>Hello!</p>
        {/*<p>My name is Ivan Jaimes and I am a recent Graduate from Stephen F. Austin State University with a Bachelors of Music with emphases in Sound Recording Technology. During my time in University, I was involved as Recording Crew Manager for the School of Music and Sound Engineer for the School of Theatres Voice-Over class. <br /></p> */}
        
        <p>My name is Ivan, I am a self-taught developer focusing on the Full-Stack of Development. I have always had a passion for programming and am currently available for a Full Time position. 
        <br /><br /></p>
        <div className="work--link text-center"> 
            <a href="https://github.com/ij2872"><img width="50" height="50" src="./images/github.png"/></a>
            <a href="https://www.linkedin.com/in/ivan-jaimes-8a700b116/"><img width="50" height="50" src="./images/linkedIn.png"/></a>
        </div>
        <div className="divider"></div>
        
        
        <br />   
        <br /> 
        <br />
        <h3>Languages</h3>
        <div className="language-container">
            
            <ul className="language-list">
                <li>Html5</li>
                <li>Css3</li>
                <li>Javascript</li>
                <li>ES6</li>                
                <li>Sass</li>                
                <li>Bootstrap</li>
                <li>JQuery</li>    
            </ul>
            <ul className="language-list">
                <li>Node Js</li>
                <li>Express</li>
                <li>React</li>
                <li>React-Router</li>
                <li>MongodDB</li> 
                <li>Npm & Yarn</li>    
                   
            </ul> 
            <ul className="language-list">
                <li>Java</li>
                <li>C#</li>
                <li>ASP.NET</li>                                        
                <li>MSSQL</li>                                     
                <li>Python</li>                               
            </ul>  
            
        </div>
        
    </div>
);

export default Home;