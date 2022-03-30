import React from 'react';
import { Link } from 'react-router-dom';

const MenuPort = () => {
  return (
    <div>
      <ul className="navbar">
        <li>
          <Link to="/header/portfolios/:id/todo">Todo</Link>
        </li>
        <li>
          <Link to="/header/portfolios/:id/weather">Weather</Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuPort;
