import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./LogIn.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const LogIn = () => {

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleInput = (event) =>{
        const value=event.target.value;
        const name=event.target.name;
        if(name==="email"){
            setEmail(value);
        }
        if(name==="password"){
            setPassword(value);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setError("");
        if(email==="" && password==="" ){
            setError("Please fill in all fields");
        }
        else{
            let getDetails = JSON.parse(localStorage.getItem("user")) || [];

        if (!Array.isArray(getDetails)) {
            setError("Invalid user data. Please sign up again.");
            return;
        }

        const userFound = getDetails.find((curValue) => 
            curValue.email === email && curValue.password === password
        );

        if (userFound) {
            alert("Login Successful!");
            navigate("/");
        } 
        else {
            setError("Invalid email or password. Try again.");
        }
        }
    }


    return (
        <>
        <Navbar/>
        <div className="login-page">
            <form className="login-form" onSubmit={handleSubmit}>
                <div className='heading'>
                    <p>Log In</p>
                </div>
                <div className='account'>
                    <input 
                        type='text' 
                        name='email' 
                        placeholder='Enter Your Email...'
                        onChange={handleInput}
                        value={email}
                    />
                    <input 
                        type='password' 
                        name='password' 
                        placeholder='Enter Your Password...'
                        onChange={handleInput}
                        value={password}
                    />
                    <p>Don't have an account? <a href='./sign-up'>Sign Up</a></p>
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type="submit">Log In</button>
            </form>
        </div>
        <Footer/>
        </>
    );
};

export default LogIn;
