import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import * as Icons from '@element-plus/icons'
// 引入echarts
import * as echarts from 'echarts'
import axios from "axios";
axios.defaults.baseURL='http://localhost:8080';//设置基址
Object.keys(Icons).forEach(key => {
    createApp(App).component(key, Icons[key])
})
createApp(App).config.globalProperties.$echarts = echarts
createApp().config.globalProperties.$axios=axios
createApp(App).use(store).use(router).use(ElementPlus).use(echarts).mount('#app')
