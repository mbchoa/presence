import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';

import { loginUser } from '../../../../redux/actions';
import { getSessionId } from '../../../helpers/localStorage';

import styles from './styles.css';

class LoginPage extends Component {
    constructor() {
        super();
        this._submit = this._submit.bind(this);
    }

    _submit(data) {
        const { dispatch } = this.props;
        dispatch(loginUser(data))
    }

    render() {
        const { handleSubmit, isAuthenticated } = this.props;
        const { from } = this.props.location.state || { from: { pathname: '/' } };

        if (isAuthenticated) {  
            return (
                <Redirect to={ from } />
            );
        }

        return (
            <div className="login">
                <div className="login__modal">
                    <div className="modal">
                        <header className="modal__header">Welcome back.</header>
                        <div className="modal__form">
                            <form onSubmit={ handleSubmit(this._submit) }>
                                <p className="modal__label">Email</p>
                                <Field 
                                    className="modal__input" 
                                    name="email" 
                                    component="input" 
                                    type="text" />
                                <p className="modal__label">Password</p>
                                <Field 
                                    className="modal__input" 
                                    name="password" 
                                    component="input" 
                                    type="password" />
                                <button type="submit" className="modal__submit">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({ isAuthenticated: state.root.isAuthenticated }),
    {} 
)(reduxForm({
    form: 'login',
})(LoginPage));
