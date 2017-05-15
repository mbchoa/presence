import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
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
        registerUser(data)
            .then(() => {
                history.push('/login');
            });
    }

    renderTextField ({ input, label }) {
        return (
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
        );
    }

    render () {
        const { handleSubmit } = this.props;
        return (
            <div className="modal__form">
                <form onSubmit={ handleSubmit(this._submit) }>
                    <Field name="email" label="Email" component={this.renderTextField} />
                    <Field name="password" label="Password" component={this.renderTextField} />
                    <RaisedButton 
                        label="Register"
                        fullWidth={true} 
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
