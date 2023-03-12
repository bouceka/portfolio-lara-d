import './input.css';

import * as React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: string;
  optionalText?: string;
  error?: string;
}

export const Input = ({ label, hint, optionalText, error, ...props }: Props) => {
  const [isFocused, setIsFocused] = React.useState(false);

  // Input handlers
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };


  return (
    <div>
      <div className="label-container">
        <label>{label}</label>
        {optionalText ? <div className={'optional-text'}>{optionalText}</div> : null}
      </div>

      <input
        {...props}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`${isFocused ? 'focused' : ''} ${error ? 'error' : ''}`}
      />

      {hint ? <div className={'hint-text'}>{hint}</div> : null}

      {error ? <div className={'error-text'}>{error}</div> : null}

    </div>
  );
};
