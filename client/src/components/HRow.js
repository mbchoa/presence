import React from 'react';
import PropTypes from 'prop-types';
import { assign, map } from 'lodash';

const HRow = props =>
  (<g transform={props.transform}>
    {
            map(props.children, (child, i) =>
                React.cloneElement(
                    child,
                    assign(
                        { key: i },
                        child.props,
                        { x: i * (+child.props.width + +props.padding) },
                    ),
                ),
            )
        }
  </g>);

HRow.propTypes = {
  transform: PropTypes.string,
  children: PropTypes.node.isRequired,
  padding: PropTypes.string.isRequired,
};

export default HRow;
