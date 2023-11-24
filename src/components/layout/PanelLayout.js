import { useEffect, useState } from 'react';
import { Sidebars } from '../sidebar/Sidebars';
import Avatar from '../../assets/images/avatar.svg';
import Dropdown from 'react-bootstrap/Dropdown';
import Bar from '../../assets/images/bar.png';
import { useDispatch, useSelector } from 'react-redux';
import { userRequest } from '../../redux/reducers/duck/userDuck';
import {
  dashboardSubjectTopicsRequest,
  getSubjectPrefRequest,
  getTopicId,
} from '../../redux/reducers/duck/dashboardDuck';
import QuizModal from '../Modal/QuizModal';
import { dashboardSubject } from '../../utils/helper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { subjectRequest } from '../../redux/reducers/duck/contentDuck';
import { sujectTopics } from '../../utils/helper/index';

export const PanelLayout = ({ children }) => {
  const dispatch = useDispatch();

  const [openSidebar, setOpenSidebar] = useState(true);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedTopic, setSelectedTopic] = useState('');
  const [subject, setSubject] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');

  const {
    userData,
    subjectsData,
    getSubjectsPrefData,
    dashboardSubjectTopicsData,
  } = useSelector(({ user, dashboard, content }) => ({
    userData: user?.userData,
    getSubjectsPrefData: dashboard?.getSubjectsPrefData,
    subjectsData: content?.subjectsData,
    dashboardSubjectTopicsData: dashboard?.dashboardSubjectTopicsData,
  }));

  let subjects = subjectsData?.map((item) => {
    return item?.subject;
  });

  // get subjects api
  useEffect(() => {
    dispatch(subjectRequest());
  }, [dispatch]);

  let topicData = '';
  const topic =
    selectedSubject &&
    selectedSubject?.map((item) => {
      return item?.papers?.map((item) => {
        topicData = item?.topics;
      });
    });
  const handleTopicSelect = (topic) => {
    console.log('topic', topic?.id);
    console.log('topic', topic);

    dispatch(getTopicId(topic?.id));
    setSelectedTopic(topic?.name);
  };

  // handle subejct Dropdown
  const handleSubjectSelect = (subject) => {
    setSubject(subject);
    dispatch(dashboardSubjectTopicsRequest(subject));
  };

  // user api
  useEffect(() => {
    dispatch(userRequest());
  }, [dispatch]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const sideBarMenu = () => {
    setOpenSidebar(!openSidebar);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(getSubjectPrefRequest());
  }, [dispatch]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const modalShowStatus = getSubjectsPrefData?.isPreferenceSet;

  useEffect(() => {
    if (getSubjectsPrefData?.isPreferenceSet === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [modalShowStatus]);

  return (
    <>
      <div className='panel-wrapper flex flex-wrap column-direction'>
        <div className={`panel-sidebar ${openSidebar ? 'hide' : 'show'}`}>
          <Sidebars />
        </div>
        <div
          className={`panel-main-content flex column-direction ${
            openSidebar ? 'hide' : 'show'
          }`}
        >
          <button
            onClick={sideBarMenu}
            className={`side-menu-btn fa fa-bars ${
              openSidebar ? 'hide' : 'show'
            }`}
          >
            <img src={Bar} alt='bar' />
          </button>
          <header className='panel-header items-center flex content-justify-between'>
            <div className='left-side'>
              <div className='search_bar'>
                {/* search bar  */}
                {/* <img src={Search} alt='Search' />
                <input type='text' placeholder='Type in to search ..' /> */}
                <div className='dropdowns'>
                  <Dropdown>
                    <Dropdown.Toggle id='dropdown-basic'>
                      <div className='date'>
                        <p>{subject || 'Subjects'}</p>
                      </div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {subjects &&
                        Object?.keys(subjects)?.map((item, index) => {
                          return (
                            <Dropdown.Item
                              onClick={() =>
                                handleSubjectSelect(subjects[item]?.name)
                              }
                            >
                              {subjects[item]?.name}
                            </Dropdown.Item>
                          );
                        })}
                    </Dropdown.Menu>
                  </Dropdown>

                  <Dropdown>
                    <Dropdown.Toggle id='dropdown-basic'>
                      <div className='date'>
                        <p>{selectedTopic || 'Topics'}</p>
                      </div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='dropdown-list'>
                      {dashboardSubjectTopicsData &&
                        dashboardSubjectTopicsData?.topics?.map((item) => {
                          return (
                            <Dropdown.Item
                              onClick={() => handleTopicSelect(item)}
                            >
                              {item?.name}
                            </Dropdown.Item>
                          );
                        })}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
            <div className='right-side'>
              <Dropdown>
                <Dropdown.Toggle id='dropdown-basic'>
                  <div className='date'>
                    <img src={Avatar} alt='Avatar' />
                    <p>Hello, {userData?.name}</p>
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={handleShow}>
                    <FontAwesomeIcon icon={faPlus} className='me-2' />
                    Add Preference
                  </Dropdown.Item>
                  <Dropdown.Item
                    href='/login'
                    onClick={() => localStorage.clear()}
                  >
                    <FontAwesomeIcon
                      icon={faRightFromBracket}
                      className='me-2'
                    />
                    LogOut
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </header>
          <div className='adjust-content-space'>{children}</div>
        </div>
      </div>
      <QuizModal
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
        modalShowStatus={modalShowStatus}
      />
    </>
  );
};
