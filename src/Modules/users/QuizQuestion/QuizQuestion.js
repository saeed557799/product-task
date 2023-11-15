import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { Questions, SubmitResponse } from '../../../utils/helper/question';
import { useDispatch, useSelector } from 'react-redux';
import startQuizRequest from '../../../redux/reducers/duck/quizDuck';

function QuizQuestion() {
  const dispatch = useDispatch();
  const [hintClicked, setHintClicked] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [submitResponse, setSubmitResponse] = useState(null);

  const { startQuizData } = useSelector(({ quiz }) => ({
    startQuizData: quiz?.startQuizData,
  }));
  console.log('QuestionData => ', startQuizData);
  const handleHintClick = () => {
    // setSelectedAnswer(answer);
    setHintClicked(true);
  };

  const handleCheckClick = () => {
    setSubmitResponse(SubmitResponse);
    setHintClicked(false);
    setSelectedAnswer(answer);
    setAnswer('');
  };

  const handleAnswerChange = (item) => {
    // setAnswer(e.target.value);
    setAnswer(item);
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
              {startQuizData?.question?.question}
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

          {/* <div className={`answers ${hintClicked ? 'hint-active' : ''}`}> */}
          <div
            className={`${
              submitResponse?.statusCode === 200
                ? submitResponse?.data?.isCorrect === true
                  ? 'success-active answers'
                  : 'danger-active answers'
                : 'answers'
            }`}
          >
            <Form>
              <div>
                {startQuizData?.question?.answers?.map((item, index) => {
                  return (
                    <Form.Check
                      // inline
                      label={item?.answer}
                      name='group1'
                      type='radio'
                      id={index + 1}
                      value={item?.answer}
                      // checked={selectedAnswer === 1}
                      onChange={() => handleAnswerChange(item)}
                      // disabled={hintClicked}
                    />
                  );
                })}
              </div>
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
