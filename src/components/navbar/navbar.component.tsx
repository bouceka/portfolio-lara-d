// @flow
import './navbar.styles.scss';
import '../action/action.styles.scss';

import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

import BlackLogoH from '../../assets/black-logo-h.png';
import { Action } from '../action/action.component';

export const Navbar = () => {
  return (
    <header className="header">
      <div className="row">
        <nav>
          <Link to="/">
            <img className="header__logo" src={BlackLogoH} alt="Lara Drummond logo" />
          </Link>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `btn btn--header ${isActive ? 'active' : ''}`
                }
                to={'/gallery'}
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink className="btn btn--header" to={'/about-me'}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="btn btn--header" to={'/contact-me'}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
