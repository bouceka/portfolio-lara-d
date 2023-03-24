// @flow

import * as React from 'react';

interface Props {
  title: string;
  subtitle?: string;
}

export const Title = ({ title, subtitle }: Props) => {
  return (
    <>
      <div className="title-container">
        <h1>{title}</h1>
        <div className="title-divider" />
        {subtitle ? <h2 className="subtitle">{subtitle}</h2> : null}
      </div>
    </>
  );
};
