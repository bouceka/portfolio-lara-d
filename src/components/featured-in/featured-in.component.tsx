// @flow

import './featured-in.styles.scss';

import * as React from 'react';

import BoulevardLogo from '../../assets/images/boulevard-logo.png';
import CvCollectiveLogo from '../../assets/images/cv-collective-logo.png';
import EdibleVancouverLogo from '../../assets/images/edible-vancouver-island-logo.png';
import TrioLogo from '../../assets/images/trio-logo.png';
import YamLogo from '../../assets/images/yam-logo.png';
import { Title } from '../title/title.component';

export const FeaturedIn = () => {
  return (
    <section className="row">
      <div className="featured-section">
        <Title title="FEATURED IN:" />
        <div className="featured-logos-container">
          <div className="featured-logo">
            <img src={TrioLogo} alt="Trio Magazine Logo" />
          </div>
          <div className="featured-logo">
            <img src={YamLogo} alt="Yam Magazine Logo" />
          </div>
          <div className="featured-logo">
            <img src={CvCollectiveLogo} alt="CV Collective Logo" />
          </div>
          <div className="featured-logo">
            <img src={BoulevardLogo} alt="Boulevard Magazine Logo" />
          </div>
          <div className="featured-logo">
            <img src={EdibleVancouverLogo} alt="Edible Vancouver Island Logo" />
          </div>
        </div>
      </div>
    </section>
  );
};
