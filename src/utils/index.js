import moment from 'moment';

const dateFormat = 'DD/MM/YY, HH:mm';

export const toMoment = dateStr => {
  return moment(dateStr, dateFormat);
};
