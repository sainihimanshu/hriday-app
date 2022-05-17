import _ from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';
import { Line, LineChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import { toMoment } from '../utils';

function ReadingsGraph() {
  const readings = _.cloneDeep(useSelector(state => state.readings.readings));

  readings.forEach(row => (row.recordedAt = toMoment(row.recordedAt).format('DD/MM')));

  return (
    <LineChart width={600} height={300} data={readings}>
      <XAxis dataKey="recordedAt" />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="10 10" />
      <Line type="monotone" dataKey="diastolic" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="systolic" stroke="#82ca9d" />
    </LineChart>
  );
}

export default ReadingsGraph;
