import { formatPrice, getElement } from '../utils.js';

const addToCartDOM = ({id, name, price, image, amount}) => {
    const article = document.createElement('article')
    article.classList.add('cart-item')
    article.setAttribute('data-id', id)
};

export default addToCartDOM;
