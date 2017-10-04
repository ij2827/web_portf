import React from 'react';
import Gists from './Gists';
import {NavLink} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap'

// import img from './images/webMock.png';
const Work = () => (
    <div className="main-content">
    <h2>Work</h2>
    <div className="divider"></div>
    <br />
    <Row>
    <Col md={5} mdOffset={1}>
        <a className="work-mock-link" href="https://github.com/ij2872/MyHabbits">
            <img src="https://raw.githubusercontent.com/ij2872/MyHabbits/master/MyHabbits/gitImgs/myHabbitsHome.JPG"  width="100%" height="270"/>
        </a>
    </Col>
    <br/>
    <Col md={6}>
        <h3>MyHabbits <small><a href="https://github.com/ij2872/MyHabbits">Link to Code</a></small></h3>
        <i>Front-End (Razor | Bootstrap | AJAX | Javascript)</i>
        <br />
        <i>Back-End (ASP.NET MVC & SQL)</i>
        <p>Built using C# ASP.NET, My Habbits is a CRUD application that allows users to create, read, update, and delete tasks.</p>
        <p>Each task is saved onto a Microsoft Azure hosted MSSQL Database. Each task that a user completes will be saved to a completed_history table, with the use of Microsoft SQL Server 2016. An SQL query runs at the end of the day. This query saves all completed tasks to the completed_history table and resets data from the tasks table.
        </p>
    </Col>
    </Row>
    <div className="divider"></div>
    <Row>
        <Col md={5} mdOffset={1}>
            <a className="work-mock-link" href="https://github.com/ij2872/aspnet-FakeBank">
                <img src="https://raw.githubusercontent.com/ij2872/aspnet-FakeBank/master/imgs/img 1.JPG"  width="100%" height="270"/>
            </a>
        </Col>
        <br/>
        <Col md={6}>
            <h3>Fake Valley Bank <small><a href="https://github.com/ij2872/aspnet-FakeBank">Link to Code</a></small></h3>
            <i>Back-End (.Net & SQL)</i>
            <p>Built on the .Net Framework, Fake Valley Bank app allows user to sign up and create an account. Users can deposit/withdraw in to their account. The balance of the customer is kept in a SQL server with a Customer Table and Transactions Table. Data is retrived/updated with the EntityFramework or an AJAX request to the /API/ of the server.</p>
        </Col>
    </Row>
    <div className="divider"></div>
    <Row>
        <Col md={5} mdOffset={1}>
            <a className="work-mock-link" href="https://ij2872.github.io/Website_Mockup/">
                <img src="./images/webMock.png"  width="100%" height="270"/>
            </a>
        </Col>
        <br/>
        <Col md={6}>
            <h3>Website Mockup <small><a href="https://github.com/ij2872/Website_Mockup/tree/master/docs">Link to Code</a></small></h3>
            <i>Front-End</i>            
            <p>This is a basic landing page. HTML, SCSS, and slight JQuery were used along with the use of Bootstrap's Grid system. </p>
        </Col>
    </Row>
    <div className="divider"></div>
    <br />

    <Row>
        <Col lg={6}>
            <Row>
                <Col md={6}>
                    <a className="work-mock-link" href="https://ij2872.github.io/web_portf/#/calculator">
                        <img src="./images/calc.png"  width="250" height="300"/>
                    </a>
                </Col>
                <br/>
                <Col md={6}>
                    <h3>React Calculator <small><a href="https://github.com/ij2872/react_calc">Link to Code</a></small></h3>
                    <i>Components (React Js)</i>
                    <p>A simple web calculator built on React Js.</p>
                </Col>
            </Row>
        <div className="divider"></div>
    
        </Col>
        <Col lg={6}>
            <Row>
                <Col md={6}>
                    <a className="work-mock-link" href="https://github.com/ij2872/java-learn">
                        <img src="./images/code.jpg"  width="250" height="300"/>
                    </a>
                </Col>
                <br/>
                <Col md={6}>
                    <h3>Algorithms & Data Structures <small><a href="https://github.com/ij2872/java-learn">Link to Code</a></small></h3>
                    <i>CS Fundamentals (Java)</i>
                    <p>Leetcode, Firecode, and a collection of Algorithms & Data Structures created with Java</p>
                </Col>
            </Row>
        <div className="divider"></div>
    
        </Col>

    </Row>
    <br />
    </div>
);

export default Work;