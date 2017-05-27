import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import { blueGrey600 } from 'material-ui/styles/colors';

import { loginUser } from '../../../redux/actions';

class LoginForm extends Component {
  static propTypes = {
    error: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    loginUser: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.renderTextField = this.renderTextField.bind(this);
    this._submit = this._submit.bind(this);
  }

  _submit(data) {
    const { loginUser } = this.props;
    return loginUser(data)
            .then(({ error }) => {
              if (error) {
                switch (error) {
                  case 'You must enter an e-mail address':
                    throw new SubmissionError({ email: error });
                  case 'User does not exist. Please enter a valid username':
                    throw new SubmissionError({ _error: error });
                  case 'Error validating password. Please try again':
                  case 'Invalid password, Please try again':
                  case 'You must enter a password':
                    throw new SubmissionError({
                      password: error,
                    });
                  default:
                    break;
                }
              }
            });
  }

  renderTextField({ input, label, meta: { error, touched } }) {
    return (
      <div>
        <TextField {...{
          floatingLabelText: label,
          floatingLabelFocusStyle: {
            color: blueGrey600,
          },
          fullWidth: true,
          ...input,
          inputStyle: {
            color: 'black',
          },
          underlineFocusStyle: {
            borderColor: blueGrey600,
          },
        }}
        />
        { touched && error && <p className="modal__error">{ error }</p> }
      </div>
    );
  }

  render() {
    const { error, handleSubmit } = this.props;
    return (
      <div className="modal__form">
        <form onSubmit={handleSubmit(this._submit)}>
          <Field name="email" label="Email" component={this.renderTextField} />
          <Field name="password" label="Password" component={this.renderTextField} />
          { error && <p className="modal__error">{ error }</p> }
          <RaisedButton
            label="Login"
            fullWidth
            type="submit"
          />
        </form>
      </div>
    );
  }
}

export default connect(
     null,
     { loginUser },
 )(reduxForm({
   form: 'login',
 })(LoginForm));
