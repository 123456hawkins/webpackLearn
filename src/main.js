import count from './js/count'
import sum from './js/sum'
import './css/index.css'
import './less/index.less'
import './sass/index.scss'
import './css/iconfont.css'
import './audio/test.mp3'
console.log(count(2, 1))
console.log(sum(1, 2, 3, 4))
if (module.hot) {
  module.hot.accept('./js/count.js', function (count) {
    const result1 = count(2, 1)
    console.log(result1)
  })
  module.hot.accept('./js/sum.js', function (sum) {
    const result2 = sum(1, 2, 3, 4)
    console.log(result2)
  })
}
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        console.log('SW registered: ', registration)
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError)
      })
  })
}
