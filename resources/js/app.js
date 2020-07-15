import Vue from 'vue'
import router from './router.js'

import App from '../views/modules/main.vue'

const app = new Vue({
    el: '#app',
    components: {
        App
    },
    router
})