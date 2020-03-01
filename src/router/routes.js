
const Home = resolve => require(['../views/Home.vue'], resolve)
const about = resolve => require(['../views/About.vue'], resolve)
const login = resolve => require(['../views/login.vue'], resolve)
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            auth: false, // 是否需要登录
            keepAlive: true // 是否缓存组件
        }
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: about,
        meta: {
            auth: true,
            keepAlive: true
        }
    },
    {
        path: '/login',
        name: 'login',
        component: login,
        meta: {
            auth: false,
            keepAlive: true
        }
    },
    {
        path: '*', // 未匹配到路由时重定向
        redirect: '/',
        meta: {
            // auth: true,
            // keepAlive: true
        }
    }
]
export default routes
