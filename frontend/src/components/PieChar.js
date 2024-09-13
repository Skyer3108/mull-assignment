import React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';
import { useCubeQuery } from '@cubejs-client/react';

const PieChartComponent = () => {
  const { resultSet } = useCubeQuery({
    measures: ['users.totalValue'],
    dimensions: ['users.name']
  });

  return (
    <PieChart width={400} height={400}>
      <Tooltip />
      <Pie
        data={resultSet?.chartPivot()}
        dataKey="users.totalValue"
        nameKey="x"
        fill="#8884d8"
        label
      />
    </PieChart>
  );
};

export default PieChartComponent;