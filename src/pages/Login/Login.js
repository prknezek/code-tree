import React from 'react';
import Signup from '../../components/User/Signup';

import './login.css';

function Login() {
  return (
    <div className='row w-100 h-100'>
      <div className='col-2'></div>
      <div className='col-8 px-5 d-flex align-items-center justify-content-center'>
        <div className='card p-3 shadow-sm'>
          <div className='card-body text-dark'>
            <h1 className='text-center card-title p-0'>Sign in with Google</h1>
            <hr />
            <div className='d-flex align-items-center justify-content-center mt-4'>
              <Signup />
            </div>
          </div>
        </div>
      </div>
      <div className='col-2'></div>
    </div>
  );
}

export default Login;