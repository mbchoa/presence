import React from 'react';

import Grid from '../../Grid';
import VRow from '../../VRow';
import Square from '../../Square';

const Month = () =>
    <div className="month">
        <Grid width="270" height="380">
            <VRow padding="5">
                <Square width="50" height="50" fill="red" />
                <Square width="50" height="50" fill="red" />
                <Square width="50" height="50" fill="red" />
                <Square width="50" height="50" fill="red" />
                <Square width="50" height="50" fill="red" />
                <Square width="50" height="50" fill="red" />
                <Square width="50" height="50" fill="red" />
            </VRow>
            <VRow transform="translate(55, 0)" padding="5">
                <Square width="50" height="50" fill="red" />
                <Square width="50" height="50" fill="red" />
                <Square width="50" height="50" fill="red" />
                <Square width="50" height="50" fill="red" />
                <Square width="50" height="50" fill="red" />
                <Square width="50" height="50" fill="red" />
                <Square width="50" height="50" fill="red" />
            </VRow>
            <VRow transform="translate(110, 0)" padding="5">
                <Square width="50" height="50" fill="red" />
                <Square width="50" height="50" fill="red" />
                <Square width="50" height="50" fill="red" />
                <Square width="50" height="50" fill="red" />
                <Square width="50" height="50" fill="red" />
                <Square width="50" height="50" fill="red" />
                <Square width="50" height="50" fill="red" />
            </VRow>
            <VRow transform="translate(165, 0)" padding="5">
                <Square width="50" height="50" fill="red" />
                <Square width="50" height="50" fill="red" />
                <Square width="50" height="50" fill="red" />
                <Square width="50" height="50" fill="red" />
                <Square width="50" height="50" fill="red" />
                <Square width="50" height="50" fill="red" />
                <Square width="50" height="50" fill="red" />
            </VRow>
            <VRow transform="translate(220, 0)" padding="5">
                <Square width="50" height="50" fill="red" />
                <Square width="50" height="50" fill="red" />
            </VRow>
        </Grid>
    </div>

export default Month;
