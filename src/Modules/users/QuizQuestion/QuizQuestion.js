import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  nextQuestionRequest,
  quizSubmitRequest,
  quizSubmitResponse,
} from '../../../redux/reducers/duck/quizDuck';
import { error } from '../../../utils/notifications';
import { ButtonLoader } from '../../../components/Helper/loader';
import { quizResultRequest } from '../../../redux/reducers/duck/resultDuck';

function QuizQuestion() {
  const dispatch = useDispatch();
  const [hintClicked, setHintClicked] = useState(false);
  const [check, setCheck] = useState(false);
  const [answer, setAnswer] = useState(null);
  const [disableOptions, setDisableOptions] = useState(false);
  const [quizData, setQuizData] = useState('');
  const [attemptCount, setAttemptCount] = useState(0);

  const { startQuizData, quizSubmitData, nextQuestionData, isLaoding } =
    useSelector(({ quiz }) => ({
      startQuizData: quiz?.startQuizData,
      quizSubmitData: quiz?.quizSubmitData,
      nextQuestionData: quiz?.nextQuestionData,
      isLaoding: quiz?.isLoading,
    }));

  // const attemptCount = nextQuestionData?.data;
  // console.log('startQuizData => ', startQuizData);

  useEffect(() => {
    dispatch(quizSubmitResponse({ response: null }));
    setQuizData(startQuizData?.question);
    setAttemptCount(startQuizData);
  }, [startQuizData, dispatch]);

  useEffect(() => {
    dispatch(quizSubmitResponse({ response: null }));
    setQuizData(nextQuestionData?.data?.question);
    setAttemptCount(nextQuestionData?.data);
  }, [nextQuestionData, dispatch]);

  const handleHintClick = () => {
    setHintClicked(true);
  };

  const handleCheckClick = () => {
    if (!answer) {
      //toaster
      error('Please select an answer');
      return;
    }

    const requestData = {
      questionId: quizData?.id,
      answerId: answer?.id,
      quizId: quizData?.quizId,
    };
    dispatch(quizSubmitRequest(requestData));
    setHintClicked(false);
    setCheck(true);
    setDisableOptions(true);
  };

  const handleNextClick = () => {
    const quiz_id = startQuizData?.question?.quizId;
    dispatch(nextQuestionRequest(quiz_id));
    setAnswer('');
    setDisableOptions(false);
    setCheck(false);
  };
  const handleAnswerChange = (item) => {
    if (!disableOptions) {
      setCheck(false);
      setAnswer(item);
    }
  };

  const handleResult = () => {
    if (startQuizData) {
      const quiz_id = startQuizData?.question?.quizId;
      dispatch(quizResultRequest(quiz_id));
    }
  };

  return (
    <React.Fragment>
      <div className='quizQuestion'>
        {quizData && quizData ? (
          <>
            <div className='heading'>
              <h3>Organic Chemistry: The study of carbon compounds</h3>
            </div>
            <div className='card'>
              <p>
                {attemptCount?.attemptsCount + 1} of{' '}
                {attemptCount?.questionCount}
              </p>
              <div className='question'>
                <p>
                  {/* Question  */}
                  {quizData?.question}
                </p>
                {/* <button>
      <img src='/images/clock.svg' alt='clock' /> 00:12:30
    </button> */}
              </div>
              <div className='hint'>
                <button onClick={handleHintClick}>
                  <img src='/images/hint.svg' alt='hint' /> Hint
                </button>
              </div>

              {/* <div className={`answers ${hintClicked ? 'hint-active' : ''}`}> */}
              <div
                // className={`answers ${hintClicked ? 'hint-active' : ''}`}
                className={`${
                  quizSubmitData?.statusCode === 200
                    ? quizSubmitData?.data?.isCorrect === true
                      ? 'success-active answers'
                      : 'danger-active answers'
                    : 'answers'
                }`}
              >
                <Form>
                  <div>
                    {quizData?.answers?.map((item, index) => {
                      return (
                        <Form.Check
                          label={item?.answer} // answer
                          name='group'
                          type='radio'
                          id={index + 1}
                          value={item?.answer}
                          onChange={() => handleAnswerChange(item)}
                          checked={answer === item}
                          disabled={disableOptions}
                        />
                      );
                    })}
                  </div>
                  {hintClicked && (
                    <div className='hint-message'>
                      <p className='title'>Method:</p>
                      {/* <p>Ca is in group 2, therefore its an alkaline metal. </p> */}
                      <p>{quizData?.explaination}</p>
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

                {/* finish button  */}
                {attemptCount?.attemptsCount >= 10 && (
                  <div className='done' onClick={handleResult}>
                    <Link to='/quiz/results'>Finish</Link>
                  </div>
                )}
                {check ? (
                  <div className='done' onClick={handleNextClick}>
                    {isLaoding ? <Link>loading...</Link> : <Link>Next</Link>}
                    {/* {<Link>Next</Link>} */}
                  </div>
                ) : (
                  <div className='done' onClick={handleCheckClick}>
                    {isLaoding ? <Link>loading...</Link> : <Link>Check</Link>}
                    {/* {<Link>Check</Link>} */}
                  </div>
                )}

                {/* <div className='done'>
      {selectedAnswer !== null && <Link to='/quiz/results'>Done</Link>}
    </div> */}
              </div>
            </div>
          </>
        ) : (
          <p className='text-center'>No Question exist</p>
        )}
      </div>
    </React.Fragment>
  );
}

export default QuizQuestion;
