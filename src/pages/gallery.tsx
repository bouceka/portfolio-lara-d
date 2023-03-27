// @flow
import * as React from 'react';

import EditorialImage from '../assets/images/CB-LaraDrummond-Moodboard-25.jpg';
import FashionImage from '../assets/images/CB-LD-Fashion-1-8.jpg';
import FoodImage from '../assets/images/CB-LD-Food4.jpg';
import ProductImage from '../assets/images/CB-LD-Product5.jpg';
import { ServiceCard } from '../components/services-card/services-card.component';
import { Title } from '../components/title/title.component';

export const Gallery = () => {
  return (
    <div>
      <Title title="Portfolio" />
      <div className="service-card-container">
        <ServiceCard serviceLabel="PRODUCT" color="secondary" image={ProductImage} />
        <ServiceCard serviceLabel="FOOD" color="accent-1" image={FoodImage} />
      </div>
      <div className="service-card-container">
        <ServiceCard serviceLabel="EDITORIAL" color="accent-1" image={EditorialImage} />
        <ServiceCard serviceLabel="FASHION" color="primary" image={FashionImage} />
      </div>
    </div>
  );
};
