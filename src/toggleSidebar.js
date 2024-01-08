import { getElement } from './utils.js';
const toggleNave = getElement('.toggle-nav')
const sidebarOverlay = getElement('.sidebar-overlay')
const closeBtn = getElement('.sidebar-close')

toggleNave.addEventListener('click', () => {
    sidebarOverlay.classList.add('show')
})
closeBtn.addEventListener('click', () => {
    sidebarOverlay.classList.remove('show')
})