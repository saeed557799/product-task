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

  const { getSubjectsPrefData } = useSelector(({ dashboard }) => ({
    getSubjectsPrefData: dashboard?.getSubjectsPrefData,
  }));

  useEffect(() => {
    dispatch(getSubjectPrefRequest());
  }, [dispatch]);

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
    handleClose();
  };

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
          <button className='submitPrefrence' onClick={handleSubmit}>
            Submit
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default QuizModal;
