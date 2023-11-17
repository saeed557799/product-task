import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import {
  postSubjectPrefRequest,
  getSubjectPrefRequest,
} from '../../redux/reducers/duck/dashboardDuck';
import { allSubjectNames } from '../../utils/helper';

function QuizModal(props) {
  const { show, handleClose, modalShowStatus } = props;
  const dispatch = useDispatch();
  const initialValues = {
    qualification: '',
    subject: '',
    board: '',
  };

  const [data, setData] = useState(initialValues);
  // const [isSubmitData, setIsSubmitData] = useState(false);

  const { getSubjectsPrefData } = useSelector(({ dashboard }) => ({
    getSubjectsPrefData: dashboard?.getSubjectsPrefData,
  }));

  useEffect(() => {
    dispatch(getSubjectPrefRequest());
  }, [dispatch]);

  // const buttonStyle = {
  //   backgroundColor: data ? 'green' : 'gray',
  //   opacity: data ? 1 : 0.5,
  //   // Add other styles as needed
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (data) {
      const prefrenceData = {
        name: data?.subject,
        qualification: data?.qualification,
        boardLevel: data?.board,
      };
      dispatch(postSubjectPrefRequest(prefrenceData));
    }
    setData('');
    handleClose();
  };

  // useEffect(() => {
  //   data.forEach((value) => {
  //     if (!value.qualification || !value.subject || !value.board) {
  //       setIsSubmitData(true);
  //     } else {
  //       setIsSubmitData(false);
  //     }
  //   });
  // }, [data]);

  // const addEducations = () => {
  //   let object = {
  //     qualification: '',
  //     subject: '',
  //     board: '',
  //   };

  //   dispatch(postSubjectPrefRequest([...data, object]));
  // };

  const excludedSubjects =
    getSubjectsPrefData &&
    getSubjectsPrefData?.preference?.map((item) => {
      return item?.subject?.name;
    });
  const filteredSubjects = allSubjectNames?.filter(
    (subject) => !excludedSubjects?.includes(subject)
  );

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        centered
        aria-labelledby='contained-modal-title-vcenter'
      >
        <Modal.Header>
          <Modal.Title>QUIZZES</Modal.Title>
          {modalShowStatus && (
            <button className='closeButton' onClick={handleClose}>
              x
            </button>
          )}
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Qualification</Form.Label>
          <Form.Select
            name='qualification'
            value={data.qualification}
            onChange={handleChange}
          >
            <option>please select qualification</option>
            <option value='GCSE'>GCSE</option>
            <option value='Alevel'>Alevel</option>
          </Form.Select>
          <Form.Label>Subjects</Form.Label>
          <Form.Select
            name='subject'
            value={data.subject}
            onChange={handleChange}
          >
            <option>please select subject</option>
            {filteredSubjects &&
              filteredSubjects?.map((item) => {
                return (
                  <>
                    <option value={item}>{item}</option>
                  </>
                );
              })}
          </Form.Select>
          <Form.Label>Exam Board</Form.Label>
          <Form.Select name='board' value={data.board} onChange={handleChange}>
            <option>please select board</option>
            <option value='AQA'>AQA</option>
            <option value='Edexcel'>Edexcel</option>
            <option value='OCR'>OCR</option>
          </Form.Select>
          {/* <button
            onClick={addEducations}
            className={`absolute bg-white border-solid border border-gray-300 gap-2 inline-flex justify-center items-center text-gray-700 leading-4 text-left font-medium pt-[9px] pb-[9px] pl-[11px] pr-[13px] left-[calc(50%_-_58px_+_1px)] top-[calc(50%_-_17px_+_0px)] drop-shadow-lg overflow-clip rounded-[17px] font-['Poppins']`}
          >
            <div className={`w-4 h-4`}>
              <svg
                width={'10%'}
                height={'10%'}
                preserveAspectRatio={'none'}
                viewBox={'0 0 16 16'}
                fill={'none'}
                xmlns={'http://www.w3.org/2000/svg'}
              >
                <path
                  d={'M8 4V8M8 8V12M8 8H12M8 8L4 8'}
                  stroke={'#9CA3AF'}
                  strokeWidth={'2'}
                  strokeLinecap={'round'}
                  strokeLinejoin={'round'}
                />
              </svg>
            </div>
            <p className={`text-sm m-0`}>{'Add More'}</p>
          </button> */}
          {!data?.qualification || !data?.board || !data?.subject ? (
            <button className='submitPrefrence' disabled onClick={handleSubmit}>
              Submit
            </button>
          ) : (
            <button className='submitPrefrenceDone' onClick={handleSubmit}>
              Submit
            </button>
          )}
          {/* <button
            className='submitPrefrence'
            // style={buttonStyle}
            // disabled={!data}
            onClick={handleSubmit}
          >
            Submit
          </button> */}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default QuizModal;
