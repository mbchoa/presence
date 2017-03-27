import React from 'react';

const Square = (props) => 
    <rect { ...Object.assign(
        { className: 'square'}, 
        props
    )}></rect>

export default Square;
