import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

import { logoutUser } from '../../redux/actions';

const NavBar = ({ isAuthenticated, logoutUser }) => {
    const currentMonth = format(new Date(), 'MMMM');

    return (
        <ul className="navbar">
            <li key={0} className="navbar__link"><Link to="/">Home</Link></li>
            { isAuthenticated &&
                [
                    <li key={1} className="navbar__link"><Link to="/history">History</Link></li>,
                    <li key={2} className="navbar__link">
                        <Link to={`/history/${currentMonth}`}>{ currentMonth }</Link>
                    </li>,
                    <li key={3} className="navbar__link"><Link to="/stopwatch">Stopwatch</Link></li>
                ]
            }
            { !isAuthenticated && 
                [
                    <li key={4} className="navbar__link"><Link to="/signup">Signup</Link></li>,
                    <li key={5} className="navbar__link">
                        <Link to="/login">Login</Link>
                    </li> 
                ]
            }
            { isAuthenticated && 
                <li key={6} className="navbar__link">
                    <button onClick={ logoutUser }>Logout</button>
                </li> 
            }
        </ul>
    );
};

export default connect(
    ({ root }) => ({ isAuthenticated: root.isAuthenticated }),
    { logoutUser }
)(NavBar);
