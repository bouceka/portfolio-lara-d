// @flow
import * as React from 'react';

import { Title } from '../title/title.component';
import { RecentProjectsItem } from './recent-projects-item.component';

const RECENT_PROJECTS = [
  {
    title: 'RED LOTUS RESTAURANT',
    year: '2023',
    description:
      'Fresh imagery of menu items. Used for digital + print assets of Red Lotus Restaurant.',
    link: '/gallery',
    imgURL:
      'https://res.cloudinary.com/dufli3jum/image/upload/v1679542251/LaraPorfolio/Food/small/CB-LD-Food12_evjf94.jpg',
  },
  {
    title: 'FLEE & FLY co.',
    year: '2022',
    description: 'Women’s apparel + skateboard company. New collection launch imagery.',
    link: '/gallery',
    imgURL:
      'https://res.cloudinary.com/dufli3jum/image/upload/v1679542082/LaraPorfolio/Fashion/skater-girls/medium/CB-LD-Fashion4_dn10lm.webp',
  },
  {
    title: 'CV COLLECTIVE',
    year: '2022',
    description: 'Editorial shoot. Inspired by androgynous outerwear for all ages. ',
    link: '/gallery',
    imgURL:
      'https://res.cloudinary.com/dufli3jum/image/upload/v1679541962/LaraPorfolio/Editorial/couple/medium/CB-LD-Editorial3_ntgjoa.webp',
  },
];

export const RecentProjects = () => {
  return (
    <section className="recent-projects">
      <div className="row">
        <Title title="RECENT PROJECTS" subtitle={'Capturing Stories Through Imagery'} />
        {RECENT_PROJECTS.map((project, index) => (
          <RecentProjectsItem {...project} key={index} />
        ))}
      </div>
    </section>
  );
};
