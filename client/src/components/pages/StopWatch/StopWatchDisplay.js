import React from 'react';
import PropTypes from 'prop-types';
import leftPad from 'left-pad';

import styles from './styles.css';

import calculateOverflowTime from '../../../helpers/timer';

const StopWatchDisplay = ({ elapsedMs }) => {
  const {
      hours,
      minutes,
      seconds,
      ms,
  } = calculateOverflowTime(elapsedMs);

  return (
    <div className="stopwatch">
      <div className="stopwatch__label">
        <label className="stopwatch__label--large">
          { hours > 0 && `${hours}:` }
          { hours > 0
                        ? `${leftPad(minutes, 2, '0')}:`
                        : minutes > 0 && `${minutes}:`
                    }
          { minutes > 0 || hours > 0
                        ? leftPad(seconds, 2, '0')
                        : seconds
                    }
        </label>
        <label className="stopwatch__label--small">
          { leftPad(ms, 2, '0') }
        </label>
      </div>
    </div>
  );
};

StopWatchDisplay.propTypes = {
  elapsedMs: PropTypes.number.isRequired,
};

export default StopWatchDisplay;
