import React from 'react';
import { map } from 'lodash';

import VRow from '../../VRow';
import Square from '../../Square';

const Week = ({ data }) => {
    return (
        <VRow padding="5">
            { map(data, dayData => 
                <Square width="50" height="50" data={dayData} />
            )}
        </VRow>
    );
}

export default Week;
