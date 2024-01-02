import { getElement } from '../utils.js';
import display from '../displayProducts.js';
const setupSearch = (store) => { 
    const form = getElement('.input-form')
    const nameInput = getElement('.search-input')
    form.addEventListener('keyup', function() {
        const value = nameInput.value
        if(value) {
            const newStore = store.filter((product) => {
 
            }) 
        } 
        else {
            display(store, getElement('.products-container'))
        }
    })
};
   
export default setupSearch;
