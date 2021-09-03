import Vue from 'vue'
import appExplain from '../packs/components/static_pages/appExplain.vue'

document.addEventListener('DOMContentLoaded', () => {
  var app = new Vue({
    el: '#app-explain',
    components: {
      "app_explain": appExplain
    },
    render: h => h(appExplain)
  }).$mount()
  //document.body.appendChild(appExplain.$el)
})

