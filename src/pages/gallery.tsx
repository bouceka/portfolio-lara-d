// @flow
import * as React from 'react';
import { SuperSEO } from 'react-super-seo';

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
                image={
                  'https://res.cloudinary.com/dufli3jum/image/upload/v1679542322/LaraPorfolio/Product/medium/CB-LD-Product5_nrt63w.jpg'
                }
                link="product"
              />
              <ServiceCard
                serviceLabel="FOOD"
                color="accent-1"
                image={
                  'https://res.cloudinary.com/dufli3jum/image/upload/v1679542250/LaraPorfolio/Food/small/CB-LD-Food4_o1madu.jpg'
                }
                link="food"
              />
            </div>
            <div className="service-cards-container">
              <ServiceCard
                serviceLabel="EDITORIAL"
                color="accent-1"
                image={
                  'https://res.cloudinary.com/dufli3jum/image/upload/v1679542009/LaraPorfolio/Editorial/horses/medium/CB-LaraDrummond-Moodboard-25_qptc0q.webp'
                }
                link="editorial"
              />
              <ServiceCard
                serviceLabel="FASHION"
                color="primary"
                image={
                  'https://res.cloudinary.com/dufli3jum/image/upload/v1679542197/LaraPorfolio/Fashion/travellers/medium/CB-LD-Fashion-1-8_pp1cze.webp'
                }
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
