import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router';

import { loginUser } from '../../../../redux/actions';
import styles from './styles.css';

class LoginPage extends Component {
    state = {
        redirectToReferrer: false,
    };

    constructor() {
        super();
        this._submit = this._submit.bind(this);
    }

    _submit(data) {
        const { dispatch } = this.props;
        dispatch(loginUser(data))
            .then(() => {
                this.setState({ redirectToReferrer: true });
            });
    }

    render() {
        const { handleSubmit } = this.props;
        const { from } = this.props.location.state || { from: { pathname: '/' } };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
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

export default reduxForm({
    form: 'login',
})(LoginPage);
