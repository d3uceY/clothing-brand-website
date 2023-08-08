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
gsap.registerPlugin(ScrollTrigger)


gsap.from('.navigation-logo', {
  opacity: 0,
  duration: 1,
  y: '30%',
})

gsap.from('.navigation-item', {
    opacity: 0,
    duration: .6,
    y: '20%',
    stagger: .1,
    delay: .5
  })

  gsap.from('.navigation-icons', {
    opacity: 0,
    y: '20%',
    stagger: .1,
    duration: .6,
    delay: 1 
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
    delay: .9,
    ease: "power3.out"
  })

  gsap.from('.hero-content > button', {
    opacity: 0,
    y: '50%',
    duration: .5,
    delay: 1.2,
    ease: "power3.out"
  })

  gsap.from('.hero-image-container', {
    opacity: 0,
   width: '30%',
   duration: 1.2  ,
   ease: "power3.out"
  })

  gsap.from('.collection-header', {
     opacity: 0,
     y:'20%',
     duration: 1.5,
     ease: "power3.out",
     scrollTrigger: '.collection-header'
  })

  gsap.from('.collection-paragraph', {
    opacity: 0,
    y:'20%',
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: '.collection-paragraph'
 })

 gsap.from('.collections-container', {
  opacity: 0.1,
  y:'20%',
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: '.collections-container'
})

gsap.from('.arrival-header', {
  opacity: 0,
  y:'20%',
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: '.arrival-header'
})


gsap.from('.arrival-paragraph', {
  opacity: 0,
  y:'20%',
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: '.arrival-paragraph'
})


gsap.from('.hoodie-block', {
  opacity: 0.01,
  y:'20%',
  duration: 1.5,
  ease: "power3.out",
  stagger:.2,
  scrollTrigger: '.hoodie-block'
})

gsap.from('.categories-header', {
  opacity: 0,
  y:'20%',
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: '.categories-header'
})

gsap.from('.categories-paragraph', {
  opacity: 0,
  y:'20%',
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: '.categories-paragraph'
})

gsap.from('.categories-container', {
  opacity: 0,
  y:'20%',
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: '.categories-container'
})

gsap.from('.coming-soon-write-up', {
  opacity: 0,
  y:'30%',
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: '.coming-soon-write-up'
})

gsap.from('.comming-soon-image', {
  opacity: 0,
  x:'30%',
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: '.comming-soon-image'
})





