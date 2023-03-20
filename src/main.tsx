import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AboutMe } from './pages/about-me';
import { ContactMe } from './pages/contact-me';
import { Gallery } from './pages/gallery';
import { GalleryDetail } from './pages/gallery-detail';
import { Homepage } from './pages/homepage';
import { Navbar } from './components/navbar/navbar.component';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },

  {
    path: '/contact-me',
    element: <ContactMe />,
  },
  {
    path: '/about-me',
    element: <AboutMe />,
  },
  {
    path: '/gallery',
    element: <Gallery />,
  },
  {
    path: '/gallery/:galleryType',
    element: <GalleryDetail />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root'),
);
