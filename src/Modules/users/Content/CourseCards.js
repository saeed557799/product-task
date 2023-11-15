import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  contentSumaryRequest,
  subjectRequest,
  topicsRequest,
} from '../../../redux/reducers/duck/contentDuck';
import Spinner from '../../../components/Helper/loader';

export default function CourseCards() {
  const dispatch = useDispatch();
  const { subjectsData, topicsData, isLoading } = useSelector(
    ({ content }) => ({
      subjectsData: content?.subjectsData,
      topicsData: content?.topicsData,
      isLoading: content?.isLoading,
    })
  );
  const [clickedItem, setClickedItem] = useState({
    index: null,
    paperIndex: null,
  });

  const handleClick = (index, player) => {
    dispatch(topicsRequest(player?.id));
    setClickedItem({ index, player });
  };

  useEffect(() => {
    dispatch(subjectRequest());
  }, [dispatch]);

  const images = ['/images/phy.svg', '/images/chem.svg', '/images/bio.svg'];

  return (
    <>
      <div className='content'>
        <div className='heading'>
          <h3>Course Content</h3>
        </div>
        <div className='row'>
          {subjectsData?.length > 0 ? (
            subjectsData?.map((item, index) => {
              const isCurrentlyClicked = clickedItem.index === index;
              return (
                <div className='col-md-4' key={index}>
                  <div className='card'>
                    <div className='title'>
                      <img src={images[index]} alt='subjectImg' />
                      <h4>{item.name}</h4>
                    </div>
                    {isCurrentlyClicked && (
                      <div
                        className={`card${
                          isCurrentlyClicked ? ' hoveredCard' : ''
                        }`}
                      >
                        {isLoading ? (
                          <Spinner />
                        ) : (
                          <table className='table table-bordered m-0'>
                            <thead>
                              <tr>
                                <th>{item?.qualification}</th>
                              </tr>
                            </thead>
                            <tbody>
                              {topicsData?.paper?.topics?.map((item) => (
                                <tr key={item}>
                                  <td
                                    onClick={() =>
                                      dispatch(contentSumaryRequest(item?.id))
                                    }
                                  >
                                    <Link to={'/content/summary'}>
                                      {item?.name}
                                    </Link>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        )}
                      </div>
                    )}
                    {!isCurrentlyClicked && (
                      <table className='table table-bordered m-0'>
                        <thead>
                          <tr>
                            {item?.qualification === 'Alevel' && (
                              <th>{item?.qualification}</th>
                            )}
                            {item?.qualification === 'GCSE' && (
                              <th>{item?.qualification}</th>
                            )}
                          </tr>
                        </thead>
                        <tbody>
                          {item?.papers?.map((player) => (
                            <tr key={player}>
                              {item?.qualification === 'Alevel' && (
                                <td onClick={() => handleClick(index, player)}>
                                  {player?.name}
                                </td>
                              )}
                              {item?.qualification === 'GCSE' && (
                                <td onClick={() => handleClick(index, player)}>
                                  {player?.name}
                                </td>
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <div className='no-data'>No Data Exist</div>
          )}
        </div>
      </div>
    </>
  );
}
