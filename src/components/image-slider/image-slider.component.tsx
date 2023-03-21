// @flow
import * as React from 'react';

import ProductImg from '../../assets/images/Image-1.jpg';
import SkaterImg from '../../assets/images/Image-2.jpg';
import MugImg from '../../assets/images/Image-3.jpg';
import TunaBowlImg from '../../assets/images/Image-4.jpg';
import DressImg from '../../assets/images/Image-5.jpg';
import CoupleImg from '../../assets/images/Image-6.jpg';
import HolderImg from '../../assets/images/Image-7.jpg';

export const ImageSlider = () => {
  return (
    <section className="image-slider">
      <img src={ProductImg} alt="Lara Drummond product" />
      <img src={SkaterImg} alt="Lara Drummond skater girls" />
      <img src={MugImg} alt="Lara Drummond mug" />
      <img src={TunaBowlImg} alt="Lara Drummond tuna bowl" />
      <img src={DressImg} alt="Lara Drummond traditional dress" />
      <img src={CoupleImg} alt="Lara Drummond  a couple" />
      <img src={HolderImg} alt="Lara Drummond flower holder" />
      <img src={ProductImg} alt="Lara Drummond product" />
      <img src={SkaterImg} alt="Lara Drummond skater girls" />
      <img src={MugImg} alt="Lara Drummond mug" />
    </section>
  );
};
