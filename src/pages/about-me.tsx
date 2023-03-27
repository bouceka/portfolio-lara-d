// @flow

import * as React from 'react';

import { CTA } from '../components/cta/cta.component';
import { Marquee } from '../components/marquee/marguee.component';
import { Title } from '../components/title/title.component';

export const AboutMe = () => {
  return (
    <div className="page">
      <div className="row">
        <Title
          title="MEET LARA DRUMMOND"
          subtitle="Hi, it’s nice to meet you! With 14+ years of experience in editorial, product, food, and fashion photography, I’m here to meet your photography needs."
        />
        <section className="section-bio">
          <div className="bio-container">
            <div className="bio-text">
              <p>
                Since the start of my career, I&apos;’ve always loved a good challenge.
                Instead of focusing on a single area of photography, I choose to
                specialize in the 4 areas I felt most passionate about: editorial,
                product, food, and fashion photography. My photography style is flexible
                to accommodate a range of needs, from informational and functional, to
                highly creative and full of personality.
              </p>

              <p>
                My passion lies in helping businesses of all sizes and industries elevate
                their brand presence and share their stories through photography. I love
                developing and executing a brand&apos;’s creative vision with exceptional
                custom images, so that business owners can focus on the part they do best:
                growing their business.
              </p>

              <p>
                Sourcing high-quality professional photos can be overwhelming, so
                I&apos;’m here to make the photo shoot process as smooth and seamless as
                possible. I can connect you with all the assets and collaborators you
                need, such as stylists, makeup artists, set designers, digital marketers,
                and more. All you need to do is meet me for an incredible shoot day, and
                show off your incredible new photos!
              </p>

              <p>
                When booking a photography session with me, I guarantee your business will
                receive hard-hitting visuals that hit the mark, every time.
              </p>
            </div>

            <h5 className="bio-signature">- LARA DRUMMOND</h5>
          </div>

          <div className="bio-image">
            <img
              src="https://res.cloudinary.com/dufli3jum/image/upload/v1679542368/LaraPorfolio/Lara-Drummond/small/CB-LD-Lara2_gi8fmg.jpg"
              alt="Lara Drummond"
            />
          </div>
        </section>
      </div>

      <Marquee color="accent-1" />
      <CTA
        styleType="secondary"
        heading="Let's create photography magic together."
        cta="Get started"
      />
    </div>
  );
};
