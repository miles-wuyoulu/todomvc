import VueRouter from 'vue-router'
import cookies from "vue-cookies"

import TodoAll from '../pages/TodoAll.vue'
import TodoActive from '../pages/TodoActive.vue'
import TodoCompleted from '../pages/TodoCompleted'
import MyTodo from "../components/MyTodo";
// import TodoMainPart from "../components/TodoMainPart";
import MyLogin from "../components/MyLogin";
import MyRegister from "../components/MyRegister";

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
    return VueRouterPush.call(this, to).catch(err => err)
}



const router = new VueRouter({
    mode:'hash',
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: MyLogin
        },
        {
            path: '/register',
            component: MyRegister
        },
        {
            path: '/mytodo',
            component: MyTodo,
            redirect: '/mytodo/todoall',
            meta: { isAuth: true },
            children: [

                {
                    path: 'todoall',
                    component: TodoAll,
                    meta: { isAuth: true },
                },
                {
                    path: 'active',
                    component: TodoActive,
                    meta: { isAuth: true },
                },
                {
                    path: 'completed',
                    component: TodoCompleted,
                    meta: { isAuth: true },
                }

            ]
        },
    ]
})

router.beforeEach((to, from, next) => {
    // console.log(cookies.get('user'))
    if (to.meta.isAuth) {
        if (cookies.get('user')) {
            next()
        } else {
            router.replace({
                path: '/'
            })
        }
    } else {
        next()
    }
})


export default router