import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/components/Menu'
import Home from '@/components/Home'


Vue.use(Router)

export default new Router({
    linkActiveClass: 'active',
    routes: [{
            path: '/',
            component: Menu
        },
        {
            path: '/menu',
            component: Menu,
            children: [{
                path: '/customer-login',
                // 懒加载
                component: resolve => require(['@/components/Login.vue'], resolve)
            }, {
                path: '/admin-login',
                // 懒加载
                component: resolve => require(['@/components/Login.vue'], resolve)
            }, {
                path: '/regist',
                // 懒加载
                component: resolve => require(['@/components/Regist.vue'], resolve)
            }]
        },
        {
            path: '/home',
            component: Home,
            children: [{
                path: '/matters',
                // 懒加载
                component: resolve => require(['components/Matters.vue'], resolve)
            }, {
                path: '/adddoc',
                // 懒加载
                component: resolve => require(['components/Adddoc.vue'], resolve)
            }, {
                path: '/categorylist',
                // 懒加载
                component: resolve => require(['components/Categorylist.vue'], resolve)
            }, , {
                path: '/solicithouse',
                // 懒加载
                component: resolve => require(['components/Solicithouse.vue'], resolve)
            }, {
                path: '/exhibition',
                // 懒加载
                component: resolve => require(['components/Exhibition.vue'], resolve)
            }, {
                path: '/userinfo',
                // 懒加载
                component: resolve => require(['components/Userinfo.vue'], resolve)
            }, {
                path: '/modifypass',
                // 懒加载
                component: resolve => require(['components/Modifypass.vue'], resolve)
            }, {
                path: '/messageboard',
                // 懒加载
                component: resolve => require(['components/Messageboard.vue'], resolve)
            }, {
                path: '/userlist',
                // 懒加载
                component: resolve => require(['components/userlist.vue'], resolve)
            }, {
                path: '/msgborlist',
                // 懒加载
                component: resolve => require(['components/magborlist.vue'], resolve)
            }]
        }
    ]
})