import './checkbox.styles.scss';

import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Checkbox: React.FC<Props> = ({ label, ...props }) => {
  return (
    <div className="label-container">
      <label>
        <input type="checkbox" {...props} />
        {label}
      </label>
    </div>
  );
};
