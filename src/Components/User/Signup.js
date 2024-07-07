import React, { useContext, useEffect } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { UserContext } from './UserContext';

function Signup() {
  const { user, handleLoginSuccess, handleLogout } = useContext(UserContext);

  useEffect(() => {
    console.log('User:', user);
  }, [user]);

  const googleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => {
      axios.post('http://localhost:4000/api/auth/google', {
        code: codeResponse.code,
      })
      .then(response => {
        handleLoginSuccess(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    },
    onError: () => {
      console.error('Google login failed');
    },
    flow: 'auth-code',
  });

  return (
    <>
      {user ? (
        // Button to user profile
        <div className="d-flex align-items-center justify-content-center ms-2">
          <button className='btn btn-light border-0 rounded-circle p-0'>
            <img src={require('../../assets/imgs/profile.png')} width='50' height='50' alt='' />
          </button>
        </div>
      ) : (
        <button onClick={googleLogin} className='btn btn-light shadow-none' id='signup'>
          Sign Up
        </button>
      )}
    </>
  );
}

export default Signup;