import React, { Component } from 'react';

import Grid from '../../Grid';
import HRow from '../../HRow';
import Square from '../../Square';

import styles from './styles.css';

export default class HistoryPage extends Component {
    render() {
        return (
            <div className="history-page">
                <Grid width="500" height="300">
                    <HRow padding="5">
                        <Square width="50" height="50" fill="red" />
                        <Square width="50" height="50" x="55" fill="red" />
                        <Square width="50" height="50" x="110" fill="red" />
                        <Square width="50" height="50" x="165" fill="red" />
                        <Square width="50" height="50" x="220" fill="red" />
                    </HRow>
                    <HRow transform="translate(0, 55)" padding="5">
                        <Square width="50" height="50" fill="red" />
                        <Square width="50" height="50" x="55" fill="red" />
                        <Square width="50" height="50" x="110" fill="red" />
                        <Square width="50" height="50" x="165" fill="red" />
                        <Square width="50" height="50" x="220" fill="red" />
                    </HRow>
                </Grid>
            </div>
        );
    }
}
