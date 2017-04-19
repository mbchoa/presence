import React, { Component } from 'react';
import { map, filter, isFunction } from 'lodash';

class Loading extends Component {
    state = {
        isLoading: true
    };

    componentDidMount () {
        Promise
            .all(map(filter(this.props, isFunction), value => value()))
            .then(() => this.setState({ isLoading: false }));
    }

    render () {
        return this.state.isLoading
            ? <h3>Loading...</h3>
            : <div>{ this.props.children }</div>
    }
}

export default Loading;
