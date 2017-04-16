import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <ul className="navbar">
        <li className="navbar__link"><Link to="/">Home</Link></li>
        <li className="navbar__link"><Link to="/history">History</Link></li>
        <li className="navbar__link"><Link to="/history/april">April</Link></li>
        <li className="navbar__link"><Link to="/stopwatch">Stopwatch</Link></li>
        <li className="navbar__link"><Link to="/signup">Signup</Link></li>
        <li className="navbar__link"><Link to="/login">Login</Link></li>
    </ul>
);

export default NavBar;
