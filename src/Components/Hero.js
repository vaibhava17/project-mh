import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Hero = () => {
    return (
        <Router>
            <section class="hero">
                <div class="hero-container">
                    <h1 class="text-slanted">
                        rest, relax, unwind
                    </h1>
                    <h3>Embrace your choices - we do</h3>
                    <Link to="/products" class="hero-btn">
                        show now
                    </Link>
                </div>
            </section>
        </Router>
    )
};

export default Hero;