import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './styles.css';

import { saveCurrentSessionTime } from '../../../../redux/actions';
import EnhancedStopwatch from '../../../utils/EnhancedStopwatch';

import StopWatchDisplay from './StopWatchDisplay';

class StopWatchPage extends Component {
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
        const { saveTime } = this.props;

        if (this.timer.isStarted) {
            this.timer.stop();
            saveTime(this.state.elapsedMs);
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

    componentDidMount() {
        this.setState({ elapsedMs: this.props.currentSessionTime });
    }
    
    render() {
        const { isStarted } = this.timer;
        const { elapsedMs } = this.state;
        
        const btnLabelClass = `stopwatch-page__btn-label--${ 
            isStarted ? 'pause' : 'play'
        }`;

        return (
            <div className="stopwatch-page">
                <div className="stopwatch-page__center-div">
                    <div className="stopwatch-page__display" onClick={ this.toggleTimer }>
                        <div className="stopwatch-page__center-div">
                            <StopWatchDisplay elapsedMs={ elapsedMs } />
                        </div>
                    </div>
                    <div className="stopwatch-page__media-control">
                        <div className="stopwatch-page__center-controls">
                            <button className="stopwatch-page__playback-btn" onClick={ this.toggleTimer }>
                                <div className={ btnLabelClass }></div>
                            </button>
                            {/*{ elapsedMs > 0 &&
                                <button onClick={ this.resetTimer }>Reset</button>
                            }*/}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    ({ root }) => ({ currentSessionTime: root.currentSessionTime }),
    { saveTime: saveCurrentSessionTime }
)(StopWatchPage);