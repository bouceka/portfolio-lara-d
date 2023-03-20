// @flow
import * as React from 'react';

import { Navbar } from './navbar.component';

export const NavbarContainer = (WrappedComponent: React.FC) => {
  return (
    <>
      <Navbar />
      <WrappedComponent />
    </>
  );
};
