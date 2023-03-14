// @flow
import * as React from 'react';
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
export const Input = ({ label, ...props }: Props) => {
  return <div></div>;
};
