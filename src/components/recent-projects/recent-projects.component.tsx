// @flow
import * as React from 'react';

import SkaterImg from '../../assets/images/Image-2.jpg';
import CoupleImg from '../../assets/images/Image-6.jpg';
import SushiImg from '../../assets/images/Image-8.jpg';
import { Title } from '../title/title.component';
import { RecentProjectsItem } from './recent-projects-item.component';

const RECENT_PROJECTS = [
  {
    title: 'RED LOTUS RESTAURANT',
    year: '2023',
    description:
      'Fresh imagery of menu items. Used for digital + print assets of Red Lotus Restaurant.',
    link: '/gallery',
    imgURL: SushiImg,
  },
  {
    title: 'FLEE & FLY co.',
    year: '2022',
    description: 'Women’s apparel + skateboard company. New collection launch imagery.',
    link: '/gallery',
    imgURL: SkaterImg,
  },
  {
    title: 'CV COLLECTIVE',
    year: '2022',
    description: 'Editorial shoot. Inspired by androgynous outerwear for all ages. ',
    link: '/gallery',
    imgURL: CoupleImg,
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
