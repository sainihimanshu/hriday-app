import React from 'react';
import Insights from '../insights';
import _ from 'lodash';
import { Link } from 'react-router-dom';

function InputAnalytics(props) {
  const readings = _.cloneDeep(props.readings);

  if (!readings || !readings.length)
    return (
      <div style={{ color: 'brown' }}>
        No heart readings found in the txt file. Please make sure you are uploading WhatsApp
        exported text file. For more information{' '}
        <Link to="/instructions" className="link">
          click here.
        </Link>
      </div>
    );

  const analytics = new Insights(readings);

  const averages = analytics.getAverages();
  const maxReading = analytics.getMaxReading();
  const minReading = analytics.getMinReading();
  const abnormals = analytics.getAbnormalStats();
  const riskyDay = analytics.getRiskyDay();
  const riskyTimeGroup = analytics.getRiskyTimeGroup();
  analytics.getTrend();

  return (
    <div className="insights">
      <h3 style={{ margin: '2em 0 1em 0' }}>Insights about your BP readings</h3>
      <p>
        Read <b>{readings.length}</b> heart readings recorded over a period of{' '}
        <b>{analytics.dayDiff}</b> days.
      </p>
      <p>
        {' '}
        Average Blood Pressure reading:{' '}
        <b className={averages.status}>
          {averages.avgDiastolic} / {averages.avgSystolic}
        </b>{' '}
      </p>{' '}
      <p>
        Maximum BP {maxReading.diastolic} / {maxReading.systolic}{' '}
      </p>{' '}
      <p>
        Minimum BP {minReading.diastolic} / {minReading.systolic}{' '}
      </p>{' '}
      <p>
        {' '}
        Mostly your BP is high during <b>{riskyTimeGroup}</b> or on
        <b> {riskyDay}</b>.
      </p>
      <p>
        {' '}
        <b>{abnormals.elevatedCount}</b> out of <b>{abnormals.total}</b> i.e,{' '}
        <b className={abnormals.status}>{abnormals.percentage}%</b> of your heart readings are
        elevated.
      </p>
      <p>
        Your last few BP readings suggest that your BP is <b>{analytics.getTrend()}</b>.
      </p>
    </div>
  );
}

export default InputAnalytics;
