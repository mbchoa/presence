import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';

import { loginUser } from '../../../../redux/actions';

import styles from './styles.css';

import LoginForm from './LoginForm';

class LoginPage extends Component {
    constructor () {
        super();
        this._submit = this._submit.bind(this);
    }

    _submit (data) {
        const { dispatch } = this.props;
        dispatch(loginUser(data));
    }

    render () {
        const { 
            handleSubmit, 
            isAuthenticated, 
            loginErrorMessage 
        } = this.props;
        const { from } = this.props.location.state || { from: { pathname: '/' } };

        if (isAuthenticated) {  
            return <Redirect to={ from } />;
        }

        return (
            <div className="login">
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
        );
    }
}

export default connect(
    ({ root }) => ({ 
        isAuthenticated: root.isAuthenticated,
        loginErrorMessage: root.loginErrorMessage
    })
)(reduxForm({
    form: 'login',
})(LoginPage));
