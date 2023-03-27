// @flow
import * as React from 'react';
import { useEffect, useState } from 'react';

import { Footer } from '../footer/footer.component';
import { Navbar } from './navbar.component';

interface Props {
  styleType?: 'black' | 'white';
  WrappedComponent: React.FC;
}

export const NavbarContainer = ({ WrappedComponent, styleType = 'black' }: Props) => {
  return (
    <>
      {styleType === 'black' ? <Navbar styleType={styleType} /> : null}
      <WrappedComponent />
      <Footer />
    </>
  );
};
