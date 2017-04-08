import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

// import { registerUser } from '../../../../redux/actions';
import styles from './styles.css';

class SignupPage extends Component {
    constructor() {
        super();
        this._submit = this._submit.bind(this);
    }

    _submit(data) {
        const { dispatch } = this.props;
        // dispatch(registerUser(data))
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="signup">
                <div className="signup__modal">
                    <div className="modal">
                        <header className="signup__header">Welcome back.</header>
                        <div className="signup__form">
                            <form onSubmit={ handleSubmit(this._submit) }>
                                <p className="signup__label">Email</p>
                                <Field 
                                    className="signup__input" 
                                    name="email" 
                                    component="input" 
                                    type="text" />
                                <p className="signup__label">Password</p>
                                <Field 
                                    className="signup__input" 
                                    name="password" 
                                    component="input" 
                                    type="password" />
                                <button type="submit" className="signup__submit">Create</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'signup',
})(SignupPage);
