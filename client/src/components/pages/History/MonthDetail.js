import React from 'react';

const MonthDetail = (props) => (
    <div>Month: { props.match.params.month }</div>
);

export default MonthDetail;
