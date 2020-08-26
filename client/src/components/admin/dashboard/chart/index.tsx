import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import DashboardTitle from '../../common/title';

const data = [
  {name: 'Business', total: 20},
  {name: 'Entertainment', total: 1},
  {name: 'Sports', total: 12},
  {name: 'Headlines', total: 3},
  {name: 'Health', total: 25},
  {name: 'Travel', total: 30},
];
const DashboardChart: React.FC = () => {
  return (
    <React.Fragment>
      <DashboardTitle>No. of articles per month</DashboardTitle>
      <ResponsiveContainer>
        <BarChart
          width={600}
          height={300}
          data={data}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="name" tick={{fill: 'white'}} />
          <YAxis tick={{fill: 'white'}} />
          <Tooltip />
          <Bar dataKey="total" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
};

export default React.memo(DashboardChart);
