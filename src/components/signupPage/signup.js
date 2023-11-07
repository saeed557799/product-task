import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { signupRequest } from '../../redux/reducers/duck/authDuck';

const SignupPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const { signup } = useSelector(({ auth }) => {
    return {
      signup: auth?.signupRes,
    };
  });

  const handleSignup = () => {
    const requestData = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      roles: 'user',
    };
    dispatch(signupRequest(requestData));
  };

  useEffect(() => {
    if (signup?.status === 201) {
      navigate('/dashboard');
    }
  }, [navigate, signup]);

  return (
    <>
      <div className='main-container'>
        <Container className='login-container'>
          <div className='form'>
            <img
              src='/images/logo.png'
              width={100}
              alt='logo'
              className='logo-img'
            />
            <h1>MyScienceLand</h1>
            <p>Sign Up To MyScienceLand</p>
            <div className='form-group'>
              <label>Name</label>
              <input
                type='text'
                value={name}
                placeholder='Name *'
                required
                onChange={(e) => setName(e?.target?.value)}
              />
            </div>
            <div className='form-group'>
              <label>Email</label>
              <input
                type='email'
                value={email}
                placeholder='Email *'
                required
                onChange={(e) => setEmail(e?.target?.value)}
              />
            </div>
            <div className='form-group'>
              <label>Password</label>
              <input
                type='password'
                value={password}
                placeholder='Password *'
                required
                onChange={(e) => setPassword(e?.target?.value)}
              />
            </div>
            <div className='form-group'>
              <label>Confirm Password</label>
              <input
                type='password'
                value={confirmPassword}
                placeholder='Confirm Password *'
                required
                onChange={(e) => setConfirmPassword(e?.target?.value)}
              />
            </div>
            <div className='button'>
              <button type='submit' onClick={() => handleSignup()}>
                Sign Up
              </button>
            </div>
            <div className='login'>
              <p>
                Already have an account? <a href='/login'>login</a>
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SignupPage;
