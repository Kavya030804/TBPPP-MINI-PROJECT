import React from 'react';
import './SignUp.css';
const SignUp = () => {
  return (
    <div>
      <div className='main-page'>
        <form>
          <div className='heading'>
            <p>Sign Up</p>
          </div>
          <div className='account'>
            <input type ='text' name='name' placeholder='Enter Your Name...'/>
            <input type ='tel' name='phone' placeholder='Enter Your Phone Number...'/>
            <input type ='text' name='email' placeholder='Enter Your Email...'/>
            <input type ='text' name='password' placeholder='Enter Your Password...'/>
            <p>Already have an account ? <a href='./log-in'>Log In</a></p>
          </div>
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
