import React from 'react';
import PropType from 'prop-types';

const Grid = props =>
  (<svg {...props}>
    { props.children }
  </svg>);

Grid.propTypes = {
  children: PropType.node.isRequired,
};

export default Grid;
