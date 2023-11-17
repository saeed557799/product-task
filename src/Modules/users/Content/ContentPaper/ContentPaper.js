import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  subjectRequest,
  topicsRequest,
} from '../../../../redux/reducers/duck/contentDuck';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../../../components/Helper/loader';
import { startQuizRequest } from '../../../../redux/reducers/duck/quizDuck';

export default function ContentPaper() {
  const dispatch = useDispatch();
  const [clickedItem, setClickedItem] = useState({
    index: null,
    paperIndex: null,
  });

  const { subjectsData, topicsData, isLoading } = useSelector(
    ({ content }) => ({
      subjectsData: content?.subjectsData,
      topicsData: content?.topicsData,
      isLoading: content?.isLoading,
    })
  );

  let subjects = subjectsData?.map((item) => {
    return item?.subject;
  });

  const handleClick = (index, item) => {
    dispatch(topicsRequest(item?.id));
    setClickedItem({ index, item });
  };

  const handleClose = () => {
    setClickedItem({ index: null, paperIndex: null });
  };

  useEffect(() => {
    dispatch(subjectRequest());
  }, [dispatch]);

  return (
    <React.Fragment>
      <div className='contentPaper'>
        <div className='row'>
          {subjects?.length > 0 &&
            Object?.keys(subjects).map((item, index) => {
              const isCurrentlyClicked = clickedItem.index === index;
              return (
                <div className='col-md-12' key={index}>
                  <div className='heading'>
                    <h3>{subjects[item]?.name}</h3>
                  </div>
                  {isCurrentlyClicked && (
                    <>
                      {isLoading ? (
                        <Spinner />
                      ) : (
                        <div
                          className={`card${
                            isCurrentlyClicked ? ' hoveredCard' : ''
                          }`}
                        >
                          <button className='closeButton' onClick={handleClose}>
                            x
                          </button>
                          <div className='table-responsive'>
                            <table className='table m-0'>
                              <tbody>
                                <tr>
                                  <th className='text-center'>
                                    {topicsData?.paper?.name}
                                  </th>
                                  {/* <th>{item[`paper${clickedItem.paperIndex}`]}</th> */}
                                </tr>
                                {topicsData?.paper?.topics &&
                                  topicsData?.paper?.topics?.map((item) => {
                                    return (
                                      <tr>
                                        <td
                                          onClick={() =>
                                            dispatch(startQuizRequest(item?.id))
                                          }
                                        >
                                          <Link to={'/quiz/question'}>
                                            {item?.name}
                                          </Link>
                                        </td>
                                      </tr>
                                    );
                                  })}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                  {!isCurrentlyClicked && (
                    <div className='card'>
                      <div className='table-responsive'>
                        <table className='table table-bordered m-0'>
                          <tbody>
                            <tr>
                              {/* <th>{item.course1}</th> */}
                              <th>{subjects[item].qualification}</th>
                              {subjects[item].papers &&
                                subjects[item].papers?.map((item) => {
                                  return (
                                    <td
                                      onClick={() => handleClick(index, item)}
                                    >
                                      {/* {item.paper1} */}
                                      {item.name}
                                    </td>
                                  );
                                })}
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </React.Fragment>
  );
}
