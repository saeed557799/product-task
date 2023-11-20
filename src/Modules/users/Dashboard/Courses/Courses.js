import React, { useEffect } from 'react';
import data from './CourseData.json';
import { useDispatch, useSelector } from 'react-redux';
import { dashboardPendingQuizRequest } from '../../../../redux/reducers/duck/dashboardDuck';
import { continueQuizes } from '../../../../utils/helper';

export default function Courses() {
  const courseDat = data.courseDat;
  const dispatch = useDispatch();

  const { dashboardPendingQuizData, subjectsData } = useSelector(
    ({ dashboard, content }) => ({
      dashboardPendingQuizData: dashboard?.dashboardPendingQuizData,
      subjectsData: content?.subjectsData,
    })
  );

  const subjectID = subjectsData && subjectsData[0]?.subjectId;
  console.log('subjectID', subjectID);

  useEffect(() => {
    dispatch(dashboardPendingQuizRequest(subjectID));
  }, [dispatch, subjectID]);

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
                    <span>Continue</span>
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
