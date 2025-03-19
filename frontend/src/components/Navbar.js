import React ,{useState} from "react";
import "./Navbar.css";
import { MdEmail,MdOutlineBrandingWatermark,MdOutlineMessage} from "react-icons/md";
import { CiChat1,CiShoppingCart } from "react-icons/ci";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaInbox,FaNetworkWired} from "react-icons/fa";
import { FaTicket } from "react-icons/fa6";
import { SiFacebookgaming,SiKnowledgebase  } from "react-icons/si";
import { RiGovernmentFill ,RiCheckboxMultipleBlankFill} from "react-icons/ri";
import { GiProfit } from "react-icons/gi";
import { LiaWpforms } from "react-icons/lia";
import { GrTechnology } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import { TbAutomation } from "react-icons/tb";
import { IoMdAnalytics } from "react-icons/io";
import { GrIntegration } from "react-icons/gr";
import { Link} from "react-router-dom";


const Navbar = () => {
    const [platformDropdown, setPlatformDropdown] = useState(false);
    const [solutionsDropdown, setSolutionsDropdown] = useState(false);
return (
    <div className="home-page">
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="https://files.oaiusercontent.com/file-JZLcvFtvZU1kaGUBA6oJhx?se=2025-03-18T03%3A04%3A54Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dcbd19bb3-6b58-4a92-bcd9-aaf0f12adacb.webp&sig=oN2GhTt7VkkA88RsUobS5qwVDUR3fojzDEIJ3yLVA6k%3D" className="icon"/>
                <h2>Resolve360</h2>
            </div>
            <div className="navbar-links">
                <button className="menu-button" onMouseEnter={() => setPlatformDropdown(true)} onMouseLeave={() => setPlatformDropdown(false)}>
                    PLATFORM 
                        {platformDropdown && (
                            <div className={`dropdown-menu ${platformDropdown ? "show" : ""}`}>
                                <div className="menu-columns">
                                    <div className="menu-section">
                                    <h4>PLATFORM</h4>
                                    <FaInbox className="icon"/>
                                    <a href="#" className="menu-link"><strong>UNIFIED BOX</strong></a><br/>
                                    <FaTicket className="icon"/>
                                    <a href="#" className="menu-link"><strong>OMNI-CHANNEL TICKETING</strong></a><br/>
                                    <SiKnowledgebase  className="icon"/>
                                    <a href="#" className="menu-link"><strong>KNOWLEDGE BASE</strong></a><br/>
                                    <FaNetworkWired className="icon"/>
                                    <a href="#" className="menu-link"><strong>WORKFLOWS AND AUTOMATION</strong></a><br/>
                                    <IoMdAnalytics className="icon"/>
                                    <a href="#" className="menu-link"><strong>ANALYTICS</strong></a><br/>
                                    <GrIntegration className="icon"/>
                                    <a href="#" className="menu-link"><strong>INTEGRATION</strong></a><br/>
                                    <MdOutlineBrandingWatermark className="icon"/>
                                    <a href="#" className="menu-link"><strong>BRANDING AND CUSTOMIZATION</strong></a>
                                    </div>
                                    <div className="menu-section">
                                        <h4>CHANNELS</h4>
                                        <MdEmail className="icon"/>
                                        <a href="#" className="menu-link"><strong>EMAIL</strong></a><br/>
                                        <CiChat1 className="icon"/>
                                        <a href="#" className="menu-link"><strong>CHAT</strong></a><br/>
                                        <BsFillTelephoneFill className="icon"/>
                                        <a href="#" className="menu-link"><strong>Voice</strong></a><br/>
                                        <IoShareSocialSharp  className="icon"/>
                                        <a href="#" className="menu-link"><strong>Social MEDIA</strong></a><br/>
                                        <LiaWpforms className="icon"/>
                                        <a href="#" className="menu-link"><strong>CONTACT FORMS</strong></a><br/>
                                        <MdOutlineMessage className="icon"/>
                                        <a href="#" className="menu-link"><strong>MESSAGING-SERVICES</strong></a><br/>
                                        
                                    </div>
                                </div>
                            </div>
                        )}
                </button>
                <button className="menu-button" onMouseEnter={() => setSolutionsDropdown(true)} onMouseLeave={() => setSolutionsDropdown(false)}>SOLUTIONS
                        {solutionsDropdown && (
                            <div className={`dropdown-menu ${solutionsDropdown ? "show" : ""}`}>
                                <div className="menu-columns">
                                    <h4>Internal Support</h4>
                                    <p>Enhance team support systems.</p>
                                    <div className="dropdown-item">
                                        <span>IT Service Desk</span>
                                    </div>
                                    <div className="dropdown-item">
                                        <span>HR Support</span>
                                    </div>
                                </div>
                                <div className="menu-columns">
                                    <h4>Customer Support</h4>
                                    <p>Delight with omnichannel support.</p>
                                    <div className="dropdown-item">
                                        <span>B2B Support</span>
                                    </div>
                                    <div className="dropdown-item">
                                        <span>B2C Support</span>
                                    </div>
                                </div>
                            </div>
                        )}
                        </button>
                    {/* <li className="nav-link">Product</li>
                    <li className="nav-link">Support</li>
                    <li className="nav-link">Resources</li> */}
            </div>
            <div className="navbar-actions">
            <button className="btn login">
                    <Link to="/log-in" className="btn-link">LOG IN</Link>
                </button>
                <button className="btn book">
                    <Link to="/book-demo" className="btn-link">Book A Demo</Link>
                </button>
                <button className="btn trial">
                    <Link to="/free-trial" className="btn-link">Free Trial</Link>
                </button>l
            </div>
        </nav>
    </div>
    
);
};

export default Navbar;
