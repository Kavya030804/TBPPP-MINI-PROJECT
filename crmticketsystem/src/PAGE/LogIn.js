import React from "react";
import './SignUp.css';
const LogIn = () => {
    return (
        <div>
            <div>
                <form>
                    <div className='heading'>
                        <p>Log In</p>
                    </div>
                    <div className='account'>
                        <input type ='text' name='email' placeholder='Enter Your Email...'/>
                        <input type ='text' name='password' placeholder='Enter Your Password...'/>
                        <p>Don't have an account ? <a href='./sign-up'>Sign Up</a></p>
                    </div>
                    <button>Log In</button>
                </form>
            </div>
        </div>
    );
};

export default LogIn;