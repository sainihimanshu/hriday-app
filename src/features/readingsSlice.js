import moment from 'moment';

import { createSlice } from '@reduxjs/toolkit';
const dateFormat = 'DD/MM/YY, HH:mm';

const transformReadings = readings => {
  readings.forEach(row => {
    row.diastolic = Number(row.diastolic);
    row.systolic = Number(row.systolic);
    row.heartRate = Number(row.heartRate);
    row.recordedAt = moment(row.recordedAt, dateFormat);
  });
};

const initialState = {
  fileParsed: false,
  readings: [],
};

export const readingsSlice = createSlice({
  name: 'readings',
  initialState,
  reducers: {
    setReadings: (state, action) => {
      transformReadings(action.payload);
      state.readings = action.payload;
      state.fileParsed = true;
    },
  },
});

export const { setReadings, setFileParsed } = readingsSlice.actions;

export default readingsSlice.reducer;
