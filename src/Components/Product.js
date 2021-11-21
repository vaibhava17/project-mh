import React from "react";

const Product = () => {
    return (
        <>
            <section className="single-product">
                <div className="section-center single-product-center">
                    <img
                        src="./images/main-bcg.jpeg"
                        className="single-product-img img"
                        alt=""
                    />
                    <article className="single-product-info">
                        <div>
                            <h2 className="single-product-title">couch</h2>
                            <p className="single-product-company text-slanted">
                                by marcos
                            </p>
                            <p className="single-product-price">$30.00</p>
                            <div className="single-product-colors"></div>
                            <p className="single-product-desc">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id,
                                modi? Minima libero doloremque necessitatibus! Praesentium
                                recusandae quod nesciunt animi voluptatem!
                            </p>
                            <button className="addToCartBtn btn" data-id="id">
                                add to cart
                            </button>
                        </div>
                    </article>
                </div>
            </section>
            <div className="page-loading">
                <h2>loading...</h2>
            </div>
        </>
    )
};

export default Product;