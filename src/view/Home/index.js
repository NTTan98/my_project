import React from 'react';
import Header from '../../Component/HomeComponent/NavBar/NavBar';
import Login from '../../Component/LoginComponent/login';
import ItemHome from '../../Component/HomeComponent/Body/Home';
import ItemAbout from '../../Component/HomeComponent/Body/About';
import ItemResume from '../../Component/HomeComponent/Body/Resume';
import ItemPortfolios from '../../Component/HomeComponent/Body/Portfolios/Portfolios';
import ItemPortfolio from '../../Component/HomeComponent/Body/Portfolios/Portfolio';
import ItemMenuPortfolio from '../../Component/HomeComponent/Body/Portfolios/MenuPort';
import ItemBlog from '../../Component/HomeComponent/Body/Blog';
import ItemContact from '../../Component/HomeComponent/Body/Contact';
import TodoApp from '../../view/Todo/Todo';
import WeatherApp from '../../Component/WeatherApp/WeatherApp';
import { useRoutes } from 'react-router-dom';
import './style.scss';
const Home = () => {
  let RouterObject = [
    {
      name: 'login',
      path: '/',
      element: <Login />,
    },
    {
      name: 'header',
      path: '/header',
      element: <Header />,
      children: [
        {
          name: 'home',
          path: '/header/home',
          element: <ItemHome />,
        },
        {
          name: 'about',
          path: '/header/about',
          element: <ItemAbout />,
        },
        {
          name: 'resume',
          path: '/header/resume',
          element: <ItemResume />,
        },
        {
          name: 'portfolios',
          path: '/header/portfolios',
          element: <ItemPortfolios />,
          children: [
            {
              index: true,
              name: 'MenuPortfolio',
              element: <ItemMenuPortfolio />,
            },
            {
              name: 'portfolio',
              path: '/header/portfolios/:id',
              element: <ItemPortfolio />,
              children: [
                {
                  name: 'todo',
                  path: '/header/portfolios/:id/todo',
                  element: <TodoApp />,
                },
                {
                  name: 'weather',
                  path: '/header/portfolios/:id/weather',
                  element: <WeatherApp />,
                },
              ],
            },
          ],
        },
        {
          name: 'blog',
          path: '/header/blog',
          element: <ItemBlog />,
        },
        {
          name: 'contact',
          path: '/header/contact',
          element: <ItemContact />,
        },
      ],
    },
  ];
  let element = useRoutes(RouterObject);
  return <div>{element}</div>;
};

export default Home;
