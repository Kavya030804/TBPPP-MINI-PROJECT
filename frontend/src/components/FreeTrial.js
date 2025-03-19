import React from "react";
import "./FreeTrial.css"; // Import only within this component

const FreeTrial = () => {
  return (
    <div className="deskpro-container">
      {/* Left Side - Signup Box */}
      <div className="deskpro-signup-box">
        <h1>Try Resolve360 for free</h1>
        <p>14-day free trial. No credit card required.</p>

        <div className="deskpro-options">
          <button className="deskpro-cloud-btn">☁ Cloud</button>
          <button className="deskpro-self-host-btn">🖥 Self Host</button>
        </div>

        <input
          type="email"
          placeholder="name@company.com"
          className="deskpro-email-input"
        />

        <button className="deskpro-signup-btn">Sign up with Email</button>

        <p className="deskpro-terms">
          By signing up, I agree to <a href="#">Resolve360's Terms of Service</a>.
        </p>
      </div>

      {/* Right Side - Promo Box */}
      <div className="deskpro-promo-box">
        <h2>
          <span className="deskpro-highlight">understand.</span>Resolve360 is one of the
          easiest help desk softwares I have used.
        </h2>
        {/* <p><strong>Darren Banfi</strong>, Cairn Group</p> */}
        <button className="deskpro-demo-btn">Book a Demo</button>
      </div>
    </div>
  );
};

export default FreeTrial;
