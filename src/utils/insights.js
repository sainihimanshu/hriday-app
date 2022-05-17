import { toMoment } from '.';

class Insights {
  constructor(readings) {
    this.readings = readings;

    this.readings.forEach(reading => {
      const recordedAt = toMoment(reading.recordedAt);
      reading.day = recordedAt.format('dddd');
      const hour = recordedAt.hour();
      if (hour >= 4 && hour < 12) reading.timeGroup = 'Morning';
      else if (hour >= 12 && hour < 16) reading.timeGroup = 'Afternoon';
      else if (hour >= 16 && hour < 20) reading.timeGroup = 'Evening';
      else if (hour >= 20) reading.timeGroup = 'Night';
    });
    this.numReadings = readings.length;

    const firstReading = readings[0];
    const lastReading = readings[readings.length - 1];
    this.dayDiff = toMoment(lastReading.recordedAt).diff(toMoment(firstReading.recordedAt), 'day');
  }

  isNormalReading = reading => {
    return reading.systolic <= 90 && reading.diastolic <= 130;
  };

  _getAvgSystolic = () => {
    return (
      this.readings.reduce((acc, row) => {
        acc += +row.systolic;
        return acc;
      }, 0) / this.numReadings
    ).toFixed(1);
  };

  _getAvgDiastolic = () => {
    return (
      this.readings.reduce((acc, row) => {
        acc += +row.diastolic;
        return acc;
      }, 0) / this.numReadings
    ).toFixed(1);
  };

  getRiskyTimeGroup = () => {
    const timeGroupMode = this.readings.reduce((acc, reading) => {
      if (this.isNormalReading(reading)) return acc;

      if (!acc[reading.timeGroup]) acc[reading.timeGroup] = 0;
      acc[reading.timeGroup]++;
      return acc;
    }, {});

    let mode = 0;
    let riskyTimeGroup = '';

    for (const timeGroup in timeGroupMode) {
      if (timeGroupMode[timeGroup] > mode) {
        mode = timeGroupMode[timeGroup];
        riskyTimeGroup = timeGroup;
      }
    }

    return riskyTimeGroup;
  };

  getRiskyDay = () => {
    const dayMode = this.readings.reduce((acc, reading) => {
      if (this.isNormalReading(reading)) return acc;

      if (!acc[reading.day]) acc[reading.day] = 0;
      acc[reading.day]++;
      return acc;
    }, {});

    let mode = 0;
    let riskyDay = '';

    for (const day in dayMode) {
      if (dayMode[day] > mode) {
        mode = dayMode[day];
        riskyDay = day;
      }
    }

    return riskyDay;
  };

  getDiastolicStatus = diastolic => {
    let status = 'normal';
    if (diastolic > 150) status = 'extreme';
    else if (diastolic > 140) status = 'high';
    else if (diastolic > 130) status = 'elevated';

    return status;
  };

  getAverages = () => {
    const avgDiastolic = Math.round(this._getAvgDiastolic());
    const avgSystolic = Math.round(this._getAvgSystolic());
    const status = this.getDiastolicStatus(avgDiastolic);

    return { avgDiastolic, avgSystolic, status };
  };

  getAbnormalStats = () => {
    const elevatedCount = this.readings.reduce((acc, reading) => {
      if (!this.isNormalReading(reading)) return acc + 1;
      return acc;
    }, 0);

    const percentage = Math.ceil((elevatedCount / this.readings.length) * 100);

    let status = 'normal';

    if (percentage > 80) status = 'extreme';
    else if (percentage > 60) status = 'high';
    else if (percentage > 40) status = 'elevated';

    return {
      percentage,
      elevatedCount,
      total: this.readings.length,
      status,
    };
  };

  getMaxReading = () => {
    const max = Math.max(...this.readings.map(row => row.diastolic));

    return this.readings.find(row => row.diastolic === max);
  };

  getMinReading = () => {
    const min = Math.min(...this.readings.map(row => row.diastolic));
    return this.readings.find(row => row.diastolic === min);
  };

  getTrend = () => {
    const diastolics = this.readings.slice(10).map(row => row.diastolic);
    let aggregate = 0;

    for (let idx = 0; idx < diastolics.length; idx++) {
      const prev = diastolics[idx];
      const next = diastolics[idx + 1];

      if (prev && next) {
        const diff = next - prev;
        if (diff > 0) aggregate++;
        else if (diff < 0) aggregate--;
      }
    }

    let trend = 'stable';

    if (aggregate > 5) trend = 'increasing fastly';
    else if (aggregate > 0) trend = 'increasing';
    else if (aggregate < 0) trend = 'decreasing';

    return trend;
  };
}

export default Insights;
