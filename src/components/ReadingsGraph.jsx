import React from 'react';
import { Line, LineChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

function ReadingsGraph({ readings }) {
  return (
    <LineChart width={699} height={400} data={readings} margin={{ top: 30 }}>
      <XAxis dataKey="recordedAt" />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="5 5" />
      <Line type="monotone" dataKey="diastolic" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="systolic" stroke="#82ca9d" />
    </LineChart>
  );
}

export default ReadingsGraph;
