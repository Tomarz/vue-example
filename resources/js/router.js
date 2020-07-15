import Vue from 'vue'
import VueRouter from 'vue-router'

import blog from '../views/modules/blog/blog.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'blog',
            component: blog,
            meta: {
                title: 'Blog'
            }
        }
    ]
})
