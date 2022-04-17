class Analytics {
  constructor(readings) {
    this.readings = readings;

    this.readings.forEach(reading => {
      const hour = reading.recordedAt.hour();
      if (hour >= 4 && hour < 12) reading.timeGroup = 'Morning';
      else if (hour >= 12 && hour < 16) reading.timeGroup = 'Afternoon';
      else if (hour >= 16 && hour < 20) reading.timeGroup = 'Evening';
      else if (hour >= 20) reading.timeGroup = 'Night';
      console.log(hour, reading.timeGroup);
    });
    this.numReadings = readings.length;
  }

  isNormalReading = reading => {
    return reading.systolic <= 90 && reading.diastolic <= 130;
  };

  getAvgSystolic = () => {
    return (
      this.readings.reduce((acc, row) => {
        acc += +row.systolic;
        return acc;
      }, 0) / this.numReadings
    ).toFixed(1);
  };

  getAvgDiastolic = () => {
    return (
      this.readings.reduce((acc, row) => {
        acc += +row.diastolic;
        return acc;
      }, 0) / this.numReadings
    ).toFixed(1);
  };

  getAggravatingTimeGroup = () => {
    console.log(this.readings.map(row => row.timeGroup));
    const timeGroupMode = this.readings.reduce((acc, reading) => {
      if (this.isNormalReading(reading)) return acc;

      if (!acc[reading.timeGroup]) acc[reading.timeGroup] = 0;
      acc[reading.timeGroup]++;
      return acc;
    }, {});

    console.log(timeGroupMode);

    let mode = 0;
    let aggravatingTimeGroup = '';

    for (const timeGroup in timeGroupMode) {
      if (timeGroupMode[timeGroup] > mode) {
        mode = timeGroupMode[timeGroup];
        aggravatingTimeGroup = timeGroup;
      }
    }

    return { aggravatingTimeGroup, mode };
  };
}

export default Analytics;
