import _ from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';

function ReadingsTable() {
  const readings = _.cloneDeep(useSelector(state => state.readings.readings));

  return (
    <table style={{ width: '60%', borderCollapse: 'collapse' }}>
      <tr>
        <th>BP</th>
        <th>HeartRate</th>
        <th>Date Time</th>
      </tr>
      {readings.map(row => {
        return (
          <tr>
            <td>
              {row.diastolic} / {row.systolic}
            </td>
            <td>{row.heartRate}</td> <td>{row.recordedAt.format('DD/MM/YYYY, HH:mm')}</td>
          </tr>
        );
      })}
    </table>
  );
}

export default ReadingsTable;
