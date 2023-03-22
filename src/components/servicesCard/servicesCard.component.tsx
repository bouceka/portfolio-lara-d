import './servicesCard.styles.scss';

import React from 'react';

import { Action } from '../action/action.component';

// Create interface for props
interface Props {
  serviceLabel: string;
  image: string;
  color: 'primary' | 'secondary' | 'accent-1';
}

export const ServiceCard = ({ serviceLabel, color, image, ...props }: Props) => {
  return (
    <div className="container" style={{ backgroundImage: `url(${image})` }}>
      <div className="leftBar" style={{ backgroundColor: `var(--color-${color})` }}>
        <div className="leftBar-Text">{serviceLabel}</div>
      </div>
      <div className="bottomBar">
        <Action styleType="cta" to={'/gallery'} as={'link'}>
          SEE MORE
        </Action>
      </div>
    </div>
  );
};
