import React from 'react';

import { ReactComponent as ArrowSVG } from '../../assets/Arrow-Right.svg';
import { Action } from '../action/action.component';

// Create interface for props
interface Props {
  serviceLabel: string;
  image: string;
  color: 'primary' | 'secondary' | 'accent-1';
}

export const ServiceCard = ({ serviceLabel, color, image }: Props) => {
  return (
    <div className="container" style={{ backgroundImage: `url(${image})` }}>
      <div className="left-bar" style={{ backgroundColor: `var(--color-${color})` }}>
        <div className="left-bar-text">{serviceLabel}</div>
      </div>
      <div className="bottom-bar">
        <Action as="link" styleType="cta" className="secondary" to="/contact-me">
          SEE MORE <ArrowSVG />
        </Action>
      </div>
    </div>
  );
};
