import React, { useEffect, useState } from 'react';
import data from './CourseData.json';
import QuizModal from '../../../../components/Modal/QuizModal';
import { useDispatch, useSelector } from 'react-redux';
import { getSubjectPrefRequest } from '../../../../redux/reducers/duck/dashboardDuck';

export default function Courses() {
  const courseDat = data.courseDat;
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const { getSubjectsPrefData } = useSelector(({ dashboard }) => ({
    getSubjectsPrefData: dashboard?.getSubjectsPrefData,
  }));

  useEffect(() => {
    dispatch(getSubjectPrefRequest());
  }, [dispatch]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (getSubjectsPrefData?.isPreferenceSet === true) {
      setShow(true);
    }
  }, [getSubjectsPrefData]);

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
                    <span onClick={handleShow}>{item.courses}</span>
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
      <QuizModal
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
      />
    </React.Fragment>
  );
}
