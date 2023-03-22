// @flow
import './title.styles.scss';

import * as React from 'react';

interface Props {
  title: string;
}

export const Title = ({ title }: Props) => {
  return (
    <>
      <div className="title-container">
        <h1>{title}</h1>
        <div className="title-divider" />
        <h2 className="subtitle">
          Hi, it&apos;s nice to meet you! With 14+ years of experience in editorial,
          product, food, and fashion photography, I&apos;m here to meet your photography
          needs.
        </h2>
      </div>
    </>
  );
};
