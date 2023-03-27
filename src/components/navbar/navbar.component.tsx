// @flow

import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

import BlackLogoH from '../../assets/black-logo-h.png';
import WhiteLogoH from '../../assets/white-logo-h.png';

interface Props {
  styleType: 'black' | 'white';
}

export const Navbar = ({ styleType = 'black' }: Props) => {
  return (
    <header className={`header ${styleType}`}>
      <div className="row">
        <nav>
          <Link to="/">
            <img
              className="header__logo"
              src={styleType === 'black' ? BlackLogoH : WhiteLogoH}
              alt="Lara Drummond logo"
            />
          </Link>
          <ul>
            <li>
              <NavLink className="btn btn--header" to={'/'}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="btn btn--header" to={'/gallery'}>
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
