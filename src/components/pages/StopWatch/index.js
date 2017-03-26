import React, { Component } from 'react';

import styles from './styles.css';

import EnhancedStopwatch from '../../../utils/EnhancedStopwatch';

import StopWatchDisplay from './StopWatchDisplay';

export default class StopWatchPage extends Component {
    constructor() {
        super();
        this.state = {
            elapsedMs: 0
        }

        this.toggleTimer = this.toggleTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.onTimerTick = this.onTimerTick.bind(this);
        
        this.timer = new EnhancedStopwatch();
        this.timer.onTime(this.onTimerTick);
    }

    onTimerTick({ ms }) {
        this.setState({
            elapsedMs: ms
        });
    }

    toggleTimer() {
        if (this.timer.isStarted) {
            this.timer.stop();
        } else {
            this.timer.start();
        }
    }

    resetTimer() {
        this.timer.reset();
        this.setState({
            elapsedMs: 0
        });
    }

    render() {
        const { isStarted } = this.timer;
        const { elapsedMs } = this.state;

        return (
            <div className="stopwatch-page">
                <div className="stopwatch-page__center-div">
                    <div className="stopwatch-page__display" onClick={ this.toggleTimer }>
                        <div className="stopwatch-page__center-div">
                            <StopWatchDisplay elapsedMs={ elapsedMs } />
                        </div>
                    </div>
                    <button onClick={ this.toggleTimer }>
                        { isStarted ? 'Pause' : 'Start' }
                    </button>
                    { elapsedMs > 0 &&
                        <button onClick={ this.resetTimer }>Reset</button>
                    }
                </div>
            </div>
        );
    }
}
