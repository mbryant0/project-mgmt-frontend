import React from 'react';
import './EmailPreview.css';

const EmailPreview = (props) => {
  const { email } = props;
  return (
    <div className='email-preview'>
      <p>{email.subject}</p>
    </div>
  );
};

export default EmailPreview;
