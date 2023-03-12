import './input.css';

import * as React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: string;
  optionalText?: string;
}

export const Input = ({ label, hint, optionalText, ...props }: Props) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);

  // Input handlers
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length < 6 && event.target.value.length > 0) {
      setHasError(true);
    } else {
      setHasError(false);
    }
    props.onChange && props.onChange(event);
  };

  return (
    <div>
      <div className="label-container">
        <label>{label}</label>
        {optionalText && <div className={'optional-text'}>{optionalText}</div>}
      </div>

      <input
        {...props}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`${isFocused ? 'focused' : ''} ${hasError ? 'error' : ''}`}
      />

      {hint && <div className={'hint-text'}>{hint}</div>}

      {hasError && (<div className={'error-text'}>Error: min 6 characters.</div>)}

    </div>
  );
};
