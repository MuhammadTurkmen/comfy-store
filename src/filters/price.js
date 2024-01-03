import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupPrice = (store) => {
    const priceInput = getElement('.price-filter')
    const priceValue = getElement('.price-value')

    // setup filter
    let maxPrice = store.map((product) => product.price)
    maxPrice = Math.max(...maxPrice)
};

export default setupPrice;
