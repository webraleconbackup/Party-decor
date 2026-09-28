import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Birthday from '../pages/pages/Birthday';
import Babyshower from '../pages/pages/Babyshower';
import Babywelcome from '../pages/pages/Babywelcome';
import Justmarried from '../pages/pages/Justmarried';
import Naming from '../pages/pages/Naming';
import GetTogether from '../pages/pages/GetTogether';
import Haldi from '../pages/pages/Haldi';
import Anniversary from '../pages/pages/Anniversary';
import GalleryPage from '../pages/pages/GalleryPage';
import AboutUs from '../pages/pages/AboutUs';
import ContactUs from '../pages/pages/ContactUs';
const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/birthday-decoration',
        element: <Birthday />,
      },
         {
        path: '/anniversary-decoration',
        element: <Anniversary />,
      },
      {
        path: '/baby-shower-decoration',
        element: <Babyshower />,
      },
      {
        path: '/baby-welcome-decoration',
        element: <Babywelcome />,
      },
      {
        path: '/just-married-decoration',
        element: <Justmarried />,
      },
      {
        path: '/naming-ceremony-decoration',
        element: <Naming />,
      },
      {
        path: '/get-together-decoration',
        element: <GetTogether />,
      },
      {
        path: '/haldi-decoration',
        element: <Haldi />,
      },
      {
        path: '/gallery',
        element: <GalleryPage />,
      },
       {
        path: '/aboutus',
        element: <AboutUs />,
      },
      {
        path: '/contactus',
        element: <ContactUs />,
      }
    ],
  },
]);

export default Router;
