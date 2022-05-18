import _ from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import { toMoment } from '../utils';

function ReadingsGraph() {
  const readings = _.cloneDeep(useSelector(state => state.readings.readings));

  readings.forEach(row => (row.recordedAt = toMoment(row.recordedAt).format('DD/MM')));

  return (
    <ResponsiveContainer width={'100%'} height={400}>
      <LineChart data={readings}>
        <XAxis dataKey="recordedAt" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="10 10" />
        <Line type="monotone" dataKey="diastolic" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="systolic" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default ReadingsGraph;
