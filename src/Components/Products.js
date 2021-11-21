import React from "react";

const Products = () => {
    return (
        <>
            <section className="products">
                <div className="filters">
                    <div className="filters-container">
                        <form className="input-form">
                            <input type="text" className="search-input" placeholder="search..." />
                        </form>
                        <h4>Company</h4>
                        <article className="companies">
                            <button className="company-btn">all</button>
                            <button className="company-btn">ikea</button>
                        </article>
                        <h4>Price</h4>
                        <form className="price-form">
                            <input
                                type="range"
                                className="price-filter"
                                min="0"
                                value="50"
                                max="100"
                            />
                        </form>
                        <p className="price-value"></p>
                    </div>
                </div>
                <div className="products-container"></div>
            </section>
            <div className="page-loading">
                <h2>Loading...</h2>
            </div>
        </>
    )
};

export default Products;