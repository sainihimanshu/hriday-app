import React from 'react';
import moment from 'moment';
import Analytics from '../analytics';

const dateFormat = 'DD/MM/YY, HH:mm';
function InputAnalytics({ rawReadings = [] }) {
  const readings = rawReadings.slice();
  readings.forEach(row => (row.recordedAt = moment(row.recordedAt, dateFormat)));
  const numReadings = readings.length;

  if (!numReadings)
    return <div>No heart readings found in the txt file. Please checkout the FAQ.</div>;

  const analytics = new Analytics(readings);
  const firstReading = readings[0];
  const lastReading = readings[readings.length - 1];

  const dayDiff = lastReading.recordedAt.diff(firstReading.recordedAt, 'days');

  console.log(analytics.getAggravatingTimeGroup());
  return (
    <div>
      Read <b>{readings.length}</b> heart readings recorded over a period of <b>{dayDiff}</b> days.
      <br />
      Average Systolic Reading: <b>{analytics.getAvgSystolic()}</b> <br />
      Average Diastolic Reading: <b>{analytics.getAvgDiastolic()}</b>
    </div>
  );
}

export default InputAnalytics;
