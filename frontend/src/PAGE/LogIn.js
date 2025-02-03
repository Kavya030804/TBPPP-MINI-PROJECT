import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LogIn.css";

const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post("http://localhost:5000/api/log-in", { email, password });
            if (response.data.success) {
                navigate("/");
            } else {
                setError("Invalid credentials. Please Sign Up.");
            }
        } catch (error) {
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <div>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className='heading'>
                    <p>Log In</p>
                </div>
                <div className='account'>
                    <input 
                        type='text' 
                        name='email' 
                        placeholder='Enter Your Email...'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                        type='password' 
                        name='password' 
                        placeholder='Enter Your Password...'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p>Don't have an account? <a href='./sign-up'>Sign Up</a></p>
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type="submit">Log In</button>
            </form>
        </div>
    );
};

export default LogIn;
