import './testimonials.styles.scss';

import React from 'react';

export default function Testimonials() {
  return (
    <section className="testimonials-section row">
      <div className="right-column">
        <div className="testimonials-header">
          <h2>WHAT PEOPLE HAVE TO SAY</h2>
        </div>

        <div className="testimonials-container">
          <div className="testimonial">
            <div className="testimonial-text">
              “Lara listened to my restaurants story and the reason I started it, and I
              felt she truly understood my mission. The photos she produced exceeded my
              expectations and communicated the love I put into my dishes.”
            </div>
            <div className="testimonial-author">-Frank, Owner, Red Lotus Restaurant</div>
          </div>
          <div className="testimonial">
            <div className="testimonial-text">
              “Lara Drummond was professional, efficient, and took exceptional photos of
              our new lineup. We look forward to working with her again.
            </div>
            <div className="testimonial-author">-Taylor, Editor, Boulevard Magazine</div>
          </div>
          <div className="testimonial">
            <div className="testimonial-text">
              “Lara was easy to work with and made the whole experience so much fun. I
              love how my photos turned out!”
            </div>
            <div className="testimonial-author">-Marnie, Designer, CV Collective</div>
          </div>
        </div>
      </div>
    </section>
  );
}
