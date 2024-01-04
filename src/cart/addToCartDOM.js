import { formatPrice, getElement } from '../utils.js';

const addToCartDOM = ({id, name, price, image, amount}) => {
    const article = document.createElement('article')
    article.classList.add('cart-item')
    article.setAttribute('data-id', id)
    article.innerHTML = `
            <img src="${image}" class="cart-item-img" alt="${name}">
            <div>
              <h4 class="cart-item-name">high-back bench</h4>
              <p class="cart-item-price">$13.99</p>
              <button class="cart-item-remove-btn">remove</button>
            </div>
            <div>
              <button class="cart-item-increase-btn">
                <i class="fas fa-chevron-up"></i>
              </button>
              <p class="cart-item-amount">1</p>
              <button class="cart-item-decrease-btn">
                <i class="fas fa-chevron-down"></i>
              </button>
            </div>
    `
};

export default addToCartDOM;
