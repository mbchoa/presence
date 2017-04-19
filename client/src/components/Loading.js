import React, { Component } from 'react';

class Loading extends Component {
    state = {
        isLoading: false
    };

    componentDidMount () {
        // TODO: fetch data
    }

    render () {
        return this.state.isLoading
            ? <h3>Loading...</h3>
            : <div>{ this.props.children }</div>
    }
}

export default Loading;
