import Header from '../Component/HomeComponent/NavBar/NavBar';
import Login from '../Component/LoginComponent/login';
import ItemHome from '../Component/HomeComponent/Body/Home';
import ItemAbout from '../Component/HomeComponent/Body/About';
import ItemPortfolios from '../Component/HomeComponent/Body/Portfolios/Portfolios';
import ItemPortfolio from '../Component/HomeComponent/Body/Portfolios/Portfolio';
import ItemMenuPortfolio from '../Component/HomeComponent/Body/Portfolios/MenuPort';
import ItemCorona from '../Component/HomeComponent/Body/CoronaTracking';
import TodoApp from '../view/Todo/Todo';
import WeatherApp from '../Component/WeatherApp/WeatherApp';
import PrivateRoute from '../service/PrivateRoute';
import TodoImage from '../assets/todo.jpg';
import WeatherImage from '../assets/weather.jpg';

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaDribbble,
  FaGithub,
} from 'react-icons/fa';
export const ROUTER_ARRAY = [
  {
    name: 'login',
    path: '/login',
    element: <Login />,
  },
  {
    name: '',
    path: '/',
    element: (
      <PrivateRoute>
        <Header />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        name: 'HOME',
        element: <ItemHome />,
      },
      {
        name: 'ABOUT',
        path: '/about',
        element: <ItemAbout />,
      },
      {
        name: 'PORTFOLIO',
        path: '/portfolios',
        element: <ItemPortfolios />,
        children: [
          {
            index: true,
            name: 'MenuPortfolio',
            element: <ItemMenuPortfolio />,
          },
          {
            name: 'portfolio',
            path: '/portfolios/',
            element: <ItemPortfolio />,
            children: [
              {
                name: 'todo',
                path: '/portfolios/todo',
                element: <TodoApp />,
              },
              {
                name: 'weather',
                path: '/portfolios/weather',
                element: <WeatherApp />,
              },
            ],
          },
        ],
      },

      {
        name: 'COVID 19',
        path: '/corona',
        element: <ItemCorona />,
      },
    ],
  },
];

export const ROUTER_NAVBAR = [
  {
    name: 'HOME',
    path: '/',
  },
  {
    name: 'ABOUT',
    path: '/about',
  },
  {
    name: 'PORTFOLIO',
    path: '/portfolios',
  },

  {
    name: 'COVID 19',
    path: '/corona',
  },
];

export const ROUTER_PORTFOLIO = [
  {
    path: '/portfolios/todo',
    name: 'Todo',
    image: TodoImage,
  },
  {
    path: '/portfolios/weather',
    name: 'Weather',
    image: WeatherImage,
  },
];

export const REDUX_CONSTANT = {
  LIST_TODO: 'LIST_TODO',
  COMPLETE_TODO: 'COMPLETE_TODO',
  DELETE_TODO: 'DELETE_TODO',
  CHANGE_PAGE: 'CHANGE_PAGE',
};

export const MONTHS_DAYS = [
  {
    Days: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
  },
  {
    Months: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
  },
];

export const EXPIRED_TIME_TOKEN = 1000 * 60 * 60 * 24;

export const COOKIES_NAME = {
  TOKEN: 'token',
};

export const ACTIVE_STYLE = {
  ACTIVE: {
    boxShadow: '0px 0px 10px #00bfff',
    borderRadius: '10px',
    cursor: 'pointer',
  },
  INACTIVE: {
    boxShadow: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
  },
};

export const SOCIAL_LOGO = [
  {
    href: 'https://www.facebook.com',
    as: FaFacebook,
    color: '#3b5998',
  },
  {
    href: 'https://www.github.com',
    as: FaGithub,
    color: '#FCD900',
  },

  {
    href: 'https://www.twitter.com',
    as: FaTwitter,
    color: '#1da1f2',
  },
  {
    href: 'https://www.instagram.com',
    as: FaInstagram,
    color: '#e1306c',
  },
  {
    href: 'https://www.dribbble.com',
    as: FaDribbble,
    color: '#ea4c89',
  },
];
export const BASE_URL = {
  URL_LOGIN: 'https://todo-nodemy.herokuapp.com/user/login',
  URL_CORONA: 'https://coronavirus-19-api.herokuapp.com/countries',
  URL_WEATHER: {
    KEY: '57827271cac88faca3c697ee3ae49428',
    BASE: 'https://api.openweathermap.org/data/2.5/',
    getWeather: function (city) {
      return this.BASE + 'weather?q=' + city + '&appid=' + this.KEY;
    },
  },
};
