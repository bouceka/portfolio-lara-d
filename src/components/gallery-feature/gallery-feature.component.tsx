// @flow
import * as React from 'react';
interface Props {
  imageList: { alt: string; imgURL: string };
  year: string;
  title: string;
}
export const GalleryFeature = ({ title, year, imageList }: Props) => {
  return (
    <section className="gallery-feature">
      <div className="gallery-feature__text">
        <h5 className="recent-projects-item__title">{title}</h5>
        <span className="recent-projects-item__year">{year}</span>
      </div>
      <div className="gallery-feature__image-slider"></div>
    </section>
  );
};
