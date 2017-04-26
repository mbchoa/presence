import React, { Component } from 'react';
import { connect } from 'react-redux';
import { map, partial } from 'lodash';
import { format } from 'date-fns';

import { getMonthSessions } from '../../../../redux/actions';
import { calculateOverflowTime } from '../../../helpers/timer';

class MonthDetail extends Component {
    componentDidMount () {
        this.props.getMonthSessions(this.props.match.params.month);
    }

    renderTime ({ hours, minutes }) {
        return (
            <div>
                { hours } hours
                {' '}
                { minutes } minutes
            </div>
        );
    }

    render () {
        const { 
            match,
            monthSessions,
            monthTotalTime,
        } = this.props;

        const formattedTotalTime = calculateOverflowTime(monthTotalTime);
        const formattedSessions = map(monthSessions, ({ duration, startTime}) => ({
            formattedTime: calculateOverflowTime(duration),
            startTime,
        }));

        return (
            <div className="month-detail">
                <h1 className="month-detail__title">{ match.params.month } 2017</h1>
                { !monthSessions
                    ? <h3>Loading...</h3>
                    : <div className="month-detail__content">
                        <div className="month-detail__month-total">
                            <h3 className="month-detail__month-total-header">
                                Month Total
                            </h3>
                            <div className="month-detail__duration">
                                { this.renderTime(formattedTotalTime) }
                            </div>
                        </div>
                        <ul className="month-detail__days">
                            {
                                map(formattedSessions, ({ formattedTime, startTime }, key) => {
                                    return (
                                        <li key={key} className="month-detail__day">
                                            <div className="month-detail__date">
                                                <h3>{ format(startTime, 'MMMM D') }</h3>
                                                <h5>{ format(startTime, 'h:mm a') }</h5>
                                            </div>
                                            <div className="month-detail__duration">
                                                { this.renderTime(formattedTime) }
                                            </div>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                }
            </div>
        );
    }
}

export default connect(
    ({ root }) => {
        return {
            monthSessions: root.monthSessions,
            monthTotalTime: root.monthTotalTime,
        };
    },
    { getMonthSessions }
)(MonthDetail);
