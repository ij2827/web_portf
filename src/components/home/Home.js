import React from 'react';
import {NavLink} from 'react-router-dom';

const Home = () => (
    <div className="main-content">
        <h2>Home</h2>
        <div className="divider"></div>
        <p>Hello!</p>
        {/*<p>My name is Ivan Jaimes and I am a recent Graduate from Stephen F. Austin State University with a Bachelors of Music with emphases in Sound Recording Technology. During my time in University, I was involved as Recording Crew Manager for the School of Music and Sound Engineer for the School of Theatres Voice-Over class. <br /></p> */}
        
        <p>During my junior year of college I decided that I wanted to become a Software Developer and started to refocus my time learning Java, Python, and the Front-End stack. After learning how to develop the Front-End, I continued learning more backend frameworks such as NodeJs, Express, and MongoDB. After working on node for a while, I moved on to creating apps with the C# ASP.NET MVC stack with an SQL database. I am currently learning, creating, and working on Leetcode & Firecode problems!
        <br /><br /></p>
        <div className="work--link" > 
            <a href="https://github.com/ij2872"><img width="50" height="50" src="./images/github.png"/></a>
            <a href="https://www.linkedin.com/in/ivan-jaimes-8a700b116/"><img width="50" height="50" src="./images/linkedIn.png"/></a>
        </div>
        <div className="divider"></div>
        
        
        <br />   
        <br /> 
        <br />
        <div className="language-container">
            <h3>Languages</h3>
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
                <li>mySQL</li>                                     
                <li>Python</li>                               
            </ul>  
            
        </div>
        
    </div>
);

export default Home;