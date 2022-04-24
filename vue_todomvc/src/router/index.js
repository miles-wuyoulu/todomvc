import VueRouter from 'vue-router'

import TodoAll from '../pages/TodoAll.vue'
import TodoActive from '../pages/TodoActive.vue'
import TodoCompleted from '../pages/TodoCompleted'

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
    return VueRouterPush.call(this, to).catch(err => err)
}



export default new VueRouter({
    routes:[
        {
            // name:'all',
            path:'/',
            component:TodoAll,
            // props:true
            // props({query}){
            //     return {todos : query.todos}
            // }
        },
        {
            // name:'active',
            path:'/active',
            component:TodoActive,
            // props:true
        },
        {
            // name: 'completed',
            path: '/completed',
            component: TodoCompleted,
            // props: true
        }

    ]
})