// @flow
import './navbar.styles.scss';

import * as React from 'react';

import { Action } from '../action/action.component';

export const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Action styleType="header" to={'/gallery'}>
              Gallery
            </Action>
          </li>
          <li>
            <Action styleType="header" to={'/gallery'}>
              Gallery
            </Action>
          </li>
          <li>
            <Action styleType="header" to={'/gallery'}>
              Gallery
            </Action>
          </li>
        </ul>
      </nav>
    </header>
  );
};
