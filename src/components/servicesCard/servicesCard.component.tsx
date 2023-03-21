import React from 'react';

// Create interface for props
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  serviceLabel: string;
}

export const ServiceCard = ({ label, ...props }: Props) => {
  return (
    <div className="container">
      <div className="leftBar">
        <div className="leftBar-Text">{label}</div>
      </div>
      <div className="bottomBar">
        {/* <div className='bottomBar-Button'>Button</div> */}
      </div>
    </div>
  );
};
