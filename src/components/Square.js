import React from 'react';

import style from './style.css';

const Square = (props) => 
    <rect { ...Object.assign(
        { className: 'square'}, 
        props
    )}></rect>

export default Square;
