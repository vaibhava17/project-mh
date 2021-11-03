import React from "react";

const Products = () => {
    return (
        <>
            <section class="products">
                <div class="filters">
                    <div class="filters-container">
                        <form class="input-form">
                            <input type="text" class="search-input" placeholder="search..." />
                        </form>
                        <h4>Company</h4>
                        <article class="companies">
                            <button class="company-btn">all</button>
                            <button class="company-btn">ikea</button>
                        </article>
                        <h4>Price</h4>
                        <form class="price-form">
                            <input
                                type="range"
                                class="price-filter"
                                min="0"
                                value="50"
                                max="100"
                            />
                        </form>
                        <p class="price-value"></p>
                    </div>
                </div>
                <div class="products-container"></div>
            </section>
            <div class="page-loading">
                <h2>Loading...</h2>
            </div>
        </>
    )
};

export default Products;