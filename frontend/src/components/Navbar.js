import React ,{useState} from "react";
import { SiHelpdesk ,SiTildapublishing ,SiCivicrm, SiBoost  } from "react-icons/si";
import "./Navbar.css";
import { FcCustomerSupport,FcInternal  } from "react-icons/fc";
import { Link} from "react-router-dom";


const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
return (
    <div className="home-page">
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="https://files.oaiusercontent.com/file-NfF2MDSHBaDx21AF1ML9Rj?se=2025-02-06T17%3A48%3A24Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D6e23ff9b-1043-43d0-9ef3-d5a17c76e2b8.webp&sig=sDaKlpHFpWrzETNqUpk/ZD7AOIkcdAoXQdHx%2BanJRVY%3D" className="icon"/>
                <h2>Resolve360</h2>
            </div>
            <div className="navbar-links" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
                <button className="menu-button">Why Resolve360?</button>
                        {showDropdown && (
                            <div className={`dropdown-menu ${showDropdown ? "show" : ""}`}>
                                <div className="menu-columns">
                                    <div className="menu-section">
                                    <h4>USE CASES</h4>
                                    <img src="https://plus.unsplash.com/premium_photo-1664297701028-3e9919a2574f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3VzdG9tZXIlMjBzdXBwb3J0fGVufDB8fDB8fHww" className="icon"/>
                                    <a href="#" className="menu-link"><strong>for-Customer Support</strong><br/>- Delight customers with personal support.</a><br/>
                                    <img src="https://plus.unsplash.com/premium_photo-1682310176032-5951a4be0c6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGludGVybmFsJTIwc3VwcG9ydHxlbnwwfHwwfHx8MA%3D%3D" className="icon"/>
                                    <a href="#" className="menu-link"><strong>for-Internal Support</strong><br/>- Run an efficient help desk.</a><br/>
                                    <img src="https://images.unsplash.com/photo-1634621388916-da61c670ffac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHVibGlzaGluZ3xlbnwwfHwwfHx8MA%3D%3D" className="icon"/>
                                    <a href="#" className="menu-link"><strong>for-Publishing</strong><br/> - Enable 24/7 self-service.</a><br/>
                                    <img src="https://plus.unsplash.com/premium_photo-1661281350976-59b9514e5364?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3JtfGVufDB8fDB8fHww"className="icon"/>
                                    <a href="#" className="menu-link"><strong>for-Sales & CRM</strong><br/> - Track prospects accross every outreach channel and close sales faster</a>
                                    </div>
                                    <div className="menu-section">
                                        <h4>ROLES</h4>
                                        <SiBoost className="icon"/>
                                        <a href="#" className="menu-link"><strong> for Agents</strong><br/> - Simple support software to help boost agent productivity.</a><br/>
                                        <a href="#" className="menu-link"><strong>for Managers</strong><br/> - Understand Team performance metrics at a glance.</a><br/>
                                        <a href="#" className="menu-link"><strong>for Admins</strong><br/>- Optimize core workflows with a configurable help desk.</a><br/>
                                        <a href="#" className="menu-link"><strong>for SysAdmins</strong><br/>- Secure data with easy to deploy On-premise or cloud software.</a><br/>
                                        <a href="#" className="menu-link"><strong>for c-suite</strong><br/>- set your organization up for success with trusted software.</a><br/>
                                        <a href="#" className="menu-link"><strong>for-developers</strong><br/>- Extend your help desk potential with custom apps using your api.</a>
                                    </div>
                                    <div className="menu-section">
                                        <h4>INDUSTRIES</h4>
                                        <a href="#" className="menu-link"><strong>E-coomerce</strong></a><br/>
                                        <a href="#" className="menu-link"><strong>Education</strong><br/></a>
                                        <a href="#" className="menu-link"><strong>Finance</strong></a><br/>
                                        <a href="#" className="menu-link"><strong>Gaming</strong></a><br/>
                                        <a href="#" className="menu-link"><strong>Government</strong></a><br/>
                                        <a href="#" className="menu-link"><strong>HealthCare</strong></a><br/>
                                        <a href="#" className="menu-link"><strong>Non-Profit</strong></a><br/>
                                        <a href="#" className="menu-link"><strong>Technology</strong></a><br/>
                                        <a href="#" className="menu-link"><strong>Travel & Tourism</strong></a>
                                    </div>
                                </div>
                            </div>
                        )}
                    <li className="nav-link">Product</li>
                    <li className="nav-link">Support</li>
                    <li className="nav-link">Resources</li>
            </div>
            <div className="navbar-actions">
                <button className="btn book">
                    <Link to="/book-a-demo" className="btn-link">Book A Demo</Link>
                </button>
                <button className="btn trial">
                    <Link to="/free-trial" className="btn-link">Free Trial</Link>
                </button>
            </div>
        </nav>
    </div>
    
);
};

export default Navbar;
