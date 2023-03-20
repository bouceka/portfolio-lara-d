// @flow
import * as React from 'react';

import { Footer } from '../footer/footer.component';
import { Navbar } from './navbar.component';

export const NavbarContainer = (WrappedComponent: React.FC) => {
  return (
    <>
      <Navbar />
      <WrappedComponent />
      <Footer />
    </>
  );
};
