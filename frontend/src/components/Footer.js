import React from "react";
import "./Footer.css";
const Footer = () => {
    return (
    <footer className="footer">
        <div className="footer-container">
            <div className="footer-column">
                <h3>About us</h3>
                <ul>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Media Centre</a></li>
                    <li><a href="#">Our planet</a></li>
                    <li><a href="#">Our people</a></li>
                    <li><a href="#">Our communities</a></li>
                </ul>
            </div>
            
            <div className="footer-column">
                <h3>Help</h3>
                <ul>
                    <li><a href="#">Help and Contact</a></li>
                    <li><a href="#">Travel Updates</a></li>
                    <li><a href="#">Special Assistance</a></li>
                    <li><a href="#">FAQ</a></li>
                    </ul>
            </div>
            
            <div className="footer-column">
                <h3>Book</h3>
                    <ul>
                        <li><a href="#">Book flights</a></li>
                        <li><a href="#">Travel services</a></li>
                        <li><a href="#">Transportation</a></li>
                        <li><a href="#">Planning your trip</a></li>
                        <li><a href="#">Search for flights</a></li>
                    </ul>
            </div>

            <div className="footer-column">
                <h3>Manage</h3>
                <ul>
                    <li><a href="#">Check-in</a></li>
                    <li><a href="#">Manage booking</a></li>
                    <li><a href="#">Flight status</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>Before you fly</h3>
                <ul>
                    <li><a href="#">Baggage</a></li>
                    <li><a href="#">Visa & Passport</a></li>
                    <li><a href="#">Health</a></li>
                    <li><a href="#">Travel information</a></li>
                </ul>
            </div>

            <div className="footer-column">
        <h3>Where we fly</h3>
        <ul>
            <li><a href="#">Route map</a></li>
        </ul>
        </div>


        {/* Column 8: Loyalty */}
        <div className="footer-column">
        <h3>Loyalty</h3>
        <ul>
            <li><a href="#">Log in to SkyJetters</a></li>
            <li><a href="#">Join SkyJetters</a></li>
        </ul>
        </div>
    </div>
    </footer>
  );
};

export default Footer;
