import React, { useContext, useEffect, useRef } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { UserContext } from './UserContext';

function Signup() {
  const { user, handleLoginSuccess, handleLogout } = useContext(UserContext);
  const hasFetchedUser = useRef(false); // Add a ref to keep track of API call

  useEffect(() => {
    const createUserInBackend = async () => {
      if (user && !hasFetchedUser.current) { // Check if user exists and API call hasn't been made
        hasFetchedUser.current = true; // Update ref to prevent further API calls
        try {
          const response = await axios.post('http://localhost:4000/api/users', {
            email: user.profile.email,
            google_id: user.profile.sub,
            img: user.profile.picture,
          });
          console.log('User successfully created / retrieved');
        } catch (error) {
          console.error('Error creating user in backend:', error);
        }
      }
    };

    createUserInBackend();
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
