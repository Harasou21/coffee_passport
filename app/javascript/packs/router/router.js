import Vue from 'vue/dist/vue.esm.js'
import VueRouter from 'vue-router'
import Contact from '../components/contact.vue'
import About from '../components/about_coffee_passport.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/contact', component: Contact },
    { path: '/about_coffee_passport', component: About}
  ],
})