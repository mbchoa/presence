import React from 'react';

import Loading from '../../Loading';

const MonthDetail = (props) => (
    <div className="month-detail">
        <h1 className="month-detail__title">{ props.match.params.month } 2017</h1>
        <Loading>
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
                <li className="month-detail__day">
                    <h4>March 3</h4>
                    <div>3 hours 2 minutes </div>
                </li>
                <li className="month-detail__day">
                    <h4>March 5</h4>
                    <div>3 hours 2 minutes </div>
                </li>
                <li className="month-detail__day">
                    <h4>March 6</h4>
                    <div>3 hours 2 minutes </div>
                </li>
                <li className="month-detail__day">
                    <h4>March 8</h4>
                    <div>3 hours 2 minutes </div>
                </li>
            </ul>
        </Loading>
    </div>
);

export default MonthDetail;
