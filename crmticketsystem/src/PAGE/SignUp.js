import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Navbar from './components/Navbar';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    day: '',
    month: '',
    year: '',
    country: 'India',
    language: '',
    countryCode: '+91',
    mobileNumber: '',
    inviteCode: '',
    membershipNumber: 'no',
    newsletters: false,
    flydubaiNewsletters: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('User data:', formData);
        alert('Signup successful!');
        navigate('/welcome');
      } else {
        alert('Signup failed!');
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-600 flex items-center justify-center">
      <form 
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md space-y-4" 
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-bold text-gray-800">Join Sky-Jetters</h2>
        <p className="text-sm text-gray-500">
          Open up a world of rewards every time you travel. Enjoy reward flights, upgrades, exclusive benefits, and more.
        </p>

        <select
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Title</option>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Ms">Ms</option>
        </select>

        <div className="flex space-x-2">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-1/2 border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-1/2 border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <div className="flex space-x-2">
          <input
            type="text"
            name="day"
            placeholder="Day"
            value={formData.day}
            onChange={handleChange}
            className="w-1/3 border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="month"
            placeholder="Month"
            value={formData.month}
            onChange={handleChange}
            className="w-1/3 border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="year"
            placeholder="Year"
            value={formData.year}
            onChange={handleChange}
            className="w-1/3 border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex space-x-2">
          <select
            name="language"
            value={formData.language}
            onChange={handleChange}
            className="w-1/2 border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Preferred Language</option>
            <option value="English">English</option>
            <option value="Arabic">Hindi</option>
          </select>

          <input
            type="text"
            name="mobileNumber"
            placeholder="Mobile Number"
            value={formData.mobileNumber}
            onChange={handleChange}
            className="w-1/2 border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* <input
          type="text"
          name="inviteCode"
          placeholder="Enter Invite Code (optional)"
          value={formData.inviteCode}
          onChange={handleChange}
          className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        /> */}

        {/* <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="membershipNumber"
              value="no"
              checked={formData.membershipNumber === 'no'}
              onChange={handleChange}
              className="mr-2"
            />
            No
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="membershipNumber"
              value="yes"
              checked={formData.membershipNumber === 'yes'}
              onChange={handleChange}
              className="mr-2"
            />
            Yes
          </label>
        </div> */}

        {/* <div className="space-y-2"> */}
          {/* <label className="flex items-center">
            <input
              type="checkbox"
              name="newsletters"
              checked={formData.newsletters}
              onChange={handleChange}
              className="mr-2"
            />
            Sign up to receive Emirates newsletters and special offers
          </label> */}
          {/* <label className="flex items-center">
            <input
              type="checkbox"
              name="flydubaiNewsletters"
              checked={formData.flydubaiNewsletters}
              onChange={handleChange}
              className="mr-2"
            />
            Sign up to receive flydubai newsletters and special offers
          </label> */}
        {/* </div> */}

        <button
          type="submit"
          className="bg-red-600 text-white w-full py-2 rounded-md hover:bg-red-700 transition"
        >
          Create an Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
