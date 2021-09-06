import Vue from 'vue/dist/vue.esm.js'
import VueRouter from 'vue-router'
import Contact from '../components/contact.vue'
import About from '../components/about_coffee_passport.vue'
import User from '../components/users/user.vue';

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/contact',  name: "contact",component: Contact },
    { path: '/about_coffee_passport',name: "about_coffee_passport", component: About},
    { path: '/user', name: 'user',component: User,
    }
  ],
})