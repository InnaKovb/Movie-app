import './Footer.scss';
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { SiYoutubemusic } from  'react-icons/si';
import { BsArrowRightCircleFill } from  'react-icons/bs';

function Footer ()  {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="container">
                    <div className="footer__inner">
                        <div className="footer__leftside">
                            <a className="footer__logo hover-decor" href="#">Filmsgig</a>
                            <p className="footer__text">
                                Unlimited movies, TV shows, and more.
                                Watch anywhere. Cancel anytime.
                            </p>
                            <div className="socials">
                                <div className="socials__text hover-decor">Follow Us :</div>
                                <div className="socials__icons">
                                    <a className="socials__icon hover-decor" href="#">
                                        <FaFacebook size="25px"/>
                                    </a>
                                    <a className="socials__icon hover-decor" href="#">
                                        <AiFillTwitterCircle size="29px"/>
                                    </a>
                                    <a className="socials__icon hover-decor" href="#">
                                        <AiFillInstagram size="29px"/> 
                                    </a>
                                    <a className="socials__icon hover-decor" href="#">
                                        <SiYoutubemusic size="25px"/>
                                    </a>
                                </div>    
                            </div> 
                        </div>
                        <div className="footer__rightside">
                            <div className="footer__menu">
                                <div className="footer__menu-column1">
                                    <h4 className="footer__menu-title hover-decor">Resources</h4>
                                    <div className="footer__menu-items">
                                        <a className="footer__menu-item hover-decor" href="#">Articles</a>
                                        <a className="footer__menu-item hover-decor" href="#">Forums</a>
                                        <a className="footer__menu-item hover-decor" href="#">Status</a>
                                        <a className="footer__menu-item hover-decor" href="#">Support</a>
                                    </div>
                                </div>
                                <div className="footer__menu-column2">
                                    <h4 className="footer__menu-title hover-decor">Company</h4>
                                    <div className="footer__menu-items">
                                        <a className="footer__menu-item hover-decor" href="#">About Us</a>
                                        <a className="footer__menu-item hover-decor" href="#">Careers</a>
                                        <a className="footer__menu-item  hover-decor" href="#">Our culture</a>
                                        <a className="footer__menu-item hover-decor" href="#">Contact Us</a>
                                    </div>
                                </div> 
                            </div>
                            <div className="footer__subscribe">
                                <h3 className="footer__subscribe-title hover-decor">
                                    Subscribe
                                </h3>
                                <p className="footer__subscribe-text  hover-decor">
                                    Ready to watch? Enter your email to create or restart your membership.
                                </p>
                                <div className="footer__emailForm">
                                    <input className="footer__email-input" type="email" placeholder="Email Address"/>
                                    <div className="footer__put-btn">
                                        <BsArrowRightCircleFill size="27px" color="orange"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__basement">
                <div className="container">
                    <span className="footer__copy hover-decor">
                        Filmsgig @ 2011-2022. All external content remains the property of the rightful owner.
                    </span>
                </div>
            </div>
        </footer> 
    )
}

export default Footer;
    