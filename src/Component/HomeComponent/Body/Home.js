import React from 'react';
import Avatar from '../../../assets/avatar.jpg';
import { FaFacebook, FaTwitter, FaInstagram, FaDribbble } from 'react-icons/fa';
import './style/Home.scss';
const Home = () => {
  return (
    <div className="Home">
      <div className="Home__Avt">
        <img src={Avatar} alt="avatar" />
      </div>
      <div className="Home__Info">
        <span className="Home__Info__Name">NGUYEN THANH TAN</span>
        <span className="Home__Info__Des">
          Im a Front-End developer, I love to learn new things and
        </span>{' '}
        <span className="Home__Info__Des">
          am passionate about web development.
        </span>
        <div className="Home__Info__Social">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="Home__Info__Social__Icon" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="Home__Info__Social__Icon" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="Home__Info__Social__Icon" />
          </a>
          <a
            href="https://www.dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDribbble className="Home__Info__Social__Icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
