import { component } from 'picoapp'
import lottie from 'lottie-web'


export default component((node) => {

    lottie.loadAnimation({
        container: document.querySelector('.wordmark'), // Required, // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: '/assets/icons/wordmark.json', // the path to the animation json
    })
    
    lottie.play()
    setTimeout(function () {
        lottie.stop()
    },3000)
    setInterval(function () {
        lottie.play()
        setTimeout(function() {
          lottie.stop()
        }, 3000)
    }, 20000)

})
