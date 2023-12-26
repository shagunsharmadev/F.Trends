import "./Banner.scss";

import Shirtt from '../../../assets/ss.png';


const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                <p>
                Prepare for the Summer season with the latest and most adorable
                fashion trends.Discover our Latest Collection Summer Outfits. 
                Shop now!
                </p>
                <div className="ctas">
                    <div  className="banner-cta">Read More</div>
                    <div  className="banner-cta v2">Shop Now</div>
                </div>
        
            </div>
            <img className="banner-img" src={Shirtt} alt=""/>
            
        </div>
    </div>;
};

export default Banner;
