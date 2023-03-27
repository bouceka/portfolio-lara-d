// @flow
import * as React from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Action } from '../components/action/action.component';
import { CTA } from '../components/cta/cta.component';
import { GalleryFeature } from '../components/gallery-feature/gallery-feature.component';
import { Marquee } from '../components/marquee/marguee.component';
import { Title } from '../components/title/title.component';
import { FASHION_DATA_GALLERY } from '../data/gallery-data';
import { Services } from '../types/service';

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
        <Title title={`${galleryType?.toUpperCase()} GALLERY`} />
      </div>
      {FASHION_DATA_GALLERY[galleryType || 'editorial'].map((imageData, index) => (
        <GalleryFeature
          key={index}
          imageList={imageData.imageData}
          year={imageData.year}
          title={imageData.title}
        />
      ))}
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
