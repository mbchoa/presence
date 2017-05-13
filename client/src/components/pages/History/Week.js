import React from 'react';
import { map } from 'lodash';

import HRow from '../../HRow';
import Square from '../../Square';

const Week = ({ data, ...props }) => {
    return (
        <HRow {...props}>
            { map(data, (dayData, key) => 
                <Square key={key} width="50" height="50" data={dayData} />
            )}
        </HRow>
    );
}

export default Week;
