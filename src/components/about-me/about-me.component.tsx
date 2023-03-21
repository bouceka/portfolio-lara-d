// @flow
import * as React from 'react';

import LaraImg from '../../assets/images/lara3.jpg';
import { Action } from '../action/action.component';

export const AboutMe = () => {
  return (
    <section className="about-section">
      <div className="row">
        <h1>ABOUT ME</h1>
      </div>

      <div className="about-section__container">
        <div className="row">
          <img src={LaraImg} alt="Profile Lara Drommond" />
          <div className="about-section__content p--xlarge">
            <p>Hi, I&apos;m Lara Drummond!</p>
            <p>
              I&apos;m an experienced professional photographer based in Courtenay, BC. I
              am passionate about creating powerful visuals that communicate a distinct
              message or feeling.
            </p>
            <p>
              I specialize in Editorial, Product, Fashion, and Food photography. I&apos;m
              always interested in taking on new + exciting projects that may fall outside
              of my usual specialties.
            </p>
            <p>I&apos;d love to work with you!</p>
            <Action to="/about-me" styleType="primary" as="link">
              Learn More
            </Action>
          </div>
        </div>
      </div>
    </section>
  );
};
