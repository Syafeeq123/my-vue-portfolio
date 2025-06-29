import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'
import VueImageZoom from 'vue-image-zoomer'
import { Icon } from "@iconify/vue";

createApp(App).use(router).use(MotionPlugin).component('vue-image-zoom', VueImageZoom).component('Icon', Icon).mount('#app')