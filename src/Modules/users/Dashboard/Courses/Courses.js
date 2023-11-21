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

  // let continueTopic = '';
  // let pendingTopics = dashboardPendingQuizData?.continueQuizzes?.map((item) => {
  //   // console.log('item => ', item?.quiz?.topic?.name);
  //   continueTopic = item?.quiz?.topic?.name;
  // });

  const subjectID = subjectsData && subjectsData[0]?.subjectId;
  console.log('subjectsData => ', subjectsData);
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
          {dashboardPendingQuizData &&
            dashboardPendingQuizData?.continueQuizzes?.map((item, index) => {
              return (
                <div className='col-md-4' key={index}>
                  <div className='card'>
                    <div className='subject'>
                      <p>{subjectsData && subjectsData[0]?.subject?.name}</p>
                      <span>Continue</span>
                    </div>
                    <h4>{item?.quiz?.topic?.name}</h4>
                    <img
                      className='courseImg'
                      src={item.coursesImg}
                      alt='courseImg'
                    />
                    <div className='footer'>
                      <div className='circlularBar'>
                        <img src={item.circularBar} alt='circularBar' />
                        {/* <p>{item.percentage}</p> */}
                      </div>
                      <div className='subjectImg'>
                        {/* <img src={item.subjectImg} alt='subjectImg' /> */}
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
