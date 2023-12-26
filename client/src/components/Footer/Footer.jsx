import React from "react";
import "./Footer.scss";
import{FaLocationArrow, FaMobileAlt, FaEnvelope} from "react-icons/fa";
import Payment from "../../assets/payments.png"
const Footer = () => {
    return ( 
    <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">Everything we create is designed to tangibly improve your rest.
                    we maintain a painstaking attention to detail,quality and construction because we believe
                    you deserve to feel good, in and out of bed.
                </div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow/>
                        <div className="text">
                            Manawala Rd, near Amritsar group of college, Amritsar, Punjab,
                            143001</div>
                        
                    </div>
            
                    <div className="c-item"> 
                        <FaMobileAlt/>
                        <div className="text">Phone:9304455551</div>
                    </div>
            
                    <div className="c-item"> 
                        < FaEnvelope/>
                    <div className="text">Email: ftrends2002@gmail.com</div>
                    </div>
                </div>

            <div className="col">
                <div className="title">Categories</div>
                <span className="text">Shirt</span>
                <span className="text">Trouser</span>
                <span className="text">Dress</span> 
                <span className="text">Skirt</span>
                <span className="text">Jeans</span>
                <span className="text">Jacket</span>

            </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span> 
                <span className="text">Returns</span>
                <span className="text">Terms & Condition</span>
                <span className="text">Contact Us</span>

            </div>

        </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        F.TRENDS 2023 CREATED BY N.R.S GROUP FOR LATEST COLLECTION
                        OUTFITS.
                    </div>
                    <img src={Payment}/>
                </div>
            </div>    
       
        
        
    

        </footer>
    );
};

export default Footer;
