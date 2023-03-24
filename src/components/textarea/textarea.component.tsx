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
      <textarea className="textarea" placeholder="content" {...props} />
    </>
  );
};
