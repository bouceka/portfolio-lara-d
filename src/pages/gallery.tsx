// @flow
import * as React from 'react';

import EditorialImage from '../assets/images/CB-LaraDrummond-Moodboard-25.jpg';
import FashionImage from '../assets/images/CB-LD-Fashion-1-8.jpg';
import FoodImage from '../assets/images/CB-LD-Food4.jpg';
import ProductImage from '../assets/images/CB-LD-Product5.jpg';
import { CTA } from '../components/cta/cta.component';
import { Marquee } from '../components/marquee/marguee.component';
import { ServiceCard } from '../components/services-card/services-card.component';
import { Title } from '../components/title/title.component';

export const Gallery = () => {
  return (
    <section className="page">
      <div className="row">
        <Title
          title="Portfolio"
          subtitle="my goal is to bring your creative vision to life"
        />
        <div className="service-card-group">
          <div className="service-card-container">
            <ServiceCard serviceLabel="PRODUCT" color="secondary" image={ProductImage} />
            <ServiceCard serviceLabel="FOOD" color="accent-1" image={FoodImage} />
          </div>
          <div className="service-card-container">
            <ServiceCard
              serviceLabel="EDITORIAL"
              color="accent-1"
              image={EditorialImage}
            />
            <ServiceCard serviceLabel="FASHION" color="primary" image={FashionImage} />
          </div>
        </div>
      </div>
      <Marquee color="secondary" />
      <CTA
        cta={`LET'S WORK TOGETHER`}
        styleType="primary"
        heading="Interested in booking a shoot?"
      />
    </section>
  );
};
