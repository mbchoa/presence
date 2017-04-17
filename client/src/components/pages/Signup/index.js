import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { registerUser } from '../../../../redux/actions';
import styles from './styles.css';

class SignupPage extends Component {
    constructor() {
        super();
        this._submit = this._submit.bind(this);
    }

    _submit(data) {
        const { dispatch, history } = this.props;
        dispatch(registerUser(data))
            .then(() => {
                history.push('/login');
            });
    }

    render() {
        const { handleSubmit, signUpError } = this.props;

        return (
            <div className="signup">
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
                        { signUpError && <p className="signup__error">{ signUpError }</p> }
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(
    ({ root }) => ({ signUpError: root.signUpError })
)(reduxForm({ form: 'signup' })(SignupPage)));
