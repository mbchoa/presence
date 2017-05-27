import React from 'react';
import PropTypes from 'prop-types';

import style from './style.css';

const FILL_LEVEL_COLORS = [
  '#ebedf0',
  '#E1F5FE',
  '#4FC3F7',
  '#039BE5',
  '#01579B',
];

const Square = ({ data, ...props }) =>
  (<rect {...{
    ...props,
    className: 'square',
    fill: FILL_LEVEL_COLORS[data.fillLevel],
  }}
  />);

Square.propTypes = {
  data: PropTypes.shape({
    fillLevel: PropTypes.number.isRequired,
  }).isRequired,
};

export default Square;
