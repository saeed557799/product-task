import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/logo.svg';
import dashboard from '../../assets/images/dashboard.svg';
import content from '../../assets/images/content.svg';
import quiz from '../../assets/images/quiz.svg';
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
import { Link, useLocation } from 'react-router-dom';

export const Sidebars = (props) => {
  const location = useLocation();
  const [activeImage, setActiveImage] = useState(() => {
    const storedImage = localStorage.getItem('activeImage');
    return storedImage ? storedImage : dashboard;
  });

  useEffect(() => {
    // Update activeImage based on the current URL
    const path = location.pathname;
    if (path === '/') {
      setActiveImage(dashboard);
    } else if (path.startsWith('/content')) {
      setActiveImage(content);
    } else if (path.startsWith('/quiz')) {
      setActiveImage(quiz);
    }
  }, [location.pathname]);

  useEffect(() => {
    // Persist activeImage in local storage
    localStorage.setItem('activeImage', activeImage);
  }, [activeImage]);

  const handleImageClick = (image) => {
    setActiveImage(image);
  };

  return (
    <>
      <Sidebar>
        <div className='logo'>
          <img src={logo} alt='logo' />
          <h5>MyScienceLand</h5>
        </div>
        <Menu>
          <MenuItem
            onClick={() => handleImageClick(dashboard)}
            component={<Link to='/dashboard' />}
            className={activeImage === dashboard ? 'active-link' : ''}
          >
            <img src={dashboard} alt='icon' />
            <p>Dashboard</p>
          </MenuItem>
          <MenuItem
            onClick={() => handleImageClick(content)}
            component={<Link to='/content' />}
            className={activeImage === content ? 'active-link' : ''}
          >
            <img src={content} alt='icon' />
            <p>Content</p>
          </MenuItem>
          <MenuItem
            onClick={() => handleImageClick(quiz)}
            component={<Link to='/quiz' />}
            className={activeImage === quiz ? 'active-link' : ''}
          >
            <img src={quiz} alt='icon' />
            <p>Quiz</p>
          </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
};
