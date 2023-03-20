// @flow

import * as React from 'react';
import { Link, LinkProps } from 'react-router-dom';

type BaseProps = {
  children: React.ReactNode;
  className?: string;
  styleType: 'primary' | 'secondary' | 'outline' | 'link' | 'header' | 'cta';
};

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as?: 'button';
  };

type ButtonAsLink = BaseProps &
  Omit<LinkProps, keyof BaseProps> & {
    as: 'link';
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Action(props: ButtonProps) {
  const allClassNames = `btn btn--${props.styleType ? props.styleType : ''} ${
    props.className ? props.className : ''
  }`;

  if (props.as === 'link') {
    const { className, styleType, as, ...rest } = props;
    return <Link className={allClassNames} {...rest} />;
  } else {
    const { className, styleType, as, ...rest } = props;
    return (
      <button
        className={`${allClassNames} ${props.disabled ? 'disabled' : ''}`}
        {...rest}
      />
    );
  }
}
