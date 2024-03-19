// 'use client';
import { useState, useEffect } from 'react';
import { BarChart, LineChart } from "@mui/x-charts"
import CardContainer from './CardContainer';


// TODO: Update the props of chart to receive data from the database
function LineChartComp() {
  return (
    <CardContainer title='Chart title'>
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
    </CardContainer>

  )
}




function BarChartComp({ title, route }) {
  const [dataItems, setDataItems] = useState({ result: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/${route}`);
        if (response.ok) {
          const data = await response.json();
          setDataItems(data);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [route]);
  return (
    <CardContainer title={title}>
      <>
        {dataItems.result.length > 0 ?
          <BarChart
            xAxis={[{ scaleType: 'band', data: dataItems.result.map(item => item._id.toString()) }]}
            series={[{ scaleType: 'linear', data: dataItems.result.map(item => item.count), color: '#A1ACE6' }]}
            height={200}
            margin={{ top: 10, bottom: 20, left: 30, right: 16 }}
          />
          : <div className='min-h-[12.5rem]'></div>
        }
      </>
    </CardContainer>
  )
}

export { LineChartComp, BarChartComp }