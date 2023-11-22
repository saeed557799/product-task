// Your component file
import React from 'react';
import { useSelector } from 'react-redux';
import data from './QuizData.json';

export default function Quiz() {
  const quizData = data.quizData;

  const { quizResultData } = useSelector(({ result }) => ({
    quizResultData: result?.quizResultData,
  }));

  console.log('next data =>', quizResultData);

  return (
    <React.Fragment>
      <div className='quizCards'>
        <div className='heading'>
          <h3>Quiz Summary</h3>
        </div>
        <div className='summary'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='card'>
                <div className='score'>
                  <div className='subject'>
                    <p>Your Score</p>
                    <h4>
                      {quizResultData?.correctAnswer}/{' '}
                      {quizResultData?.correctAnswer +
                        quizResultData?.inCorrectAnswer}
                    </h4>
                    <ul>
                      <li>
                        Total Attempted:{' '}
                        <small>
                          {' '}
                          {quizResultData?.correctAnswer +
                            quizResultData?.inCorrectAnswer}
                        </small>{' '}
                      </li>
                      <li>
                        Correct:{' '}
                        <small>
                          {quizResultData ? quizResultData?.correctAnswer : 0}
                        </small>
                      </li>
                      <li>
                        Wrong:{' '}
                        <small>
                          {quizResultData ? quizResultData?.inCorrectAnswer : 0}
                        </small>
                      </li>
                    </ul>
                  </div>
                  <div className='circle'>
                    <img src='/images/circle.svg' alt='circle' />
                    <p>{Math.round(quizResultData?.percentage)}%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card'>
                <div className='score'>
                  <div className='subject'>
                    <p>What you need to work on</p>
                    <ul>
                      {quizResultData &&
                        quizResultData?.WorkOnTags?.map((item) => {
                          return <li>{item}</li>;
                        })}
                    </ul>
                  </div>
                  <div className='circle'>
                    <img src='/images/book.png' alt='book' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='heading'>
          <h3>What’s Next</h3>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <div className='card'>
              <div className='subject'>
                <p>Next Topic</p>
                <span>courser</span>
              </div>
              <h4>{quizResultData?.nextTopic?.name}</h4>
              <div className='footer'>
                <div className='circlularBar'>
                  <img src='/images/video.svg' alt='video' />
                </div>
                <div className='subjectImg'>
                  <img src='/images/topic1.png' alt='topic' />
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='card'>
              <div className='subject'>
                <p>Content</p>
                <span>courser</span>
              </div>
              <h4>Topic content</h4>
              <div className='footer'>
                <div className='circlularBar'>
                  <img src='/images/video.svg' alt='video' />
                </div>
                <div className='subjectImg'>
                  <img src='/images/topic2.png' alt='topic' />
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='card'>
              <div className='subject'>
                <p>Current Topics</p>
                <span>courser</span>
              </div>
              <h4>{quizResultData?.currentTopic?.name}</h4>
              <div className='footer'>
                <div className='circlularBar'>
                  <img src='/images/video.svg' alt='video' />
                </div>
                <div className='subjectImg'>
                  <img src='/images/topic3.png' alt='topic' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
