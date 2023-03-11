import './input.css';

import * as React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = ({ label, ...props }: Props) => {
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
      <label>{label}</label>
      <input
        {...props}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`${isFocused ? 'focused' : ''} ${hasError ? 'error' : ''}`}
      />
      {hasError && (
        <div className={'error-text'}>Error Test: Please enter at least 6 characters</div>
      )}
    </div>
  );
};
