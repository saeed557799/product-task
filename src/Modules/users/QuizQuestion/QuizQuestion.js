import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  nextQuestionRequest,
  quizSubmitRequest,
  quizSubmitResponse,
  reportQuestionRequest,
} from '../../../redux/reducers/duck/quizDuck';
import { error } from '../../../utils/notifications';
import { quizResultRequest } from '../../../redux/reducers/duck/resultDuck';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

function QuizQuestion() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const renderTooltip = (props) => <Tooltip>{props}</Tooltip>;

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

  // handle check question
  const handleCheckClick = () => {
    if (!answer) {
      error('Please select an answer');
      return;
    }
    const requestData = {
      questionId: quizData?.id,
      answerId: answer?.id,
      quizId: quizData?.quizId,
    };
    dispatch(quizSubmitRequest(requestData));
    setCheck(true);
    setDisableOptions(true);
  };

  // handle next question
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

  // handle finish quizz
  const handleResult = () => {
    if (startQuizData) {
      const quiz_id = startQuizData?.question?.quizId;
      dispatch(quizResultRequest(quiz_id));
    }
    navigate('/quiz/results');
  };

  // handle report question
  const handleReportQuestion = (data) => {
    if (data) {
      const payloadData = data?.id;
      dispatch(reportQuestionRequest({ questionId: payloadData }));
    }
  };

  // handle complete quizz
  const handleCompletQuiz = (data) => {
    console.log('complet quizz', data);
    navigate('/dashboard');
  };

  console.log('questions =>', attemptCount?.attemptsCount + 1);
  console.log('attemptCount?.questionCoun =>', attemptCount?.questionCount);

  return (
    <React.Fragment>
      <div className='quizQuestion'>
        {quizData && quizData ? (
          <>
            <div className='heading'>
              <h3>
                {startQuizData?.subject}: {startQuizData?.topicName}
              </h3>
            </div>
            <div className='card'>
              {/* show question counting  */}
              <p>
                {attemptCount?.attemptsCount + 1} of{' '}
                {attemptCount?.questionCount}
              </p>
              <div className='question'>
                <p>
                  {/* Question  */}
                  {quizData?.question}
                </p>
              </div>
              <div className='hint'>
                <OverlayTrigger
                  placement='left'
                  overlay={renderTooltip(quizData?.hint)}
                >
                  <Button>
                    <img src='/images/hint.svg' alt='hint' /> Hint
                  </Button>
                </OverlayTrigger>
              </div>
              <div
                className={`${
                  quizSubmitData?.statusCode === 200 ||
                  quizSubmitData?.statusCode === 201
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
                          label={item?.answer}
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
                </Form>
              </div>
              <div className='quizz-buttons'>
                {attemptCount?.attemptsCount >= 10 && (
                  <div className='question-handle-btns' onClick={handleResult}>
                    <Link to='/quiz/results'>Finish</Link>
                  </div>
                )}
                <div
                  className='question-handle-btns'
                  onClick={() => {
                    handleReportQuestion(quizData);
                  }}
                >
                  <Link>Report</Link>
                </div>
                <div>
                  {check ? (
                    <div>
                      {attemptCount?.attemptsCount + 1 ===
                      attemptCount?.questionCount ? (
                        <div
                          className='question-handle-btns'
                          onClick={() => handleCompletQuiz(quizData)}
                        >
                          Complete
                        </div>
                      ) : (
                        <div
                          className='question-handle-btns'
                          onClick={handleNextClick}
                        >
                          {isLaoding ? (
                            <Link>loading...</Link>
                          ) : (
                            <Link>Next</Link>
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div
                      className='question-handle-btns'
                      onClick={handleCheckClick}
                    >
                      {isLaoding ? <Link>loading...</Link> : <Link>Check</Link>}
                    </div>
                  )}
                </div>
              </div>
              <div className='answers'>
                <Form>
                  {/* Answer explaination */}
                  {(quizSubmitData?.statusCode === 200 ||
                    quizSubmitData?.statusCode === 201) && (
                    <div className='hint-message'>
                      <p className='title'>Method:</p>
                      <p>{quizData?.explaination}</p>
                    </div>
                  )}
                </Form>
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
