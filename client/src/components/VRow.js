import React from 'react';
import PropTypes from 'prop-types';
import { assign, map } from 'lodash';

const VRow = props =>
  (<g transform={props.transform}>
    {
            map(props.children, (child, i) =>
                React.cloneElement(
                    child,
                    assign(
                        { key: i },
                        child.props,
                        { y: i * (+child.props.width + +props.padding) },
                    ),
                ),
            )
        }
  </g>);

VRow.propTypes = {
  children: PropTypes.children.isRequired,
  padding: PropTypes.number.isRequired,
  transform: PropTypes.string.isRequired,
};

export default VRow;
