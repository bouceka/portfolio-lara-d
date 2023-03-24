import React from 'react';

import { ReactComponent as ArrowSVG } from '../../assets/Arrow-Right.svg';
import { Services } from '../../types/service';
import { Action } from '../action/action.component';

// Create interface for props
interface Props {
  serviceLabel: string;
  image: string;
  color: 'primary' | 'secondary' | 'accent-1';
  link: Services;
}

export const ServiceCard = ({ serviceLabel, color, image, link }: Props) => {
  return (
    <div className="container" style={{ backgroundImage: `url(${image})` }}>
      <div className="left-bar" style={{ backgroundColor: `var(--color-${color})` }}>
        <div className="left-bar-text">{serviceLabel}</div>
      </div>
      <div className="bottom-bar">
        <Action as="link" styleType="cta" className="secondary" to={link}>
          SEE MORE <ArrowSVG />
        </Action>
      </div>
    </div>
  );
};
