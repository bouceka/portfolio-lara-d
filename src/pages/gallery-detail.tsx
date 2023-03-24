// @flow
import * as React from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { CTA } from '../components/cta/cta.component';
import { Marquee } from '../components/marquee/marguee.component';
import { Services } from '../types/service';
import { GalleryFeature } from '../components/gallery-feature/gallery-feature.component';
import { FASHION_DATA_FLEE, FASHION_DATA_WANDERERS } from '../data/gallery-data';
import { Title } from '../components/title/title.component';
import { Action } from '../components/action/action.component';

const services: Services[] = ['product', 'fashion', 'food', 'editorial'];

export const GalleryDetail = () => {
  const { galleryType } = useParams<{
    galleryType: Services;
  }>();

  const navigate = useNavigate();
  useEffect(() => {
    if (!(galleryType && services.includes(galleryType))) {
      navigate('/');
    }
  }, []);
  return (
    <div className="page">
      <div className="row">
        <Title title="FASHION PORTFOLIO" />
      </div>
      <GalleryFeature
        imageList={FASHION_DATA_WANDERERS}
        year="2023"
        title="THE WANDERERS"
      />
      <GalleryFeature imageList={FASHION_DATA_FLEE} year="2022" title="FLEE & FLY co." />
      <div className="gallery-cta">
        <Action as="link" to="/gallery" styleType="primary">
          back to gallery
        </Action>
      </div>
      <Marquee color="accent-1" />
      <CTA
        heading="Let’s create photography magic together."
        cta="Get started"
        styleType="secondary"
      />
    </div>
  );
};
