import React from "react";

const Features = () => {
    return (
        <section class="section featured">
            <div class="title">
                <h2><span>/</span> featured</h2>
            </div>
            <div class="featured-center section-center">
                <h2 class="section-loading">
                    loading...
                </h2>
                {/* <article class="product">
                    <div class="product-container">
                        <img src="./images/main-bcg.jpeg" class="product-img img" alt="" />

                        <div class="product-icons">
                            <a href="product.html?id=1" class="product-icon">
                                <i class="fas fa-search"></i>
                            </a>
                            <button class="product-cart-btn product-icon" data-id="1">
                                <i class="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                    <footer>
                        <p class="product-name">name</p>
                        <h4 class="product-price">$9.99</h4>
                    </footer>
                </article> */}
            </div>
            <a href="products.html" class="btn">
                all products
            </a>
        </section>
    )
};

export default Features;