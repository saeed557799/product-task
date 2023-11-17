import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <div className='text-center mt-5'>
        <div className='error-page flex column-direction w-100'>404 page</div>
        <Link to='/'>
          <button className='go-back-btn mt-3'>Go Back</button>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
