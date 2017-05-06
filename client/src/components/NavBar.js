import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { format } from 'date-fns';
import { 
    Toolbar,
    ToolbarGroup,
    ToolbarTitle
} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import { white } from 'material-ui/styles/colors';

import { logoutUser } from '../../redux/actions';

import FlatButtonLink from './FlatButtonLink';

class NavBar extends Component {
    static defaultProps = {
        currentMonth: format(new Date(), 'MMMM')
    };

    render () {
        const {
            currentMonth,
            isAuthenticated,
            location: { pathname },
            logoutUser
        } = this.props;

        return (
            <Toolbar>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <ToolbarTitle text="Presence" style={{
                        color: white
                    }} />
                </Link>
                <ToolbarGroup>
                    { isAuthenticated && [
                        <FlatButtonLink
                            key="stopwatch"
                            label="Stopwatch"
                            to="/stopwatch"
                        />,
                        <FlatButtonLink 
                            key="history"
                            label={ currentMonth }
                            to={ `/history/${currentMonth}` }
                        />,
                        <FlatButton
                            key="logout"
                            label="Logout"
                            onClick={ logoutUser }
                            style={{
                                marginLeft: '0px',
                                marginRight: '0px'
                            }}
                        />
                    ]}
                    { !isAuthenticated &&
                        <FlatButtonLink 
                            key="signup" 
                            label="Signup" 
                            to="/signup" 
                        />
                    }
                    { pathname !== '/login' &&
                        <FlatButtonLink 
                            key="login"
                            label="Login" 
                            to="/login" 
                        />
                    }
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

export default withRouter(connect(
    ({ root }) => ({ isAuthenticated: root.isAuthenticated }),
    { logoutUser }
)(NavBar));
