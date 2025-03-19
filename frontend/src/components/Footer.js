import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-container">
            <div className="footer-left">
                <h2>Try Resolve360 Today!</h2>
                <p className="footer-tagline">Building a world with better support.</p>
                <div className="footer-buttons">
                <Link to="/book-demo"><button className="demo-btn">Book a Demo</button></Link>
                <Link to="/free-trial"><button className="trial-btn">Try for free</button></Link>
                </div>
            </div>
            <div className="footer-links">
                <div className="footer-column">
                    <h4>Solutions</h4>
                    <a href="#">for Enterprise</a>
                    <a href="#">for Startups</a>
                    <a href="#">for Customer Support</a>
                    <a href="#">for Internal Support</a>
                    <a href="#">for Sales & CRM</a>
                    <a href="#">Live Chat Ticketing</a>
                </div>
                <div className="footer-column">
                    <h4>Deskpro</h4>
                    <a href="#">What is Help Desk Software?</a>
                    <a href="#">About Us</a>
                    <a href="#">Careers</a>
                    <a href="#">Blog</a>
                    <a href="#">Press</a>
                    <a href="#">What's New</a>
                </div>
                <div className="footer-column">
                    <h4>Resources</h4>
                    <a href="#">Pricing</a>
                    <a href="#">Customer Stories</a>
                    <a href="#">Cloud vs On-Premise</a>
                    <a href="#">Apps & Integrations</a>
                    <a href="#">Developers & API</a>
                    <a href="#">Security</a>
                </div>
                <div className="footer-column">
                    <h4>Support</h4>
                    <a href="#">Product Tour</a>
                    <a href="#">Help Center</a>
                    <a href="#">Talk to Sales</a>
                    <a href="#">Professional Services</a>
                    <a href="#">Product Consultancy</a>
                    <a href="#">Onboarding</a>
                </div>
                <div className="footer-column">
                    <h4>Top Features</h4>
                    <a href="#">Automation</a>
                    <a href="#">Customization</a>
                    <a href="#">Follow Ups</a>
                    <a href="#">Help Center Platform</a>
                    <a href="#">Integrations</a>
                    <a href="#">Knowledge Base Software</a>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
