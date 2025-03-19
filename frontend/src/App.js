import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./PAGE/SignUp";
import Home from "./PAGE/Home";
import LogIn from "./PAGE/LogIn";
import FreeTrial from "./components/FreeTrial";
import BookDemo from "./components/BookDemo";
const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />}/>
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/free-trial" element={<FreeTrial />} />
        <Route path="/book-demo" element={<BookDemo />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
