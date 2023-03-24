import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: React.FC<Props> = ({ label, value, ...props }) => {
  return (
    <div className="label-container">
      <label>
        <input type="checkbox" value={value} {...props} />
        {label}
      </label>
    </div>
  );
};
