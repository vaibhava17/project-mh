import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPinterest } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <>
            <Router>
                <footer className="footer">
                    <ul className="social-icon">
                        <li className="social-icon-item">
                            <Link to="/" class="social-icon-link" href="#">
                                <FontAwesomeIcon icon={faFacebook} />
                            </Link>
                        </li>
                        <li className="social-icon-item">
                            <Link to="/" class="social-icon-link" href="#">
                                <FontAwesomeIcon icon={faTwitter} />
                            </Link>
                        </li>
                        <li className="social-icon-item">
                            <Link to="/" class="social-icon-link" href="#">
                                <FontAwesomeIcon icon={faPinterest} />
                            </Link>
                        </li>
                        <li className="social-icon-item">
                            <Link to="/" class="social-icon-link" href="#">
                                <FontAwesomeIcon icon={faInstagram} />
                            </Link>
                        </li>
                    </ul>
                    <ul className="menu">
                        <li className="menu-item"><Link to="/" class="menu-link">Home</Link></li>
                        <li className="menu-item"><Link to="/products" class="menu-link">Products</Link></li>
                        <li className="menu-item"><Link to="/about" class="menu-link">About</Link></li>
                        <li className="menu-item"><Link to="/service" class="menu-link">Services</Link></li>
                        <li className="menu-item"><Link to="/contact" class="menu-link">Contact</Link></li>
                    </ul>
                    <p>&copy; {new Date().getFullYear()} Magic Home | All Rights Reserved</p>
                </footer>
            </Router>
        </>
    )
};

export default Footer;