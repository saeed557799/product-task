import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <div className='text-center error-page mt-5'>
        <div className='flex column-direction error-num w-100'>
          {/* 4<span>0</span>4 */}
          404
        </div>
        <p className=''>
          The page you requested could not be found.
          <br />
          Click the button to go back
        </p>
        <Link to='/'>
          <button className='go-back-btn mt-3'>Go Back</button>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
