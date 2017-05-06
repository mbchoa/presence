import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { blueGrey600 } from 'material-ui/styles/colors';

class LoginForm extends Component {
    render () {
        return (
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
        );
    }
}

export default LoginForm;
