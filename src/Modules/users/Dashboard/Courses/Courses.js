import React from 'react';
import data from './CourseData.json';

export default function Courses() {
  const courseDat = data.courseDat;

  return (
    <React.Fragment>
      <div className='courseCards'>
        <div className='heading'>
          <h3>Continue Studying</h3>
        </div>
        <div className='row'>
          {courseDat.map((item, index) => {
            return (
              <div className='col-md-4' key={index}>
                <div className='card'>
                  <div className='subject'>
                    <p>{item.subject}</p>
                    <span>{item.courses}</span>
                  </div>
                  <h4>{item.courseName}</h4>
                  <img
                    className='courseImg'
                    src={item.coursesImg}
                    alt='courseImg'
                  />
                  <div className='footer'>
                    <div className='circlularBar'>
                      <img src={item.circularBar} alt='circularBar' />
                      <p>{item.percentage}</p>
                    </div>
                    <div className='subjectImg'>
                      <img src={item.subjectImg} alt='subjectImg' />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}
