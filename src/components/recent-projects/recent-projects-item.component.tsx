// @flow
import * as React from 'react';

import { Action } from '../action/action.component';

type Props = {
  imgURL: string;
  title: string;
  year: string;
  description: string;
  link: string;
};
export const RecentProjectsItem = ({ imgURL, title, year, description, link }: Props) => {
  return (
    <div className="recent-projects-item">
      <div className="recent-projects-item__content">
        <h5 className="recent-projects-item__title">{title}</h5>
        <span className="recent-projects-item__year">{year}</span>
        <span className="recent-projects-item__description">{description}</span>
        <Action to={link} as="link" styleType="primary">
          see more
        </Action>
      </div>
      <img src={imgURL} alt={title} />
    </div>
  );
};
