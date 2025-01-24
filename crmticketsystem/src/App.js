import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/book" element={<div>Book Page</div>} />
        <Route path="/check-in" element={<div>Check-In Page</div>} />
        <Route path="/my-trips" element={<div>My Trips Page</div>} />
        <Route path="/flight-status" element={<div>Flight Status Page</div>} />
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/sign-up" element={<div>Sign up Page</div>} />
        <Route path="/login-in" element={<div>login Page</div>} />
      </Routes>
    </Router>
  );
};

export default App;
