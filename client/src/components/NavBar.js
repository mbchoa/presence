import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import {
    Toolbar,
    ToolbarGroup,
    ToolbarTitle,
} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import { white } from 'material-ui/styles/colors';

import { logoutUser } from '../redux/actions';

import FlatButtonLink from './FlatButtonLink';

const NavBar = ({
    isAuthenticated,
    location: { pathname },
    logoutUser,
}) =>
  (<Toolbar>
    <Link to="/" style={{ textDecoration: 'none' }}>
      <ToolbarTitle
        text="Presence" style={{
          color: white,
        }}
      />
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
          label="History"
          to="/history"
        />,
        <FlatButton
          key="logout"
          label="Logout"
          onClick={logoutUser}
          style={{
            marginLeft: '0px',
            marginRight: '0px',
          }}
        />,
      ]}
      { pathname !== '/signup' && !isAuthenticated &&
        <FlatButtonLink
          key="signup"
          label="Signup"
          to="/signup"
        />
            }
      { pathname !== '/login' && !isAuthenticated &&
        <FlatButtonLink
          key="login"
          label="Login"
          to="/login"
        />
            }
    </ToolbarGroup>
  </Toolbar>);

NavBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

export default withRouter(connect(
    ({ root }) => ({ isAuthenticated: root.isAuthenticated }),
    { logoutUser },
)(NavBar));
