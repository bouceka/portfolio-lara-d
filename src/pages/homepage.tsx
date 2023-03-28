// @flow
import { useEffect, useState } from 'react';
import { SuperSEO } from 'react-super-seo';

import { AboutMe } from '../components/about-me/about-me.component';
import { CTA } from '../components/cta/cta.component';
import { FeaturedIn } from '../components/featured-in/featured-in.component';
import { Hero } from '../components/hero/hero.component';
import { ImageSlider } from '../components/image-slider/image-slider.component';
import { Marquee } from '../components/marquee/marguee.component';
import { Navbar } from '../components/navbar/navbar.component';
import { RecentProjects } from '../components/recent-projects/recent-projects.component';
import Testimonials from '../components/testimonials/testimonials.component';

export const Homepage = () => {
  const [isHeroHeight, setIsHeroHeight] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsHeroHeight(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <SuperSEO
        title="Lara Drummond Photography"
        description="Lara Drummond Photography offers exceptional Product, Food, Editorial, and Fashion Photography on Vancouver Island, BC."
      />
      <Navbar styleType={isHeroHeight ? 'black' : 'white'} />
      <Hero />
      <Marquee color="secondary" />
      <CTA
        cta="LET'S WORK TOGETHER"
        styleType="accent-2"
        heading="Hard-hitting visuals and storytelling based on Vancouver Island, BC."
      />
      <AboutMe />
      <ImageSlider />
      <RecentProjects />
      <Testimonials />
      <FeaturedIn />
      <Marquee color="secondary" />
      <CTA
        styleType="primary"
        heading="Looking for high quality photography with a personal touch? "
        cta="LET’S WORK TOGETHER"
      />
    </>
  );
};
