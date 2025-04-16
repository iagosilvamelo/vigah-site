import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

const app = createApp(App)

app.provide('social', {
    whatsapp: 'https://bit.ly/Vigah',
    instagram: 'https://www.instagram.com/vigah.digital',
    facebook: 'https://www.facebook.com/profile.php?id=61574895397856',
    linkedin: 'https://www.linkedin.com/company/106987657',
})

import scrollToPlugin from './plugins/scrollTo'
app.use(scrollToPlugin, { offset: 100 })

app.mount('#app')