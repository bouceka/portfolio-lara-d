// @flow
import { AboutMe } from '../components/about-me/about-me.component';
import { CTA } from '../components/cta/cta.component';
import { Hero } from '../components/hero/hero.component';
import { Marquee } from '../components/marquee/marguee.component';
import { Navbar } from '../components/navbar/navbar.component';

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
    </div>
  );
};
