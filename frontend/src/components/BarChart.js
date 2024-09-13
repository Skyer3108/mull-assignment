import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { useCubeQuery } from '@cubejs-client/react';

const BarChartComponent = () => {
  const { resultSet } = useCubeQuery({
    measures: ['users.totalValue'],
    dimensions: ['users.name']
  });

  return (
    <BarChart width={600} height={300} data={resultSet?.chartPivot()}>
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="x" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="users.totalValue" fill="#82ca9d" />
    </BarChart>
  );
};

export default BarChartComponent;
