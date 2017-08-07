import React from 'react';
import {NavLink} from 'react-router-dom';



const Header = () => (
    <header className="main-header"> 
        <span className="name">Ivan Jaimes</span>
        <ul className="main-nav">
            <li className="main-nav--link"> <NavLink exact to="/">Home </NavLink></li>
            <li className="main-nav--link"> <NavLink to="/work">Work</NavLink></li>
            <li className="main-nav--link"> <NavLink to="/contact"> Contact</NavLink> </li>
        </ul>
    </header>
);

export default Header;