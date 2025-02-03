import React from "react";
import './Home.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Home = () =>{
    return(
        <div>
            <Navbar/>
            <div className="content">
                <div className="content-in">
                    <h1>Soaring Beyond the Ordinary</h1>
                    <h2>Where Every Flight is an Adventure in the Clouds</h2>
                    <button>Log Out</button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;