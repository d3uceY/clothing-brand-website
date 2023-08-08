const menuButton = document.querySelector('.hamburger-icon-button');
const menuCloseButton = document.querySelector('.close-button');
const navBar = document.querySelector('.navigation-list')


menuButton.addEventListener('click', () => {
    navBar.classList.add('clicked');
})

menuCloseButton.addEventListener('click', () => {
    navBar.classList.remove('clicked');
})