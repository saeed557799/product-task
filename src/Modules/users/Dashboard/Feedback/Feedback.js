import React from 'react';
export default function Feedback() {
  return (
    <React.Fragment>
      <div className='feedback'>
        <div className='heading'>
          <h3>Feedback</h3>
        </div>
        <div className='card'>
          <div className='d-flex align-items-center'>
            <div className='flex-shrink-0'>
              <img src='/images/analysis.svg' alt='analysis' />
            </div>
            <div className='flex-grow-1 ms-3'>
              <h4 className='m-0'>Analysis</h4>
              <p className='m-0'>-9621</p>
            </div>
          </div>
          <div className='workOn'>
            <p>Work on :</p>
            <span className='badge'>Carbon-13 Spectroscopy</span>
            <span className='badge'>Test for organic functional group</span>
            <span className='badge'>Types of Chromatography</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
