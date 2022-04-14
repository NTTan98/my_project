import { MONTHS_DAYS } from '../bootstrap/constants';

const dateBuilder = d => {
  let day = MONTHS_DAYS[0].Days[d.getDay()];
  let date = d.getDate();
  let month = MONTHS_DAYS[1].Months[d.getMonth()];
  let year = d.getFullYear();
  return `${day} ${date} ${month} ${year}`;
};
export default dateBuilder;

export const functionCookie = {
  createCookie: (cookieName, cookieValue, timeToExpire) => {
    const date = new Date();
    date.setTime(date.getTime() + timeToExpire);
    document.cookie = `${cookieName} = ${cookieValue};expires = ${date.toUTCString()}`;
  },
  getCookie: cname => {
    let name = cname + '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  },
  deleteCookie: name => {
    document.cookie =
      name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  },
};
