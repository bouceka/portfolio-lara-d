import './textarea.styles.scss';

import * as React from 'react';

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  placeholder?: string;
}

export const Textarea = ({ label, ...props }: Props) => {
  return (
    <>
      <div className="textarea-label-container">
        <label>{label}</label>
      </div>
      <textarea placeholder="content" {...props} />
    </>
  );
};
