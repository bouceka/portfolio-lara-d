// @flow
import * as React from 'react';
type Props = {
  children: React.ReactNode;
  type: 'link' | 'button';
};
export const Action = ({ children, ...props }: Props) => {
  return <div>{children}</div>;
};
