import { createApp } from 'vue'
import App from './App.vue'
import './styles/tokens.css'

const app = createApp(App)

// 滚动揭示：元素进入视口时淡入上移；尊重 reduced-motion
app.directive('reveal', {
  mounted(el, binding) {
    el.classList.add('reveal')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      el.classList.add('reveal-in')
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('reveal-in')
          io.unobserve(el)
        }
      },
      { threshold: binding.value?.threshold ?? 0.16, rootMargin: '0px 0px -8% 0px' }
    )
    io.observe(el)
  }
})

app.mount('#app')
