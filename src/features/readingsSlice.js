import { createSlice } from '@reduxjs/toolkit';
import { cloneDeep } from 'lodash';

const transformReadings = readings => {
  const newReadings = cloneDeep(readings);
  newReadings.forEach(row => {
    row.diastolic = Number(row.diastolic);
    row.systolic = Number(row.systolic);
    row.heartRate = Number(row.heartRate);
  });
  return newReadings;
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
      state.readings = transformReadings(action.payload);
      state.fileParsed = true;
    },
  },
});

export const { setReadings, setFileParsed } = readingsSlice.actions;

export default readingsSlice.reducer;
