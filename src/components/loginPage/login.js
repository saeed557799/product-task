import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { loginRequest } from '../../redux/reducers/duck/authDuck';
import { ButtonLoader } from '../Helper/loader';
import { getEmailErrors, getEmailValidator } from '../../utils/authValidator';

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errors, setErrors] = useState({});

  const { login, isLoading } = useSelector(({ auth }) => ({
    login: auth?.loginRes,
    isLoading: auth?.isLoading,
  }));

  const findErrors = () => {
    const newErrors = {};
    if (!getEmailValidator(email)) newErrors.email = getEmailErrors();
    if (!password) newErrors.password = ['Password is required.'];
    return newErrors;
  };

  const handleLogin = () => {
    const newErrors = findErrors();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      const requestData = {
        email: email,
        password: password,
      };
      dispatch(loginRequest(requestData));
      clearState();
    }
  };

  useEffect(() => {
    if (login) {
      window.location.href = '/dashboard';
    }
  }, [login, navigate]);

  const clearState = () => {
    setEmail('');
    setPassword('');
  };

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
            <p>Sign Into MyScienceLand</p>
            <div className='form-group'>
              <label>Email</label>
              <input
                type='email'
                value={email}
                placeholder='Enter email'
                required
                onChange={(e) => setEmail(e?.target?.value)}
              />
              <p className='errmsg'>
                {errors.email?.map((err, index) => {
                  if (index === errors.email.length) return err;
                  else return err + '\n';
                })}
              </p>
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
              <p className='errmsg'>
                {errors.password?.map((err, index) => {
                  if (index === errors.password.length) return err;
                  else return err + '\n';
                })}
              </p>
            </div>
            <div className='checkbox-container'>
              <label className='checkbox'>
                <input type='checkbox' className='checkbox-input' />
                <span className='checkmark'></span>
                <span className=''>Remember Me</span>
              </label>
              <p className=''>Forgot password?</p>
            </div>
            {isLoading ? (
              <div className='loader-button'>
                <div className='button-container'>
                  <ButtonLoader />
                  <button type='submit'>Login</button>
                </div>
              </div>
            ) : (
              <div className='button'>
                <button type='submit' onClick={() => handleLogin()}>
                  Login
                </button>
              </div>
            )}

            <div className='signup'>
              <p>
                To join MyScienceLand, please <a href='/signup'>Sign Up</a>
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default LoginPage;
