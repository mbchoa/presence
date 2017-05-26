import React from 'react';
import { assign, map } from 'lodash';

const VRow = props =>
    <g transform={ props.transform }>
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
    </g>;

export default VRow;
