import { formatPrice } from './utils.js';
import { addToCart } from './cart/setupCart.js';
const display = (products, element) => {
    // display products
    element.innerHTML = products.map((product) => {
        const {id, name, image, price} = product
    })
};

export default display;
