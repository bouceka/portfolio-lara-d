// @flow
import * as React from 'react';
import { SuperSEO } from 'react-super-seo';

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
    <>
      <SuperSEO
        title="GALLERY | Lara Drummond Photography"
        description="A collection of Lara Drummond Photography's latest works in Product, Food, Editorial, and Fashion Photography."
      />
      <section className="page">
        <div className="row">
          <Title
            title="Portfolio"
            subtitle="my goal is to bring your creative vision to life"
          />
          <div className="service-cards-group">
            <div className="service-cards-container">
              <ServiceCard
                serviceLabel="PRODUCT"
                color="secondary"
                image={ProductImage}
                link="product"
              />
              <ServiceCard
                serviceLabel="FOOD"
                color="accent-1"
                image={FoodImage}
                link="food"
              />
            </div>
            <div className="service-cards-container">
              <ServiceCard
                serviceLabel="EDITORIAL"
                color="accent-1"
                image={EditorialImage}
                link="editorial"
              />
              <ServiceCard
                serviceLabel="FASHION"
                color="primary"
                image={FashionImage}
                link="fashion"
              />
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
    </>
  );
};
