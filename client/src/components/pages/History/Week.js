import React from 'react';
import { map } from 'lodash';

import VRow from '../../VRow';
import Square from '../../Square';

const Week = ({ data, ...props }) => {
    return (
        <VRow {...props}>
            { map(data, (dayData, key) => 
                <Square key={key} width="50" height="50" data={dayData} />
            )}
        </VRow>
    );
}

export default Week;
