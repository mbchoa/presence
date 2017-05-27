import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';

import HRow from '../../HRow';
import Square from '../../Square';

const Week = ({ data, ...props }) => (
  <HRow {...props}>
    { map(data, (dayData, key) =>
      <Square key={key} width="50" height="50" data={dayData} />,
            )}
  </HRow>
    );

Week.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Week;
