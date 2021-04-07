import Vue from 'vue/dist/vue/vue.esm.js'
import Router from './router/router'
import footer from './components/footer.vue'



var app = new Vue({
  router: Router,
  el: '#footer',
  components: {
    'navbar': footer,
  }
});

