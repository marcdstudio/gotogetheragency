import { component } from 'picoapp'
import lottie from 'lottie-web'

export default component(() => {
  lottie.loadAnimation({
    container: document.querySelector('.wordmark'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: '/assets/icons/wordmark.json',
  })

  lottie.play()
  setTimeout(function() {
    lottie.stop()
  }, 3000)
  setInterval(function() {
    lottie.play()
    setTimeout(function() {
      lottie.stop()
    }, 3000)
  }, 20000)
})
