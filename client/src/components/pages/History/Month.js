import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    addDays,
    format,
    getDaysInMonth,
    isSameDay,
    startOfMonth,
} from 'date-fns';
import { filter, inRange, map, range, slice, sumBy } from 'lodash';

import { getMonthSessions } from '../../../../redux/actions';
import Grid from '../../Grid';
import Week from './Week';

class Month extends Component {
  constructor() {
    super();
    this.calculateFillLevel = this.calculateFillLevel.bind(this);
    this.normalizeMonthSessions = this.normalizeMonthSessions.bind(this);
  }

  calculateFillLevel(duration) {
    const { maxDuration } = this.props;
    const pct = duration / maxDuration;

    if (pct >= 0.8) return 4;
    if (inRange(pct, 0.6, 0.8)) return 3;
    if (inRange(pct, 0.4, 0.6)) return 2;
    if (pct > 0) return 1;
    return 0;
  }

  normalizeMonthSessions() {
    const { date, monthSessions } = this.props;

    return map(range(0, getDaysInMonth(date)), (day, offset) => {
      const dateOffset = addDays(startOfMonth(date), offset);
      const total = sumBy(filter(monthSessions, ({ startTime }) =>
                isSameDay(startTime, dateOffset)), 'duration',
            );
      return {
        date: dateOffset,
        fillLevel: this.calculateFillLevel(total),
        total,
      };
    });
  }

  componentDidMount() {
    const { date } = this.props;
    this.props.getMonthSessions(format(date, 'MMMM'));
  }

  render() {
    const { date } = this.props;
    const normalizedSessions = this.normalizeMonthSessions();

    return (
            <div className="month">
                <h1 className="month__title">{ format(date, 'MMMM') }</h1>
                <Grid width="380" height="270">
                    <Week
                        key={0}
                        padding="5"
                        data={ slice(normalizedSessions, 0, 7) } />
                    <Week
                        key={1}
                        padding="5" transform="translate(0, 55)"
                        data={ slice(normalizedSessions, 7, 14) } />
                    <Week
                        key={2}
                        padding="5" transform="translate(0, 110)"
                        data={ slice(normalizedSessions, 14, 21) } />
                    <Week
                        key={3}
                        padding="5" transform="translate(0, 165)"
                        data={ slice(normalizedSessions, 21, 28) } />
                    <Week
                        key={4}
                        padding="5" transform="translate(0, 220)"
                        data={ slice(normalizedSessions, 28) } />
                </Grid>
            </div>
    );
  }
}

export default connect(
    ({ root }) => ({
      maxDuration: root.maxDuration,
      monthSessions: root.monthSessions,
    }),
    { getMonthSessions },
)(Month);
