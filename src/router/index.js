import {createRouter, createWebHashHistory,Router} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from "@/views/Login";
import SiderBar from "@/components/SiderBar";
import TerminalDetail from "@/components/TerminalDetail";
import demo from "@/components/echarts/demo";
import board from "@/components/dashboard/board";
import OverView from "@/components/OverView";
import xterm from "@/components/dashboard/xterm";
import {overlayEmits} from "element-plus";
const routes = [
    {
        path: '/',
        name: 'home',
        component: Login
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/SiderBar',
        name: 'SiderBar',
        component: () => import('../components/SiderBar')
    },
    {
        path: '/terminaldetail',
        name: 'terminaldetail',
        component: () => import(/* webpackChunkName: "about" */ '../components/TerminalDetail')
    },
    {
        path: '/demo',
        name: 'demo',
        component: () => import('../components/Demo')
    },
    {
        path: '/dashboard/:id',
        component: TerminalDetail,
        children: [
            {path: '', component:board},
            {path: 'webssh',name: 'webssh', component: xterm},

            ]
    },
    {
        path: '/overview',
        component: TerminalDetail,
        children: [
            {path: '',component: OverView},
            {path: '/demo',component: xterm}
            ]
    }
]


const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})
/* 全局导航守卫 */
router.beforeEach((to, from, next) => {
    if (to.matched.length === 0) {  // 如果未匹配到路由
        from.name ? next({ name: from.name }) : next('/')
    } else {
        next()  // 如果匹配到正确跳转
    }
})

export default router
