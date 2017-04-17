import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logoutUser } from '../../redux/actions';

const NavBar = ({ isAuthenticated, logoutUser }) => (
    <ul className="navbar">
        <li className="navbar__link"><Link to="/">Home</Link></li>
        <li className="navbar__link"><Link to="/history">History</Link></li>
        <li className="navbar__link"><Link to="/history/april">April</Link></li>
        <li className="navbar__link"><Link to="/stopwatch">Stopwatch</Link></li>
        <li className="navbar__link"><Link to="/signup">Signup</Link></li>
        { !isAuthenticated && 
            <li className="navbar__link">
                <Link to="/login">Login</Link>
            </li> 
        }
        { isAuthenticated && 
            <li className="navbar__link">
                <button onClick={ logoutUser }>Logout</button>
            </li> 
        }
    </ul>
);

export default connect(
    ({ root }) => ({ isAuthenticated: root.isAuthenticated }),
    { logoutUser }
)(NavBar);
