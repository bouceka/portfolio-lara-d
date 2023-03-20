import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { NavbarContainer } from './components/navbar/navbar.container';
import { AboutMe } from './pages/about-me';
import { ContactMe } from './pages/contact-me';
import { Gallery } from './pages/gallery';
import { GalleryDetail } from './pages/gallery-detail';
import { Homepage } from './pages/homepage';

const router = createBrowserRouter([
  {
    path: '/',
    element: NavbarContainer(Homepage),
  },

  {
    path: '/contact-me',
    element: NavbarContainer(ContactMe),
  },
  {
    path: '/about-me',
    element: NavbarContainer(AboutMe),
  },
  {
    path: '/gallery',
    element: NavbarContainer(Gallery),
  },
  {
    path: '/gallery/:galleryType',
    element: NavbarContainer(GalleryDetail),
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root'),
);
