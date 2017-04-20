import React, { Component } from 'react';
import { connect } from 'react-redux';
import { partial } from 'lodash';

import { getMonthSessions } from '../../../../redux/actions';
import Loading from '../../Loading';

class MonthDetail extends Component {
    state = {
        isLoading: false
    };

    render () {
        const { match } = this.props;
        const { isLoading } = this.state;

        return (
            <div className="month-detail">
                <h1 className="month-detail__title">{ match.params.month } 2017</h1>
                { isLoading
                    ? <h3>Loading...</h3>
                    : <div>
                        <h3 className="month-detail__month-total">Month Total</h3>
                        <label>3 hours 4 minutes</label>
                        <ul className="month-detail__days">
                            <li className="month-detail__day">
                                <h4>March 1</h4>
                                <div>3 hours 2 minutes </div>
                            </li>
                            <li className="month-detail__day">
                                <h4>March 2</h4>
                                <div>3 hours 2 minutes </div>
                            </li>
                        </ul>
                    </div>
                }
            </div>
        );
    }
}

export default connect(
    null,
    { getMonthSessions }
)(MonthDetail);
