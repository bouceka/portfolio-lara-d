// @flow
import '../styles/pages/about-me.styles.scss';

import * as React from 'react';

import { ReactComponent as ArrowSVG } from '../assets/Arrow-Right.svg';
import { Action } from '../components/action/action.component';
import { ServiceCard } from '../components/servicesCard/servicesCard.component';

export const AboutMe = () => {
  return (
    <div>
      <ServiceCard serviceLabel="EDITORIAL" />
    </div>
  );
};
