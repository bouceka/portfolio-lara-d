// @flow

import * as React from 'react';

import HeroImage from '../../assets/images/CB-LD-Fashion-1-2-small.webp';

export const Hero = () => {
  return (
    <section className="hero">
      <div className="overlay"></div>
      <img src={HeroImage} alt="Editorial from Lara Drummond" />
    </section>
  );
};
