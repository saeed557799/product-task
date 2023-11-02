// Your component file
import React from 'react';
import data from './QuizData.json';

export default function Quiz() {
  const quizData = data.quizData;

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
                    <h4>24/30</h4>
                    <ul>
                      <li>
                        Total Attempted: <small>30</small>
                      </li>
                      <li>
                        Correct: <small>24</small>
                      </li>
                      <li>
                        Wrong: <small>6</small>
                      </li>
                    </ul>
                  </div>
                  <div className='circle'>
                    <img src='/images/circle.svg' alt='circle' />
                    <p>75%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card'>
                <div className='score'>
                  <div className='subject'>
                    <p>What you need to work on</p>
                    <h4>Topics</h4>
                    <ul>
                      <li>Topic 1</li>
                      <li>Topic 2</li>
                      <li>Topic 3</li>
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
          {quizData.map((item, index) => {
            return (
              <div className='col-md-4' key={index}>
                <div className='card'>
                  <div className='subject'>
                    <p>{item.subject}</p>
                    <span>{item.courses}</span>
                  </div>
                  <h4>{item.courseName}</h4>
                  <div className='footer'>
                    <div className='circlularBar'>
                      <img src={item.video} alt='video' />
                    </div>
                    <div className='subjectImg'>
                      <img src={item.topic} alt='topic' />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}
