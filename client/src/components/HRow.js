import React from 'react';
import { assign, map } from 'lodash';

const HRow = (props) =>
    <g transform={ props.transform }>
        {
            map(props.children, (child, i) => 
                React.cloneElement(
                    child,
                    assign(
                        { key, i },
                        child.props,
                        { x: i * (+child.props.width + +props.padding)  }
                    )
                )
            )
        }
    </g>

export default HRow;
