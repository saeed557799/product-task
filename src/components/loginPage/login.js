import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { loginRequest } from '../../redux/reducers/duck/authDuck';

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { login } = useSelector(({ auth }) => {
    return {
      login: auth?.loginRes,
    };
  });

  console.log('login => ', login);

  const dispatch = useDispatch();

  const handleLogin = () => {
    const requestData = {
      email: email,
      password: password,
    };
    dispatch(loginRequest(requestData));
  };

  useEffect(() => {
    if (login?.status === 201) {
      navigate('/dashboard');
    }
  }, [login, navigate]);

  return (
    <>
      <div className='logo-container'>
        <Button type='text' className='quiz'>
          QUI
          <span className=''>ZZ.</span>
        </Button>
      </div>
      <Container className='login-container'>
        <div className='form'>
          <h1>Login</h1>
          <p className='login-text'>Please login to continue with the app.</p>
          <div className='form-group'>
            <label>Email</label>
            <input
              type='email'
              value={email}
              placeholder='Enter email'
              required
              onChange={(e) => setEmail(e?.target?.value)}
            />
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input
              type='password'
              value={password}
              placeholder='Password'
              required
              onChange={(e) => setPassword(e?.target?.value)}
            />
          </div>
          <div className='checkbox-container'>
            <label className='checkbox'>
              <input type='checkbox' className='checkbox-input' />
              <span className='checkmark'></span>
              <span className=''>Remember Me</span>
            </label>
            <p className=''>Forgot password?</p>
          </div>
          <div className='button'>
            <button type='submit' onClick={() => handleLogin()}>
              Login
            </button>
          </div>
          <div className='signup'>
            <p>
              To join MyScienceLand, please <a href='/signup'>Sign Up</a>
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default LoginPage;
