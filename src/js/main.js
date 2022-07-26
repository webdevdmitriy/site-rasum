const video = document.querySelector('.top__media-video')

video.addEventListener('play', function () {
  console.log('play')
})

const anchors = document.querySelectorAll('a[href*="#"]')

anchors.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault()
    let href = this.getAttribute('href').slice(1)
    const scrollTarget = document.getElementById(href)
    const topOffset = document.querySelector('header').offsetHeight
    const elementPosition = scrollTarget.getBoundingClientRect().top
    const offsetPosition = elementPosition - topOffset
    console.log(offsetPosition)
    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    })
  })
})

// onePageScroll('main', {
//   sectionContainer: '.fp', // sectionContainer accepts any kind of selector in case you don't want to use section
//   easing: 'ease', // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
//   // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
//   animationTime: 1000, // AnimationTime let you define how long each section takes to animate
//   pagination: true, // You can either show or hide the pagination. Toggle true for show, false for hide.
//   updateURL: false, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
//   beforeMove: function (index) {}, // This option accepts a callback function. The function will be called before the page moves.
//   afterMove: function (index) {}, // This option accepts a callback function. The function will be called after the page moves.
//   loop: false, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
//   keyboard: true, // You can activate the keyboard controls
//   responsiveFallback: true, // You can fallback to normal page scroll by defining the width of the browser in which
//   // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
//   // the browser's width is less than 600, the fallback will kick in.
// })

// // moveDown('.top')

const start = document.querySelector('.integration__animation .start')
const main = document.querySelector('.integration__animation .main')

setTimeout(function () {
  // img.src = 'src/video/main.gif'
  start.style.display = 'none'
  main.style.display = 'block'
}, 3900)
