import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { signupRequest } from '../../redux/reducers/duck/authDuck';
import { ButtonLoader } from '../Helper/loader';
import {
  getNameErrors,
  getEmailErrors,
  getEmailValidator,
  getPwdErrors,
  getPwdValidator,
  getConfirmPasswordErrors,
} from '../../utils/authValidator';

const SignupPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [errors, setErrors] = useState({});

  const { signup, isLoading } = useSelector(({ auth }) => {
    return {
      signup: auth?.signupRes,
      isLoading: auth?.isLoading,
    };
  });

  const findErrors = () => {
    const newErrors = {};
    if (!name) newErrors.name = getNameErrors();
    if (!getEmailValidator(email)) newErrors.email = getEmailErrors();
    if (!getPwdValidator(password)) newErrors.password = getPwdErrors();
    if (!confirmPassword)
      newErrors.confirmPassword = getConfirmPasswordErrors();
    return newErrors;
  };

  const handleSignup = () => {
    const newErrors = findErrors();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      const requestData = {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        roles: 'user',
      };
      dispatch(signupRequest(requestData));
    }
  };

  useEffect(() => {
    if (signup) {
      window.location.href = '/dashboard';
      // navigate('/dashboard');
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
              <p className='errmsg'>
                {errors.name?.map((err, index) => {
                  if (index === errors.name.length) return err;
                  else return err + '\n';
                })}
              </p>
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
                placeholder='Password *'
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
            {isLoading ? (
              <div className='loader-button'>
                <div className='button-container'>
                  <ButtonLoader />
                  <button type='submit'>Sign Up</button>
                </div>
              </div>
            ) : (
              <div className='button'>
                <button type='submit' onClick={() => handleSignup()}>
                  Sign Up
                </button>
              </div>
            )}
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
