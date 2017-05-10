import { 
    flatMap, 
    flowRight, 
    groupBy, 
    map, 
    max, 
    partialRight, 
    reduce, 
    sumBy 
} from 'lodash';
import { 
    differenceInMilliseconds,
    startOfDay
} from 'date-fns';

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
        return flowRight(
            max,
            partialRight(flatMap, sessions =>
                sumBy(sessions, ({ startTime, endTime }) =>
                    differenceInMilliseconds(endTime, startTime)
                )
            ),
            partialRight(groupBy, ({ startTime }) => startOfDay(startTime))
        )(this.sessions);
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
