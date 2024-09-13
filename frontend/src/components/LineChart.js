import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { useCubeQuery } from '@cubejs-client/react';

const LineChartComponent = () => {
  const { resultSet,error } = useCubeQuery({
    measures: ['users.totalValue'],
    timeDimensions: [{
      dimension: 'users.timestamp',
      dateRange: ['2023-01-01', '2024-01-01'],
      granularity: 'day'
    }]
  });

  if (error) {
    console.error("Cube.js Query Error:", error);
    return <div>Error loading chart data</div>;
  }

  // Handle loading state
  if (!resultSet) {
    return <div>Loading...</div>;
  }

  const data = resultSet.chartPivot ? resultSet.chartPivot() : [];

  // Ensure data is in the expected format
  if (!Array.isArray(data) || data.length === 0) {
    return <div>No data available for the chart.</div>;
  }

  return (
    <LineChart width={600} height={300} data={resultSet?.chartPivot()}>
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="x" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="users.totalValue" stroke="#8884d8" />
    </LineChart>
  );
};

export default LineChartComponent;
