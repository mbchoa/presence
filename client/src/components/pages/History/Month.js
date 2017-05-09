import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    addDays,
    format, 
    getDaysInMonth, 
    isSameDay, 
    startOfMonth 
} from 'date-fns';
import { filter, map, memoize, range, slice, sumBy } from 'lodash';

import { getMonthSessions } from '../../../../redux/actions';
import Grid from '../../Grid';
import Week from './Week';

class Month extends Component {
    constructor () {
        super();
        this.normalizeMonthSessions = memoize(this.normalizeMonthSessions.bind(this));
    }

    normalizeMonthSessions () {
        const { date, monthSessions } = this.props;
        return map(range(0, getDaysInMonth(date)), (day, offset) => {
            const dateOffset = addDays(startOfMonth(date), offset);
            return {
                date: dateOffset,
                total: sumBy(filter(monthSessions, ({ startTime }) => 
                    isSameDay(startTime, dateOffset)), 'duration'
                )
            };
        });
    }

    componentDidMount () {
        const { date } = this.props;
        this.props.getMonthSessions(format(date, 'MMMM'));
    }

    render () {
        const { date } = this.props;
        const normalizedSessions = this.normalizeMonthSessions();

        return (
            <div className="month">
                <h1 className="month__title">{ format(date, 'MMMM') }</h1>
                <Grid width="270" height="380">
                    <Week 
                        key={0} 
                        padding="5"
                        data={ slice(normalizedSessions, 0, 7) } />
                    <Week 
                        key={1}
                        padding="5" transform="translate(55, 0)"
                        data={ slice(normalizedSessions, 7, 14) } />
                    <Week 
                        key={2} 
                        padding="5" transform="translate(110, 0)"
                        data={ slice(normalizedSessions, 14, 21) } />
                    <Week 
                        key={3} 
                        padding="5" transform="translate(165, 0)"
                        data={ slice(normalizedSessions, 21, 28) } />
                    <Week 
                        key={4} 
                        padding="5" transform="translate(220, 0)"
                        data={ slice(normalizedSessions, 28) } />
                </Grid>
            </div>
        );
    }
}

export default connect(
    ({ root }) => ({
        monthSessions: root.monthSessions
    }),
    { getMonthSessions }
)(Month);
