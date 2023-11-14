import React, { useEffect, useState } from 'react';
import data from './ContentPaper.json';
import { Link } from 'react-router-dom';
import {
  subjectRequest,
  topicsRequest,
} from '../../../../redux/reducers/duck/contentDuck';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../../../components/Helper/loader';

export default function ContentPaper() {
  const dispatch = useDispatch();
  const contentPaper = data.contentPaper;
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
          {subjectsData &&
            subjectsData.map((item, index) => {
              // {contentPaper.map((item, index) => {
              const isCurrentlyClicked = clickedItem.index === index;

              return (
                <div className='col-md-12' key={index}>
                  <div className='heading'>
                    {/* <h3>{item.subject}</h3> */}
                    <h3>{item.name}</h3>
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
                                        <td>
                                          <Link to={'/quiz/question'}>
                                            {/* {item.topic1} */}
                                            {item.name}
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
                              <th>{item?.qualification}</th>
                              {item?.papers &&
                                item?.papers?.map((item) => {
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
