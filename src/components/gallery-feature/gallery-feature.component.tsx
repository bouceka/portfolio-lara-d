// @flow
import * as React from 'react';
import { ImageCarousel } from './image-carousel.component';
interface Props {
  imageList: { alt: string; imgURL: string }[];
  year: string;
  title: string;
}
export const GalleryFeature = ({ title, year, imageList }: Props) => {
  return (
    <section className="gallery-feature">
      <div className="gallery-feature__text">
        <h5 className="gallery-feature__title">{title}</h5>
        <h6 className="gallery-feature__year">{year}</h6>
      </div>
      <div className="gallery-feature__image-slider">
        <ImageCarousel imageList={imageList} />
      </div>
    </section>
  );
};
