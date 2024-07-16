import React, { useContext } from 'react';
import axios from 'axios';
import GoogleIcon from '../../assets/icons/google.svg';

import { UserContext } from './UserContext';
import { useNavigate } from 'react-router-dom'; 
import { useGoogleLogin } from '@react-oauth/google';

function Signup() {
  const { user, handleLoginSuccess } = useContext(UserContext);
  const navigate = useNavigate();

  const googleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => {
      axios.post('http://localhost:4000/api/auth/google', {
        code: codeResponse.code,
      })
      .then(response => {
        handleLoginSuccess(response.data);
        navigate('/');
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
        <div className="d-flex align-items-center justify-content-center ms-2">
          <button className='btn btn-light border-0 rounded-circle p-0'>
            <img src={require('../../assets/imgs/profile.png')} width='50' height='50' alt='' />
          </button>
        </div>
      ) : (
        <button onClick={googleLogin} className='btn btn-light shadow-none google-signup text-light'>
          <span className='me-2'><b>Google</b></span>
          <img src={GoogleIcon} width='30' height='30' alt='Google login button' />
        </button>
      )}
    </>
  );
}

export default Signup;
