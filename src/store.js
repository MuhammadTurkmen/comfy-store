import { getStorageItem, setStorageItem } from './utils.js';
let store = [];
const setupStore = (products) => {
    store = products.map((product) => {
        const {id, fields:{featured, name, price}} = product
        return {id,}
    })
};
const findProduct = () => {};
export { store, setupStore, findProduct };
