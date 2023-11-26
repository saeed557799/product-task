import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dashboardPendingQuizRequest } from '../../../../redux/reducers/duck/dashboardDuck';
import { useNavigate } from 'react-router-dom';
import { startQuizRequest } from '../../../../redux/reducers/duck/quizDuck';

export default function Courses() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { dashboardPendingQuizData, subjectsData } = useSelector(
    ({ dashboard, content }) => ({
      dashboardPendingQuizData: dashboard?.dashboardPendingQuizData,
      subjectsData: content?.subjectsData,
    })
  );

  // const subjectID = subjectsData && subjectsData[0]?.subjectId;

  // useEffect(() => {
  //   dispatch(dashboardPendingQuizRequest(subjectID));
  // }, [dispatch, subjectID]);

  // handle continue quizz
  const handleContinueQuizz = (item) => {
    const topicId = item?.quiz?.topic?.id;
    dispatch(startQuizRequest(topicId));
    navigate('/quiz/question');
  };

  console.log('pending quizz =>', dashboardPendingQuizData);

  return (
    <>
      <div className='courseCards'>
        <div className='heading'>
          <h3>Continue Studying</h3>
        </div>
        <div className='row'>
          {dashboardPendingQuizData?.continueQuizzes ? (
            dashboardPendingQuizData?.continueQuizzes?.map((item, index) => {
              return (
                <div className='col-md-4' key={index}>
                  <div className='card'>
                    <div className='subject'>
                      <p>Subjects</p>
                      <div
                        className=''
                        onClick={() => handleContinueQuizz(item)}
                      >
                        <span>Continue</span>
                      </div>
                    </div>
                    <h4>{item?.quiz?.topic?.name}</h4>
                    {/* <img
                      className='courseImg'
                      src={item.coursesImg}
                      alt='courseImg'
                    /> */}
                    <div className='footer'>
                      {/* <div className='circlularBar'>
                        <img src={item.circularBar} alt='circularBar' />
                        <p>{item.percentage}</p>
                      </div> */}
                      <div className='subjectImg'>
                        {/* <img src={item.subjectImg} alt='subjectImg' /> */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className='col-md-4'>
              <div className='card'>No pending quizz exist</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
