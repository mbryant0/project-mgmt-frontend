import React from 'react';
import { Spinner } from 'react-spinners-css';
import './Loading.css';

const Loading = () => {
  return (
    <div className='loading'>
      <Spinner color='black' className='spin' />
    </div>
  );
};

export default Loading;
