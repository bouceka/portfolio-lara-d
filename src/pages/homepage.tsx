// @flow
import { AboutMe } from '../components/about-me/about-me.component';
import { CTA } from '../components/cta/cta.component';
import { FeaturedIn } from '../components/featured-in/featured-in.component';
import { Hero } from '../components/hero/hero.component';
import { ImageSlider } from '../components/image-slider/image-slider.component';
import { Marquee } from '../components/marquee/marguee.component';
import { RecentProjects } from '../components/recent-projects/recent-projects.component';
import Testimonials from '../components/testimonials/testimonials.component';

export const Homepage = () => {
  return (
    <div>
      <Hero />
      <Marquee color="secondary" />
      <CTA
        cta="LET'S WORK TOGETHER"
        styleType="secondary"
        heading="Hard-hitting visuals and storytelling based on Vancouver Island, BC."
      />
      <AboutMe />
      <ImageSlider />
      <RecentProjects />
      <Testimonials />
      <FeaturedIn />
    </div>
  );
};
