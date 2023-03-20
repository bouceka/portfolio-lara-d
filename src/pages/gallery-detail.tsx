// @flow
import * as React from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export type Services = 'product' | 'fashion' | 'food' | 'editorial';

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
  return <div>{galleryType}</div>;
};
