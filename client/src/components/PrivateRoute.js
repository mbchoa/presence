import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

class PrivateRoute extends Component {
  render() {
    const {
            component,
            isAuthenticated,
            ...rest
        } = this.props;

    return (
            <Route { ...rest } render={ props => (
                isAuthenticated ? (
                    React.createElement(component, props)
                ) : (
                    <Redirect to={{
                      pathname: '/login',
                      state: { from: props.location },
                    }} />
                )
            )} />
    );
  }
}

export default withRouter(connect(
    ({ root }) => ({ isAuthenticated: root.isAuthenticated }),
)(PrivateRoute));
