import ItemHome from '../Component/HomeComponent/Body/Home';
import ItemAbout from '../Component/HomeComponent/Body/About';
import ItemResume from '../Component/HomeComponent/Body/Resume';
import ItemPortfolio from '../Component/HomeComponent/Body/Portfolio';
import ItemBlog from '../Component/HomeComponent/Body/Blog';
import ItemContact from '../Component/HomeComponent/Body/Contact';

export const items = [
  { name: 'HOME', path: 'home', element: <ItemHome /> },
  { name: 'ABOUT', path: 'about', element: <ItemAbout /> },
  { name: 'RESUME', path: 'resume', element: <ItemResume /> },
  { name: 'PORTFOLIO', path: 'portfolio', element: <ItemPortfolio /> },
  { name: 'BLOG', path: 'blog', element: <ItemBlog /> },
  { name: 'CONTACT', path: 'contact', element: <ItemContact /> },
];
//
