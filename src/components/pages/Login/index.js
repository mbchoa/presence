import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import styles from './styles.css';

class LoginPage extends Component {
    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="login">
                <div className="login__modal">
                    <div className="modal">
                        <header className="modal__header">Welcome back.</header>
                        <div className="modal__form">
                            <form onSubmit={ handleSubmit }>
                                <p className="modal__label">Email</p>
                                <Field 
                                    className="modal__input" 
                                    name="username" 
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

const loginReduxForm = reduxForm({
    form: 'login',
})(LoginPage);

export default connect(
    state => ({}),
    dispatch => ({
        onSubmit: data => console.log('SUBMIT DATA: ', data),
    }),
)(loginReduxForm);