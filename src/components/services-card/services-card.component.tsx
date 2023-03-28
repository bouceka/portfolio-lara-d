import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as ArrowSVG } from '../../assets/Arrow-Right.svg';
import { Services } from '../../types/service';

interface Props {
  serviceLabel: string;
  image: string;
  color: 'primary' | 'secondary' | 'accent-1';
  link: Services;
}

export const ServiceCard = ({ serviceLabel, color, image, link }: Props) => {
  return (
    <Link className="service-card-link" to={link}>
      <div
        className="service-card-container"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="left-bar" style={{ backgroundColor: `var(--color-${color})` }}>
          <div className="left-bar-text">{serviceLabel}</div>
        </div>
        <div className="bottom-bar">
          <span className="btn btn--cta secondary">
            SEE MORE <ArrowSVG />
          </span>
        </div>
      </div>
    </Link>
  );
};
