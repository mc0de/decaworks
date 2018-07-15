import Vue from 'vue'
import VueRouter from 'vue-router'
import ExampleComponent from '../components/ExampleComponent.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/somepath', component: ExampleComponent, name: 'test' },
]

export default new VueRouter({
    mode: 'history',
    base: '/',
    routes
})
