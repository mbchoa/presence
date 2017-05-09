import { map, maxBy, reduce } from 'lodash';

import { 
    calculateOverflowTime as formatTimeDuration 
} from '../../src/helpers/timer';

export default class Sessions {
    constructor (sessions) {
        this.sessions = sessions;
        this.getMaxDuration = this.getMaxDuration.bind(this);
        this.calculateTotalTime = this.calculateTotalTime.bind(this);
        this.formatSessionTimes = this.formatSessionTimes.bind(this);
    }

    getMaxDuration () {
        return maxBy(this.sessions, ({ startTime, endTime }) =>
            endTime - startTime
        ) || 0;
    }

    calculateTotalTime () {
        return reduce(this.sessions, (output, { startTime, endTime }) =>
            output + (new Date(endTime) - new Date(startTime)), 0
        )
    }

    formatSessionTimes () {
        return map(this.sessions, ({ startTime, endTime }) => ({
            startTime,
            duration: new Date(endTime) - new Date(startTime),
        }));
    }
}
