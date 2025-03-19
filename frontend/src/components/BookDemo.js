import React from "react";
import "./BookDemo.css";

const BookDemo = () => {
  return (
    <div className="deskpro-demo-container">
      {/* Left Side - Text Section */}
      <div className="deskpro-demo-text">
        <h3>READY FOR YOUR RESOLVE360 DEMO?</h3>
        <h1>Book your Resolve360 Demo</h1>
        <div className="deskpro-avatars">
          <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="User 1" />
          <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="User 2" />
          <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="User 3" />
          <img src="https://randomuser.me/api/portraits/women/4.jpg" alt="User 4" />
          <img src="https://randomuser.me/api/portraits/men/5.jpg" alt="User 5" />
        </div>
        <p>
          Schedule a one-on-one demo with a product specialist and take the first
          step toward improving your support!
        </p>
        <h4>WHAT CAN YOU EXPECT?</h4>
        <ul>
          <li>✔ Explore the platform and see the features in action</li>
          <li>✔ Tailored demo to address your unique requirements</li>
          <li>✔ Learn how Resolve360 streamlines operations accross various teams</li>
        </ul>
      </div>

      {/* Right Side - Form Section */}
      <div className="deskpro-demo-form">
        <form>
          <div className="form-row">
            <input type="text" placeholder="First name" required />
            <input type="text" placeholder="Last name" required />
          </div>
          <input type="email" placeholder="Work email" required />
          <div className="phone-input">
            <span className="flag">🇮🇳</span>
            <input type="text" placeholder="+91 81234 56789" required />
          </div>
          <input type="text" placeholder="Company name" required />
          <button type="submit">Request a demo</button>
        </form>
      </div>
    </div>
  );
};

export default BookDemo;
