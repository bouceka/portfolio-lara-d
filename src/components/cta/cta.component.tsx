// @flow

import * as React from 'react';

import { ReactComponent as ArrowSVG } from '../../assets/Arrow-Right.svg';
import { Action } from '../action/action.component';
type Props = {
  styleType: 'primary' | 'secondary';
  heading: string;
  cta: string;
};
export const CTA = ({ styleType, heading, cta }: Props) => {
  return (
    <section className={`cta ${styleType}`}>
      <div className="cta__container row">
        <h3>{heading}</h3>
        <Action as="link" styleType="cta" className={styleType} to="/contact-me">
          {cta} <ArrowSVG />
        </Action>
      </div>
    </section>
  );
};
