import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Logo from "./images/logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCouch } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [cart, setCart] = useState(false);
    let navClass = ["sidebar-overlay"];
    if (isOpen) {
        navClass.push("show");
    }
    let cartClass = ["cart-overlay"];
    if (cart) {
        cartClass.push("show");
    }
    return (
        <>
            <Router>
                {/* Navbar */}
                <nav className="navbar">
                    <div className="nav-center">
                        <div>
                            <button className="toggle-nav" onClick={() => setIsOpen(true)} >
                                <FontAwesomeIcon icon={faBars} />
                            </button>
                            <ul className="nav-links">
                                <li>
                                    <Link to="/" className="nav-link">
                                        home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/products" className="nav-link">
                                        products
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="nav-link">
                                        about
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <img src={Logo} className="nav-logo" alt="logo" />
                        <div className="toggle-container">
                            <button className="toggle-cart" onClick={() => setCart(true)}>
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </button>
                            <span className="cart-item-count">1</span>
                        </div>
                    </div>
                </nav>
                {/* Sidebar */}
                <div className={navClass.join(" ")}>
                    <aside className="sidebar">
                        <button className="sidebar-close" onClick={() => setIsOpen(false)}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                        <ul className="sidebar-links">
                            <li>
                                <Link to="/" className="sidebar-link">
                                    <span className="fa-layers fa-fw">
                                        <FontAwesomeIcon icon={faHome} />
                                    </span>
                                    home
                                </Link>
                            </li>
                            <li>
                                <Link to="/products" className="sidebar-link">
                                    <span className="fa-layers fa-fw">
                                        <FontAwesomeIcon icon={faCouch} />
                                    </span>
                                    products
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="sidebar-link">
                                    <span className="fa-layers fa-fw">
                                        <FontAwesomeIcon icon={faBook} />
                                    </span>
                                    about
                                </Link>
                            </li>
                        </ul>
                    </aside>
                </div>
                {/* Cart */}
                <div className={cartClass.join(" ")}>
                    <aside className="cart">
                        <button className="cart-close" onClick={() => setCart(false)}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                        <header>
                            <h3 className="text-slanted">your bag</h3>
                        </header>
                        <div className="cart-items"></div>
                        <footer>
                            <h3 className="cart-total text-slanted">
                                total : $12.99
                            </h3>
                            <button className="cart-checkout btn">checkout</button>
                        </footer>
                    </aside>
                </div>
            </Router>
        </>
    )
};

export default Navbar;