// @flow
import * as React from 'react';
type Props = {
  children: React.ReactNode;
};
export const Action = ({ children, ...props }: Props) => {
  return <div>{children}</div>;
};
