import { React, useState} from 'react';
// import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {

  const userDetails = {
    name: "",
    phone: "",
    email: "",
    password: ""
  }

  const[data,setData]=useState(userDetails)
  const handleInput = (event) =>{
    console.log(event.target.value);
    console.log(event.target.name);
    const name = event.target.name;
    const value=event.target.value;

    setData({...data,[name]:value})
  }

  const handleSubmit = (event)=> {
    event.preventDefault();
    const getData = JSON.parse(localStorage.getItem("user"))
    localStorage.setItem("user",JSON.stringify(data));
  }
  // const [formData, setFormData] = useState({
  //   name: '',
  //   phone: '',
  //   email: '',
  //   password: ''
  // });

  // const navigate = useNavigate();

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch('http://localhost:5000/api/sign-up', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(formData)
  //     });
      
  //     const data = await response.json();
      
  //     if (response.ok) {
  //       alert('Sign Up Successful');
  //       navigate('/');
  //     } else {
  //       alert(`Error: ${data.message}`);
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //     alert('Something went wrong. Please try again.');
  //   }
  // };

  return (
    <div className='main-page'>
      <form onSubmit={handleSubmit}>
        <div className='heading'>
          <p>Sign Up</p>
        </div>
        <div className='account'>
        {/* value={formData.name} onChange={handleChange} required */}
          <input type='text' name='name' placeholder='Enter Your Name...' onChange={handleInput}/>
          <input type='tel' name='phone' placeholder='Enter Your Phone Number...' onChange={handleInput}/>
          <input type='email' name='email' placeholder='Enter Your Email...' onChange={handleInput}/>
          <input type='password' name='password' placeholder='Enter Your Password...' onChange={handleInput}/>
          <p>Already have an account? <a href='./log-in'>Log In</a></p>
        </div>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
