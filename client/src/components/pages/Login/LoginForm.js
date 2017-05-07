import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import { blueGrey600 } from 'material-ui/styles/colors';

import { loginUser } from '../../../../redux/actions';

class LoginForm extends Component {
    constructor () {
        super();
        this.renderTextField = this.renderTextField.bind(this);
        this._submit = this._submit.bind(this);
    }

    _submit (data) {
        const { loginUser } = this.props;
        loginUser(data);
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
                        label="Login"
                        fullWidth={true} 
                        type="submit" />
                </form>
            </div>
        );
    }
}

 export default connect(
     null,
     { loginUser }
 )(reduxForm({
     form: 'login',
 })(LoginForm))
