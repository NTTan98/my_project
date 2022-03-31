export const getAPIWeather = {
  key: '57827271cac88faca3c697ee3ae49428',
  base: 'https://api.openweathermap.org/data/2.5/',
  getWeather: function (city) {
    return this.base + 'weather?q=' + city + '&appid=' + this.key;
  },
};
