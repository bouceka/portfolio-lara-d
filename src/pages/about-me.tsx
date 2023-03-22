// @flow
import '../styles/pages/about-me.styles.scss';

import * as React from 'react';

import EditorialImage from '../assets/images/CB-LaraDrummond-Moodboard-25.jpg';
import FashionImage from '../assets/images/CB-LD-Fashion-1-8.jpg';
import FoodImage from '../assets/images/CB-LD-Food4.jpg';
import ProdctImage from '../assets/images/CB-LD-Product5.jpg';
import { ServiceCard } from '../components/servicesCard/servicesCard.component';

export const AboutMe = () => {
  return (
    <div>
      <div className="service-card-container">
        <ServiceCard serviceLabel="PRODUCT" color="secondary" image={ProdctImage} />
        <ServiceCard serviceLabel="FOOD" color="accent-1" image={FoodImage} />
        <ServiceCard serviceLabel="EDITORIAL" color="accent-1" image={EditorialImage} />
        <ServiceCard serviceLabel="FASHION" color="primary" image={FashionImage} />
      </div>
    </div>
  );
};
