import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./PAGE/SignUp";
import Home from "./PAGE/Home";
import LogIn from "./PAGE/LogIn";
const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/book" element={<div>Book Page</div>} />
        <Route path="/check-in" element={<div>Check-In Page</div>} />
        <Route path="/my-trips" element={<div>My Trips Page</div>} />
        <Route path="/flight-status" element={<div>Flight Status Page</div>} />
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />}/>
        <Route path="/log-in" element={<LogIn />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
