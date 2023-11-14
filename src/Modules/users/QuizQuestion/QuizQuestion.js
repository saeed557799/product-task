import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { Questions } from '../../../utils/helper/question';
import { useDispatch } from 'react-redux';
import startQuizRequest from '../../../redux/reducers/duck/quizDuck';

function QuizQuestion() {
  const dispatch = useDispatch();
  const [hintClicked, setHintClicked] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answer, setAnswer] = useState(null);

  // useEffect(() => {
  //   dispatch(startQuizRequest());
  // }, [dispatch]);

  const handleHintClick = () => {
    // setSelectedAnswer(answer);
    // setSelectedAnswer(2);
    setHintClicked(true);
  };

  const handleCheckClick = () => {
    setHintClicked(false);
    setSelectedAnswer(answer);
    // setSelectedAnswer(2);
  };

  const handleAnswerChange = (e) => {
    // setSelectedAnswer(parseInt(e.target.value, 10));
    setAnswer(e.target.value);
  };

  return (
    <React.Fragment>
      <div className='quizQuestion'>
        <div className='heading'>
          <h3>Organic Chemistry: The study of carbon compounds</h3>
        </div>
        <div className='card'>
          <div className='question'>
            <p>
              {/* 1. Which of the following is an example of an alkaline earth
              metal? */}
              {Questions?.question}
            </p>
            <button>
              <img src='/images/clock.svg' alt='clock' /> 00:12:30
            </button>
          </div>
          <div className='hint'>
            <button onClick={handleHintClick}>
              <img src='/images/hint.svg' alt='hint' /> Hint
            </button>
          </div>

          <div className={`answers ${hintClicked ? 'hint-active' : ''}`}>
            <Form>
              {/* {['radio'].map((type) => ( */}
              {/* <div key={`inline-${type}`}> */}
              <div>
                {Questions?.options?.map((item, index) => {
                  return (
                    <Form.Check
                      // inline
                      label={item?.ans}
                      name='group1'
                      type='radio'
                      // id={`inline-${type}-1`}
                      id={index + 1}
                      value={item?.ans}
                      // checked={selectedAnswer === 1}
                      onChange={handleAnswerChange}
                      // disabled={hintClicked}
                    />
                  );
                })}
                {/* <Form.Check
                    inline
                    label='B. Calcium'
                    name='group1'
                    type={type}
                    id={`inline-${type}-2`}
                    value={2}
                    checked={selectedAnswer === 2}
                    onChange={handleAnswerChange}
                  />
                  <Form.Check
                    inline
                    label='C. Chlorine'
                    name='group1'
                    type={type}
                    id={`inline-${type}-3`}
                    value={3}
                    checked={selectedAnswer === 3}
                    onChange={handleAnswerChange}
                    disabled={hintClicked}
                  />
                  <Form.Check
                    inline
                    label='D. Nitrogen'
                    name='group1'
                    type={type}
                    id={`inline-${type}-4`}
                    value={4}
                    checked={selectedAnswer === 4}
                    onChange={handleAnswerChange}
                    disabled={hintClicked}
                  /> */}
              </div>
              {/* // ))} */}
              {hintClicked && (
                <div className='hint-message'>
                  <p className='title'>Method:</p>
                  <p>Ca is in group 2, therefore its an alkaline metal. </p>
                  <div className='text-end mt-4'>
                    <button className='check' onClick={handleCheckClick}>
                      Check
                    </button>
                    <button
                      className='next'
                      onClick={() => setHintClicked(false)}
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </Form>

            <div className='done' onClick={handleCheckClick}>
              {<Link>Check</Link>}
            </div>
            {/* <div className='done'>
              {selectedAnswer !== null && <Link to='/quiz/results'>Done</Link>}
            </div> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default QuizQuestion;
