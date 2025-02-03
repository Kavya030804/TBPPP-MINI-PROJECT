import { React, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const SignUp = () => {

  const userDetails = {
    name: "",
    phone: "",
    email: "",
    password: ""
  }

  const[data,setData]=useState(userDetails)
  const navigate = useNavigate();
  const handleInput = (event) =>{
    console.log(event.target.value);
    console.log(event.target.name);
    const name = event.target.name;
    const value=event.target.value;

    setData({...data,[name]:value})
  }

  const handleSubmit = (event)=> {
    event.preventDefault();
    if(data.name==="" || data.phone==="" || data.email==="" || data.password ===""){
      alert("Please enter details!")
    }
    else{
      let getData = localStorage.getItem("user");
      if (getData) {
        try {
          getData = JSON.parse(getData);
          if (!Array.isArray(getData)) {
            getData = [];
          }
        } catch (error) {
          console.error("Error parsing localStorage data:", error);
          getData = [];
        }
        }
        else {
          getData = [];
        }
        let arr = [...getData, data];
        localStorage.setItem("user", JSON.stringify(arr));
        alert("Signup Successful!");
        navigate("/log-in");
    }
  }
  
  return (
    <>
    <Navbar/>
    <div className='main-page'>
      <form onSubmit={handleSubmit}>
        <div className='heading'>
          <p>Sign Up</p>
        </div>
        <div className='account'>
          <input type='text' name='name' placeholder='Enter Your Name...' onChange={handleInput}/>
          <input type='tel' name='phone' placeholder='Enter Your Phone Number...' onChange={handleInput}/>
          <input type='email' name='email' placeholder='Enter Your Email...' onChange={handleInput}/>
          <input type='password' name='password' placeholder='Enter Your Password...' onChange={handleInput}/>
          <p>Already have an account? <a href='./log-in'>Log In</a></p>
        </div>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default SignUp;
