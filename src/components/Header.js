import React from 'react';
import {NavLink} from 'react-router-dom';



const Header = () => (
    <header className="main-header"> 
        <span className="name">Title</span>
        <ul className="main-nav">
            <li className="main-nav--link"> <NavLink exact to="/">Home </NavLink></li>
            <li className="main-nav--link"> <NavLink to="/work">work</NavLink></li>
            <li className="main-nav--link"> Contact </li>
        </ul>
    </header>
);

export default Header;