'use client';

import React from 'react';
import { LineChart } from "@mui/x-charts"
import CardContainer from './CardContainer';


// TODO: Update the props of chart to receive data from the database
function LineChartComp() {
    return (
        <CardContainer title='gg' element={
            <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 15, 16] }]}
                series={[
                    {
                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                        valueFormatter: (value) => (value == null ? 'NaN' : value.toString()),
                    },
                    {
                        data: [null, null, null, null, 5.5, 2, 8.5, 1.5, 5],
                    },
                    {
                        data: [7, 8, 5, 4, null, null, 2, 5.5, 1],
                        valueFormatter: (value) => (value == null ? '?' : value.toString()),
                    },
                ]}
                height={200}
                width={500}
                margin={{ top: 10, bottom: 20 }}
            />
        }>
        </CardContainer>

    )
}

export { LineChartComp }