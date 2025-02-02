import { React, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        alert('Sign Up Successful');
        navigate('/');
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className='main-page'>
      <form onSubmit={handleSubmit}>
        <div className='heading'>
          <p>Sign Up</p>
        </div>
        <div className='account'>
          <input type='text' name='name' placeholder='Enter Your Name...' value={formData.name} onChange={handleChange} required/>
          <input type='tel' name='phone' placeholder='Enter Your Phone Number...' value={formData.phone} onChange={handleChange} required/>
          <input type='email' name='email' placeholder='Enter Your Email...' value={formData.email} onChange={handleChange} required/>
          <input type='password' name='password' placeholder='Enter Your Password...' value={formData.password} onChange={handleChange} required/>
          <p>Already have an account? <a href='./log-in'>Log In</a></p>
        </div>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
