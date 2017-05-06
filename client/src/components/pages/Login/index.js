import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { blueGrey600 } from 'material-ui/styles/colors';

import { loginUser } from '../../../../redux/actions';

import styles from './styles.css';

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
                        <div className="modal__form">
                            <TextField {...{
                                floatingLabelText: 'Email',
                                floatingLabelFocusStyle: {
                                    color: blueGrey600
                                },
                                fullWidth: true,
                                inputStyle: {
                                    color: 'black'
                                },
                                underlineFocusStyle: {
                                    borderColor: blueGrey600
                                }
                            }} />
                            <TextField {...{
                                floatingLabelText: 'Password',
                                floatingLabelFocusStyle: {
                                    color: blueGrey600
                                },
                                fullWidth: true,
                                inputStyle: {
                                    color: 'black'
                                },
                                type: 'password',
                                underlineFocusStyle: {
                                    borderColor: blueGrey600
                                }
                            }} />
                            <RaisedButton 
                                label="Login"
                                fullWidth={true} />
                        </div>
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
