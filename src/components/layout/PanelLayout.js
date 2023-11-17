import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebars } from '../sidebar/Sidebars';
import Search from '../../assets/images/search.svg';
import Avatar from '../../assets/images/avatar.svg';
import Dropdown from 'react-bootstrap/Dropdown';
import Bar from '../../assets/images/bar.png';
import Spinner from '../Helper/loader';
import { useDispatch, useSelector } from 'react-redux';
import { userRequest } from '../../redux/reducers/duck/userDuck';

export const PanelLayout = ({ children }) => {
  const dispatch = useDispatch();

  const [openSidebar, setOpenSidebar] = useState(true);
  const [loading, setLoading] = useState(true);

  const { userData } = useSelector(({ user }) => ({
    userData: user?.userData,
  }));

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

  console.log('user data =>', userData);

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
                <img src={Search} alt='Search' />
                <input type='text' placeholder='Type in to search ..' />
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
                  <Dropdown.Item
                    href='/login'
                    onClick={() => localStorage.clear()}
                  >
                    LogOut
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </header>
          <div className='adjust-content-space'>{children}</div>
        </div>
      </div>
    </>
  );
};
