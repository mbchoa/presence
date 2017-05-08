import React, { Component } from 'react';
import { connect } from 'react-redux';
import { format, getDaysInMonth } from 'date-fns';

import { getMonthSessions } from '../../../../redux/actions';
import Grid from '../../Grid';
import Week from './Week';

class Month extends Component {
    componentDidMount () {
        const { date } = this.props;
        this.props.getMonthSessions(format(date, 'MMMM'));
    }

    render () {
        const { date } = this.props;
        const numDaysInMonth = getDaysInMonth(date);

        return (
            <div className="month">
                <h1 className="month__title">{ format(date, 'MMMM') }</h1>
                <Grid width="270" height="380">
                    <Week data={ [1, 2, 3, 4, 5, 6, 7] } />
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
