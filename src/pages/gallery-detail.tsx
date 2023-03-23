// @flow
import * as React from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Services } from '../types/service';
import { Marquee } from '../components/marquee/marguee.component';
import { CTA } from '../components/cta/cta.component';

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
      <Marquee color="accent-1" />
      <CTA
        heading="Let’s create photography magic together."
        cta="Get started"
        styleType="secondary"
      />
    </div>
  );
};
