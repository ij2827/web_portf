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
        <Col md={6}>
            <a className="work-mock-link" href="https://github.com/ij2872/aspnet-FakeBank">
                <img src="./images/fakeBank.jpg"  width="100%" height="270"/>
            </a>
        </Col>
        <br/>
        <Col md={6}>
            <h3>Fake Valley Bank <small><a href="https://github.com/ij2872/aspnet-FakeBank">Link to Code</a></small></h3>
            <i>Back-End (.Net & SQL)</i>
            <p>Built on the .Net Framework, Fake Valley Bank app allows user to sign up and create an account. Users can deposit/withdraw in to their account. The balance of the customer is kept in a SQL server with a Customer Table and Transactions Table. Data is retrived/updated with the EntityFramework or and AJAX request to the /API/ of the server.</p>
        </Col>
    </Row>
    <div className="divider"></div>
    <Row>
        <Col md={6}>
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