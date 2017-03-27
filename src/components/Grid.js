import React from 'react';

const Grid = (props) =>
    <svg { ...props }>
        { props.children }
    </svg>

export default Grid;
