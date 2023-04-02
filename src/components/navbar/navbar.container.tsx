// @flow
import * as React from 'react';
import { useEffect, useState } from 'react';

import ScrollToTop from '../../helper/scroll-top';
import { Footer } from '../footer/footer.component';
import { Navbar } from './navbar.component';

interface Props {
  styleType?: 'black' | 'white';
  WrappedComponent: React.FC;
}

export const NavbarContainer = ({ WrappedComponent, styleType = 'black' }: Props) => {
  return (
    <>
      <ScrollToTop />
      {styleType === 'black' ? <Navbar styleType={styleType} /> : null}
      <WrappedComponent />
      <Footer />
    </>
  );
};
