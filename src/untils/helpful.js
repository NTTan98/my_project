import { MONTHS_DAYS } from '../bootstrap/constants';

const dateBuilder = d => {
  let day = MONTHS_DAYS[0].Days[d.getDay()];
  let date = d.getDate();
  let month = MONTHS_DAYS[1].Months[d.getMonth()];
  let year = d.getFullYear();
  return `${day} ${date} ${month} ${year}`;
};
export default dateBuilder;
