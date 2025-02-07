import React ,{useState} from "react";
import "./Navbar.css";
import { MdEmail,MdCastForEducation,MdHealthAndSafety,MdOutlineTravelExplore, MdOutlineReviews} from "react-icons/md";
import { CiChat1,CiShoppingCart } from "react-icons/ci";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaWallet,FaWpforms,FaHandsHelping ,FaFacebookMessenger} from "react-icons/fa";
import { SiFacebookgaming } from "react-icons/si";
import { RiGovernmentFill ,RiCheckboxMultipleBlankFill} from "react-icons/ri";
import { GiProfit } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import { TbAutomation } from "react-icons/tb";
import { Link} from "react-router-dom";


const Navbar = () => {
    const [showWhyDropdown, setShowWhyDropdown] = useState(false);
    const [showProductsDropdown, setShowProductsDropdown] = useState(false);
return (
    <div className="home-page">
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="https://files.oaiusercontent.com/file-NfF2MDSHBaDx21AF1ML9Rj?se=2025-02-06T17%3A48%3A24Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D6e23ff9b-1043-43d0-9ef3-d5a17c76e2b8.webp&sig=sDaKlpHFpWrzETNqUpk/ZD7AOIkcdAoXQdHx%2BanJRVY%3D" className="icon"/>
                <h2>Resolve360</h2>
            </div>
            <div className="navbar-links">
                <button className="menu-button" onMouseEnter={() => setShowWhyDropdown(true)} onMouseLeave={() => setShowWhyDropdown(false)}>
                    Why Resolve360?
                        {showWhyDropdown && (
                            <div className={`dropdown-menu ${showWhyDropdown ? "show" : ""}`}>
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
                                        <img src="https://images.unsplash.com/photo-1627161683077-e34782c24d81?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFnZW50c3xlbnwwfHwwfHx8MA%3D%3D" className="icon"/>
                                        <a href="#" className="menu-link"><strong> for Agents</strong><br/> - Simple support software to help boost agent productivity.</a><br/>
                                        <img src="https://images.unsplash.com/photo-1573496130141-209d200cebd8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFuYWdlcnN8ZW58MHx8MHx8fDA%3D" className="icon"/> 
                                        <a href="#" className="menu-link"><strong>for Managers</strong><br/> - Understand Team performance metrics at a glance.</a><br/>
                                        <img src="https://plus.unsplash.com/premium_photo-1674340232939-c76c8cdf2548?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFkbWluc3xlbnwwfHwwfHx8MA%3D%3D" className="icon"/>
                                        <a href="#" className="menu-link"><strong>for Admins</strong><br/>- Optimize core workflows with a configurable help desk.</a><br/>
                                        <img src="https://plus.unsplash.com/premium_photo-1687119905703-fb52ba5e7c93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3lzdGVtJTIwYWRtaW5zfGVufDB8fDB8fHww" className="icon"/>
                                        <a href="#" className="menu-link"><strong>for SysAdmins</strong><br/>- Secure data with easy to deploy On-premise or cloud software.</a><br/>
                                        <img src="https://images.unsplash.com/photo-1692465210305-adedfadcfc52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YyUyMHN1aXRlfGVufDB8fDB8fHww" className="icon"/>
                                        <a href="#" className="menu-link"><strong>for c-suite</strong><br/>- set your organization up for success with trusted software.</a><br/>
                                        <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGV2ZWxvcGVyc3xlbnwwfHwwfHx8MA%3D%3D" className="icon"/>
                                        <a href="#" className="menu-link"><strong>for-developers</strong><br/>- Extend your help desk potential with custom apps using your api.</a>
                                    </div>
                                    <div className="menu-section">
                                        <h4>INDUSTRIES</h4>
                                        <CiShoppingCart className="icon"/>
                                        <a href="#" className="menu-link"><strong>E-coomerce</strong></a><br/>
                                        <MdCastForEducation className="icon"/>
                                        <a href="#" className="menu-link"><strong>Education</strong><br/></a>
                                        <FaWallet className="icon"/>
                                        <a href="#" className="menu-link"><strong>Finance</strong></a><br/>
                                        <SiFacebookgaming className="icon"/>
                                        <a href="#" className="menu-link"><strong>Gaming</strong></a><br/>
                                        <RiGovernmentFill className="icon"/>
                                        <a href="#" className="menu-link"><strong>Government</strong></a><br/>
                                        <MdHealthAndSafety className="icon"/>
                                        <a href="#" className="menu-link"><strong>HealthCare</strong></a><br/>
                                        <GiProfit className="icon"/>
                                        <a href="#" className="menu-link"><strong>Non-Profit</strong></a><br/>
                                        <GrTechnology className="icon"/>
                                        <a href="#" className="menu-link"><strong>Technology</strong></a><br/>
                                        <MdOutlineTravelExplore className="icon"/>
                                        <a href="#" className="menu-link"><strong>Travel & Tourism</strong></a>
                                    </div>
                                </div>
                            </div>
                        )}
                        </button>
                        <button className="menu-button" onMouseEnter={() => setShowProductsDropdown(true)} onMouseLeave={() => setShowProductsDropdown(false)}>Products
                        {showProductsDropdown && (
                            <div className={`dropdown-menu ${showProductsDropdown ? "show" : ""}`}>
                                <div className="menu-columns">
                                    <div className="menu-section">
                                    <h4>CHANNELS</h4>
                                    < MdEmail className="icon"/>
                                    <a href="#" className="menu-link"><strong>E-mail</strong><br/>Track,priortize and resolve emails in one ticketing system.</a><br/>
                                    <CiChat1 className="icon"/>
                                    <a href="#" className="menu-link"><strong>Chat</strong><br/>Quickly and easily assist customers in the moment with Live-chat.</a><br/>
                                    <IoShareSocialSharp  className="icon"/>
                                    <a href="#" className="menu-link"><strong>Social</strong><br/>Simplify social interactions accross the platforms user loves.</a><br/>
                                    <BsFillTelephoneFill className="icon"/>
                                    <a href="#" className="menu-link"><strong>Voice</strong><br/>Full integrated call center solution built directy into your help desk.</a><br/>
                                    <FaWpforms className="icon"/>
                                    <a href="#" className="menu-link"><strong>Forms</strong><br/>Collect data in a structered way using dynamic forms.</a><br/>
                                    <MdOutlineReviews className="icon"/>
                                    <a href="#" className="menu-link"><strong>Reviews</strong><br/>Manage your online reputation and reviews from our help desk</a>
                                    </div>
                                    <div className="menu-section">
                                        <h4>FEATURES</h4>
                                        <TbAutomation className="icon"/>
                                        <a href="#" className="menu-link"><strong>Automation</strong><br/>Increase the effectiveness of your suppoert teams,forever.</a><br/>
                                        <FaHandsHelping className="icon"/> 
                                        <a href="#" className="menu-link"><strong>Help-Centre</strong><br/>Provide a 24/7 self-service hub and knowledge base.</a><br/>
                                        <FaFacebookMessenger className="icon"/>
                                        <a href="#" className="menu-link"><strong>Messenger</strong><br/>Connect with customers and resolve their issues in real-time.</a><br/>
                                        <RiCheckboxMultipleBlankFill className="icon"/>
                                        <a href="#" className="menu-link"><strong>Multiple-Brands</strong><br/>Multiple-brands,products or services on one platform.</a><br/>

                                    </div>
                                    <div className="menu-section">
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
                        </button>
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
