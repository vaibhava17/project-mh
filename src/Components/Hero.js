import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Hero = () => {
    return (
        <Router>
            <section className="hero">
                <div className="hero-container">
                    <h1 className="text-slanted">
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