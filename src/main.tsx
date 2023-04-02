import './styles/App.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { NavbarContainer } from './components/navbar/navbar.container';
import { AboutMe } from './pages/about-me';
import { ContactMe } from './pages/contact-me';
import { Gallery } from './pages/gallery';
import { GalleryDetail } from './pages/gallery-detail';
import { Homepage } from './pages/homepage';
import ScrollToTop from './helper/scroll-top';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarContainer WrappedComponent={Homepage} styleType="white" />,
  },

  {
    path: '/contact-me',
    element: <NavbarContainer WrappedComponent={ContactMe} />,
  },
  {
    path: '/about-me',
    element: <NavbarContainer WrappedComponent={AboutMe} />,
  },
  {
    path: '/gallery',
    element: <NavbarContainer WrappedComponent={Gallery} />,
  },
  {
    path: '/gallery/:galleryType',
    element: <NavbarContainer WrappedComponent={GalleryDetail} />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root'),
);
