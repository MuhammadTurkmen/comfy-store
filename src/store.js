import { getStorageItem, setStorageItem } from './utils.js';
let store = [];
const setupStore = (products) => {
    store = products.map((product) => {
        const {id, fields:{featured, name, price, company, colors, image}} = product
        return {id,}
    })
};
const findProduct = () => {};
export { store, setupStore, findProduct };
