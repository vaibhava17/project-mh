import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import init from "./index";

const Features = () => {
    window.addEventListener('DOMContentLoaded', init);
    return (
        <Router>
            <section class="section featured">
                <div class="title">
                    <h2><span>/</span> featured</h2>
                </div>
                <div class="featured-center section-center">
                    <h2 class="section-loading">
                        loading...
                    </h2>
                </div>
                <Link to="/products" class="btn">
                    all products
                </Link>
            </section>
        </Router>
    )
};

export default Features;