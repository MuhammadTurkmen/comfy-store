// import
import {
  getStorageItem,
  setStorageItem,
  formatPrice,
  getElement,
} from '../utils.js';
import { openCart } from './toggleCart.js';
import { findProduct } from '../store.js';
import addToCartDOM from './addToCartDOM.js';
// set items

const cartItemCountDOM = getElement('.cart-item-count')
const cartItemsDOM = getElement('.cart-items')
const cartTotalDOM = getElement('.cart-total')


let cart = getStorageItem('cart')

export const addToCart = (id) => {
  let item = cart.find((cartItem) => cartItem.id === id)
  if(!item) {
    let product = findProduct(id)
    // add item to the cart
    product = {...product, amount: 1}
    cart = [...cart, product]
    // add item to the DOM
    addToCartDOM(product)
  }
  else {
    // update value
    const amount = increaseAmount(id)
  }
  // add one to the item count
  displayCartItemCount()
  // display cart totals
  displayCartTotal()
  // set cart in local storage
  setStorageItem('cart', cart)
  // more stuff comming up
  openCart()
};

function displayCartItemCount() {
  const amount = cart.reduce((total, cartItem) => {
    return total += cartItem.amount
  },0)
  cartItemCountDOM.textContent = amount
}

function displayCartTotal() {
  let total = cart.reduce((total, cartItem) => {
    return total += cartItem.price * cartItem.amount
  },0)
  cartTotalDOM.textContent = `Total : ${formatPrice(total)}`
}
function displayCartItemsDOM() {
  cart.forEach((cartItem) => {
    addToCartDOM(cartItem)
  })
}

function increaseAmount(id) {
  cart = cart.map((cartItem) => {

  })
}
function setupCartFunctionality() {
  
}
const init = () => {
  // display amount of cart items 
  displayCartItemCount()
  // display total 
  displayCartTotal()
  // add all cart items to the dom
  displayCartItemsDOM()
  // setup cart fanctionality
  setupCartFunctionality()
}

init()