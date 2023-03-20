// @flow
import './footer.styles.scss';

import * as React from 'react';
import { Link } from 'react-router-dom';

import CircleLogo from '../../assets/black-logo-c.png';
import { Action } from '../action/action.component';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__content row">
          <Link to="/">
            <img src={CircleLogo} alt="Lara Drummond logo" />
          </Link>
          <ul className="footer__link-group">
            <li>
              <ul>
                <li className="footer__title">Menu</li>
                <li>
                  <Action as="link" styleType="link" to="/gallery">
                    Gallery
                  </Action>
                </li>
                <li>
                  <Action as="link" styleType="link" to="/about-me">
                    About
                  </Action>
                </li>
                <li>
                  <Action as="link" styleType="link" to="/contact-me">
                    Contact
                  </Action>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li className="footer__title">Social</li>
                <li>
                  <Action as="link" styleType="link" to="/contact-me">
                    Instagram
                  </Action>
                </li>
                <li>
                  <Action as="link" styleType="link" to="/contact-me">
                    Facebook
                  </Action>
                </li>
                <li>
                  <Action as="link" styleType="link" to="#!">
                    Pinterest
                  </Action>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__content row">
          <span>Copyright (C) 2023 CRAM Co.</span>
          <Action as="link" styleType="link" to="#!">
            Privacy Policy
          </Action>
        </div>
      </div>
    </footer>
  );
};
