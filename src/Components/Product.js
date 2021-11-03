import React from "react";

const Product = () => {
    return (
        <>
            <section class="single-product">
                <div class="section-center single-product-center">
                    <img
                        src="./images/main-bcg.jpeg"
                        class="single-product-img img"
                        alt=""
                    />
                    <article class="single-product-info">
                        <div>
                            <h2 class="single-product-title">couch</h2>
                            <p class="single-product-company text-slanted">
                                by marcos
                            </p>
                            <p class="single-product-price">$30.00</p>
                            <div class="single-product-colors"></div>
                            <p class="single-product-desc">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id,
                                modi? Minima libero doloremque necessitatibus! Praesentium
                                recusandae quod nesciunt animi voluptatem!
                            </p>
                            <button class="addToCartBtn btn" data-id="id">
                                add to cart
                            </button>
                        </div>
                    </article>
                </div>
            </section>
            <div class="page-loading">
                <h2>loading...</h2>
            </div>
        </>
    )
};

export default Product;