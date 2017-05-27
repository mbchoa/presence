import React from 'react';
import { connect } from 'react-redux';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';

import styles from './styles.css';

import SignupForm from './SignupForm';

const SignupPage = () =>
  (<div className="signup">
    <div className="signup__modal">
      <Paper className="modal">
        <Toolbar>
          <ToolbarTitle
            text="Create an account"
            style={{ color: 'white ' }}
          />
        </Toolbar>
        <SignupForm />
      </Paper>
    </div>
  </div>);

export default connect(
    ({ root }) => ({ signUpError: root.signUpError }),
)(SignupPage);
