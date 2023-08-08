// navbar code
const menuButton = document.querySelector('.hamburger-icon-button');
const menuCloseButton = document.querySelector('.close-button');
const navBar = document.querySelector('.navigation-list')


menuButton.addEventListener('click', () => {
    navBar.classList.add('clicked');
})

menuCloseButton.addEventListener('click', () => {
    navBar.classList.remove('clicked');
})

//gsap animations



gsap.from('.navigation-logo', {
  opacity: 0,
  duration: .5,
  y: '20%',
})

gsap.from('.navigation-item', {
    opacity: 0,
    duration: .5,
    y: '20%',
    stagger: .1,
    delay: .5
  })

  gsap.from('.navigation-icons', {
    opacity: 0,
    y: '20%',
    stagger: .1,
  })

  gsap.from('.hero-content > h1', {
    opacity: 0,
    x: '20%',
    delay: .8
  })

  gsap.from('.hero-content > p', {
    opacity: 0,
    y: '50%',
    duration: .5,
    delay: .9
  })

  gsap.from('.hero-content > button', {
    opacity: 0,
    y: '50%',
    duration: .5,
    delay: .9
  })

  gsap.from('.hero-image-container', {
    opacity: 0,
   width: '30%',
   duration: .5,
  })