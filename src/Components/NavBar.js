import React from "react";

const Navbar = () => {
    return(
<nav class="navbar">
    <div class="nav-center">
        <div>
            <button class="toggle-nav">
                <i class="fas fa-bars"></i>
            </button>
            <ul class="nav-links">
                <li>
                    <a href="index.html" class="nav-link">
                        home
                    </a>
                </li>
                <li>
                    <a href="products.html" class="nav-link">
                        products
                    </a>
                </li>
                <li>
                    <a href="about.html" class="nav-link">
                        about
                    </a>
                </li>
            </ul>
        </div>
        <img src="./images/logo-white.svg" class="nav-logo" alt="logo" />
        <div class="toggle-container">
            <button class="toggle-cart">
                <i class="fas fa-shopping-cart"></i>
            </button>
            <span class="cart-item-count">1</span>
        </div>
    </div>
</nav>)};

export default Navbar;