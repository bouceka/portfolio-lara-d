// @flow
import * as React from 'react';
import { useState } from 'react';

import { ReactComponent as ChevronLeft } from '../../assets/cheveron-left.svg';
import { ReactComponent as ChevronRight } from '../../assets/cheveron-right.svg';

type Props = {
  imageList: { alt: string; imgURL: string }[];
};
export const ImageCarousel = ({ imageList }: Props) => {
  const [isCarouselLeft, setIsCarouselLeft] = useState(true);

  return (
    <div className="gallery-feature__image-slider">
      {!isCarouselLeft ? (
        <button
          onClick={() => setIsCarouselLeft(!isCarouselLeft)}
          className="chevron chevron-left"
        >
          <ChevronLeft width={40} height={40} />
        </button>
      ) : null}
      {isCarouselLeft ? (
        <button
          onClick={() => setIsCarouselLeft(!isCarouselLeft)}
          className="chevron chevron-right"
        >
          <ChevronRight width={40} height={40} />
        </button>
      ) : null}
      <div className={`slider ${isCarouselLeft ? 'right' : 'left'}`}>
        {imageList.map((image, index) => (
          <img loading="lazy" src={image.imgURL} alt={image.alt} key={index} />
        ))}
      </div>
    </div>
  );
};
