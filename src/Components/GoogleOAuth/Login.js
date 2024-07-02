import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

function Login() {
  const googleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => {
      // Send the authorization code to the backend server
      axios.post('http://localhost:4000/api/auth/google', {
        code: codeResponse.code,
      })
      .then(response => {
        console.log('Backend response:', response.data);
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
    <button onClick={() => googleLogin()} className='btn btn-light shadow-none' id='signup'>
      Sign Up
    </button>
  );
}

export default Login;