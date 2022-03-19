import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import * as Icons from '@element-plus/icons'
// 引入echarts
import * as echarts from 'echarts'

import axios from 'axios'
import VueAxios from 'vue-axios'
createApp(App).use(VueAxios, axios)

createApp(App).config.globalProperties.$echarts = echarts

createApp(App).use(store).use(router).use(ElementPlus).use(echarts).mount('#app')
