import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';

import styles from './styles.css';

import LoginForm from './LoginForm';

const LoginPage = ({ isAuthenticated, location }) => {
    const { from } = location.state || { from: { pathname: '/' } };
    return isAuthenticated
        ? <Redirect to={ from } />
        : <div className="login">
                <div className="login__modal">
                    <Paper className="modal">
                        <Toolbar>
                            <ToolbarTitle 
                                text="Welcome back." 
                                style={{ color: 'white '}} />
                        </Toolbar>
                        <LoginForm />
                    </Paper>
                </div>
            </div>
};

export default connect(
    ({ root }) => ({ 
        isAuthenticated: root.isAuthenticated
    })
)(LoginPage);
