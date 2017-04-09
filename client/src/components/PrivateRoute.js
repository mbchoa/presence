import React, { Component } from 'react';
import { Redirect, Route, withRouter } from 'react-router';

import { getSessionId } from '../helpers/localStorage';

class PrivateRoute extends Component {
    render() {
        const { 
            component,
            ...rest 
        } = this.props;

        return (
            <Route { ...rest } render={ props => (
                getSessionId() ? (
                    React.createElement(component, props)
                ) : (
                    <Redirect to={{
                        pathname: '/login',
                        state: { from: props.location },
                    }} />
                )
            )} />
        )
    }
}

export default withRouter(PrivateRoute);
