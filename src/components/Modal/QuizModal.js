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
    name: '',
    boardLevel: '',
  };

  const { getSubjectsPrefData } = useSelector(({ dashboard }) => ({
    getSubjectsPrefData: dashboard?.getSubjectsPrefData,
  }));

  const [entries, setEntries] = useState([initialValues]);

  const handleAddMore = () => {
    setEntries([...entries, initialValues]);
  };

  const handleEntryChange = (index, name, value) => {
    const newEntries = [...entries];
    newEntries[index] = {
      ...newEntries[index],
      [name]: value,
    };
    setEntries(newEntries);
  };

  const handleDeleteEntry = (index) => {
    const newEntries = [...entries];
    newEntries.splice(index, 1);
    setEntries(newEntries);
  };

  // handle submit single
  const handleEntrySubmit = (index) => {
    const entryData = entries[index];
    const prefrenceData = {
      name: entryData.subject,
      qualification: entryData.qualification,
      boardLevel: entryData.board,
    };
    dispatch(postSubjectPrefRequest(prefrenceData));
    const newEntries = [...entries];
    newEntries[index] = initialValues;
    setEntries(newEntries);
  };

  // handle submit all
  const handleSubmitAll = (index) => {
    console.log('enteries for all =>', index);
    // const entryData = entries[index];
    const prefrenceData = index;
    dispatch(postSubjectPrefRequest(prefrenceData));
    const newEntries = [...entries];
    newEntries[index] = initialValues;
    setEntries(newEntries);
  };

  // remove repetition subjects
  const excludedSubjects =
    getSubjectsPrefData &&
    getSubjectsPrefData?.preference?.map((item) => {
      return item?.subject?.name;
    });
  const filteredSubjects = allSubjectNames?.filter(
    (subject) => !excludedSubjects?.includes(subject)
  );

  console.log('pref data =>', entries);

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
          <Modal.Title>Add Your Preferences</Modal.Title>
          {modalShowStatus && (
            <button className='closeButton' onClick={handleClose}>
              x
            </button>
          )}
        </Modal.Header>
        <Modal.Body>
          {entries.map((entry, index) => (
            <div key={index}>
              <Form.Label>Qualification</Form.Label>
              <Form.Select
                name='qualification'
                value={entry.qualification}
                onChange={(e) =>
                  handleEntryChange(index, 'qualification', e.target.value)
                }
              >
                <option>please select qualification</option>
                <option value='GCSE'>GCSE</option>
                <option value='Alevel'>Alevel</option>
              </Form.Select>
              <Form.Label>Subjects</Form.Label>
              <Form.Select
                name='name'
                value={entry.subject}
                onChange={(e) =>
                  handleEntryChange(index, 'name', e.target.value)
                }
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
              <Form.Select
                name='boardLevel'
                value={entry.board}
                onChange={(e) =>
                  handleEntryChange(index, 'boardLevel', e.target.value)
                }
              >
                <option>please select board</option>
                <option value='AQA'>AQA</option>
                <option value='Edexcel'>Edexcel</option>
                <option value='OCR'>OCR</option>
              </Form.Select>
              {/* <button
                className='submitPrefrenceDone'
                onClick={() => handleEntrySubmit(index)}
              >
                Submit
              </button> */}

              <hr className='line' />
              {index === entries.length - 1 && entries.length > 1 && (
                <button
                  className='deleteEntryButton'
                  onClick={() => handleDeleteEntry(index)}
                >
                  Delete
                </button>
              )}
            </div>
          ))}

          <button
            className='submitPrefrenceDone'
            onClick={() => handleSubmitAll(entries)}
          >
            Submit
          </button>

          <button className='submitPrefrenceDone' onClick={handleAddMore}>
            Add More
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default QuizModal;
