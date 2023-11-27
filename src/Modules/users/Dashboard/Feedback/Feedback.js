import React from 'react';
import { useSelector } from 'react-redux';

const Feedback = () => {
  const { dashboardGraphData } = useSelector(({ dashboard }) => ({
    dashboardGraphData: dashboard?.dashboardGraphData,
  }));

  return (
    <>
      <div className='feedback'>
        <div className='heading'>
          <h3>Feedback</h3>
        </div>
        {dashboardGraphData && dashboardGraphData ? (
          <div className='card'>
            <div className='d-flex align-items-center'>
              <div className='flex-shrink-0'>
                <img src='/images/analysis.svg' alt='analysis' />
              </div>
              <div className='flex-grow-1 ms-3'>
                <h4 className='m-0'>
                  {dashboardGraphData && dashboardGraphData?.topicName}
                </h4>
                <p className='m-0'>
                  {dashboardGraphData && dashboardGraphData?.gainPoints}
                </p>
              </div>
            </div>
            <div className='workOn'>
              <p>Work on :</p>
              {dashboardGraphData &&
                dashboardGraphData?.weakTags?.slice(0, 3)?.map((tags) => {
                  return <span className='badge'>{tags}</span>;
                })}
            </div>
          </div>
        ) : (
          <div className='card'>
            <div className='d-flex align-items-center'>
              <div className='flex-grow-1 ms-3 feedback-text'>
                Feedback does not exist
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Feedback;
