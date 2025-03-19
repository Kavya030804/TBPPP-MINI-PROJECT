import React from "react";
import './Home.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LogIn from "./LogIn";
const Home = () =>{
    return(
        <div>
            <Navbar/>
            <div className="content">
                <div className="content-in">
                    <h1>Transforming Customer Support</h1>
                    <h2>With Fast, Smart, </h2>
                    <h2>and Seamless Ticket Resolution!</h2>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;