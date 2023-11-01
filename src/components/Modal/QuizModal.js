import React from 'react';
import './QuizModal.scss';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function QuizModal(props) {
    
    const { show, handleClose } = props;

  return (
    <React.Fragment>
      <Modal show={show} onHide={handleClose} centered aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header>
          <Modal.Title>QUIZZ.</Modal.Title>
          <button className="closeButton" onClick={handleClose}>
           x
          </button>
        </Modal.Header>
        <Modal.Body>
        <Form.Label>Qualification</Form.Label>
        <Form.Select aria-label="Default select example">
      <option>Abc</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
    <Form.Label>Subjects</Form.Label>
    <Form.Select aria-label="Default select example">
      <option>Chemistry</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
    <Form.Label>Exam Board</Form.Label>
    <Form.Select aria-label="Default select example">
      <option>EDEXCEL</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  )
}

export default QuizModal
