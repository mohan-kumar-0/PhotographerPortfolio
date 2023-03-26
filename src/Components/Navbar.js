import React from "react";
import {FaInstagram,FaYoutube,FaLinkedinIn} from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <nav className="main-nav">
                <div className="logo">
                    <h2>
                        <span>M</span>ohan
                        <span>K</span>umar
                    </h2>
                </div>
                <div className="nav-menu-main">
                    <ul className="nav-menu">
                        <li>
                            <a href='\gallery'>gallery</a>
                        </li>
                        <li>
                            <a href='\about'>about</a>
                        </li>
                    </ul>
                </div>
                <div className="social-media-links">
                    <ul className="social-media">
                        <li>
                            <a href='https://www.youtube.com/' target='_youtube'><FaYoutube className="youtube" color='#ff0000'/></a>
                        </li>
                        <li>
                            <a href='https://www.instagram.com/' target='_instagram'><FaInstagram className="instagram" color='#e95950'/></a>
                        </li>
                        <li>
                            <a href='https://in.linkedin.com/in/m' target='_linkedin'><FaLinkedinIn className="linkedin" color='#2D86F7'/></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar