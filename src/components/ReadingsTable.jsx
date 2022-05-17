import _ from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';

function ReadingsTable() {
  const readings = _.cloneDeep(useSelector(state => state.readings.readings));

  return (
    <table style={{ minWidth: '50%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>BP</th>
          <th>HeartRate</th>
          <th>Date Time</th>
        </tr>
      </thead>
      <tbody>
        {readings.map((row, idx) => {
          return (
            <tr key={idx.toString()}>
              <td>
                {row.diastolic} / {row.systolic}
              </td>
              <td>{row.heartRate}</td>
              <td>{row.recordedAt}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ReadingsTable;
