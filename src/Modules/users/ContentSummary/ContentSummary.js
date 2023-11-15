import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import StringToJsxParser from '../../../utils/stringParser';
import Spinner from '../../../components/Helper/loader';
function ContentSummary() {
  const { summary, isLoading } = useSelector(({ content }) => ({
    summary: content?.contentSumaryData?.topic,
    isLoading: content?.isLoading,
  }));

  return (
    <React.Fragment>
      <div className='summaryContent'>
        <div className='heading'>
          <h3>Study Next</h3>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <Link to='/quiz'>
              <div className='card'>
                <div className='subject'>
                  <img src='/images/video.svg' alt='video' />
                  <span>Chemistry</span>
                </div>
                <h4>Enviornmental Chemistry</h4>
                <div className='footer'>
                  <p>23 Courses</p>
                  <p>45 Hours</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className='heading'>
          <h3>Summary</h3>
        </div>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className='summaryCard'>
            {summary ? (
              <StringToJsxParser data={summary && summary?.content} />
            ) : (
              'No Summary Exist against this topic'
            )}
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default ContentSummary;
