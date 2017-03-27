import React from 'react';

const Grid = ({ children, props }) =>
    <svg { ...props }>
        { children }
    </svg>

export default Grid;
