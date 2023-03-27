// @flow

import './featured-in.styles.scss';

import * as React from 'react';

import { Title } from '../title/title.component';

export default function FeaturedIn() {
  return (
    <section className="featured-section row">
      <Title title="FEATURED IN:" />
      <div className="featured-logos-container">
        <div className="featured-logo">test1</div>
        <div className="featured-logo">test2</div>
        <div className="featured-logo">test3</div>
        <div className="featured-logo">test4</div>
        <div className="featured-logo">test5</div>
      </div>
    </section>
  );
}
