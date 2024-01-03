import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupCompanies = (store) => {
    let companies = ['all', ...new Set(store.map((product) => product.company))]
    const companiesDOM = getElement('.companies')
    companiesDOM.innerHTML = companies.map((company) =>  {
        return `<button class="company-btn">${company}</button>`
    }).join('')
    companiesDOM.addEventListener('click', function(e) {
        const element = e.target
        if(element.classList.contains('company-btn')) {
            let newStore = []
            
        }
    })
};

export default setupCompanies;
