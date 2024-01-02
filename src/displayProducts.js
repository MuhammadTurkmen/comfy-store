import { formatPrice } from './utils.js';
import { addToCart } from './cart/setupCart.js';
const display = (products, element) => {
    // display products
    element.innerHTML = products.map((product) => {
        const {id, name, image, price} = product
        return `<article class="product">
                        <div class="product-container">
                            <img src="${image}" class="product-img img" alt="${name}">

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
                </article>`
    }).join('')
};

export default display;
