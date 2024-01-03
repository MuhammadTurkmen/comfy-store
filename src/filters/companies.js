import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupCompanies = (store) => {
    let companies = ['all'...new Set(store.map((product) => product.company))]
};

export default setupCompanies;
