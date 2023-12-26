import React from "react";
import{
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
}
from "react-icons/fa";

import "./Newsletter.scss";
import { Link } from "react-router-dom";
const Newsletter = () => {
    return <div className="newsletter-section">
        <div className="newsletter-content">
            <span className="small-text">Newsletter</span>
            <span className="big-text">Sign up for latest updates and offers</span>
            <div className="form">
                <input type="text" placeholder="Email Address"/>
                <button>Subscribe</button>
            </div>
            <div className="text">Will be used in accordance with our Privacy Policy</div>
            <div className="social-icons">
                <div className="icon">
                    <Link to={'https://www.facebook.com/'}><FaFacebookF size={14} /></Link> 
                </div>
                <div className="icon">
                  <Link to={'https://twitter.com'}><FaTwitter size={14} /></Link>  
                </div>
                <div className="icon">
                   <Link to={'https://www.instagram.com/?hl=en'}> <FaInstagram size={14} /></Link>
                </div>
                <div className="icon">
                  <Link to={'https://www.linkedin.com/login'}><FaLinkedinIn size={14} /></Link>  
                </div>
            </div>

        </div>
    </div>;
};

export default Newsletter;
