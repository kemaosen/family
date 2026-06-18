import { createApp } from 'vue'
import App from './App'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import './styles/global.scss'

const app = createApp(App)
app.use(router)
app.use(Antd)
app.mount('#app')
