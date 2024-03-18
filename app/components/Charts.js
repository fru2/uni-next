'use client';

import React from 'react';
import { BarChart, LineChart } from "@mui/x-charts"
import CardContainer from './CardContainer';


// TODO: Update the props of chart to receive data from the database
function LineChartComp() {
    return (
        <CardContainer title='Chart title' element={
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
                margin={{ top: 10, bottom: 20, left: 16, right: 16 }}
            />
        }>
        </CardContainer>

    )
}




function BarChartComp({title}){
    return(
      <CardContainer title={title} element={
        <BarChart 
          xAxis={[{ scaleType: 'band', data: [2023, 2024, 2022]}]}
          series={[{ scaleType: 'linear', data: [576, 202, 191] }]}
          height={200}
          margin={{ top: 10, bottom: 20, left: 16, right: 16 }}
        />
      }></CardContainer>
    )
  }
  
  export { LineChartComp, BarChartComp }