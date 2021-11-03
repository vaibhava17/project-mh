import fetchProducts from './functions/fetchProducts.js';
import { setupStore, store } from './functions/store.js';
import display from './functions/displayProducts.js';
import { getElement } from './functions/utils.js';

const init = async () => {
    const products = await fetchProducts();
    if (products) {
        // add products to the store
        setupStore(products);
        const featured = store.filter((product) => product.featured === true);
        display(featured, getElement('.featured-center'));
    }
};

export default init;