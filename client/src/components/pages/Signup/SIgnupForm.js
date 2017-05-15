import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import { blueGrey600 } from 'material-ui/styles/colors';

import { registerUser } from '../../../../redux/actions';

class SignupForm extends Component {
    constructor () {
        super();
        this.renderTextField = this.renderTextField.bind(this);
        this._submit = this._submit.bind(this);
    }

    _submit (data) {
        const { history, registerUser } = this.props;
        return registerUser(data)
            .then(({ error }) => {
                if (error) {
                    throw new SubmissionError({
                        email: 'Email already exists',
                        _error: 'Login failed'
                    });
                } else {
                    history.push('/login');
                }
            });
    }

    renderTextField ({ input, label, meta: { error, touched } }) {
        return (
            <div>
                <TextField {...{
                    floatingLabelText: label,
                    floatingLabelFocusStyle: {
                        color: blueGrey600
                    },
                    fullWidth: true,
                    ...input,
                    inputStyle: {
                        color: 'black'
                    },
                    underlineFocusStyle: {
                        borderColor: blueGrey600
                    }
                }} />
                { touched && error && <p className="modal__error">{ error }</p> }
            </div>
        );
    }

    render () {
        const { error, handleSubmit, submitting } = this.props;
        return (
            <div className="modal__form">
                <form onSubmit={ handleSubmit(this._submit) }>
                    <Field name="email" label="Email" component={this.renderTextField} />
                    <Field name="password" label="Password" component={this.renderTextField} />
                    <RaisedButton 
                        disabled={submitting}
                        fullWidth={true} 
                        label="Register"
                        type="submit" />
                </form>
            </div>
        );
    }
}

 export default withRouter(connect(
     null,
     { registerUser }
 )(reduxForm({
     form: 'signup',
 })(SignupForm)));
