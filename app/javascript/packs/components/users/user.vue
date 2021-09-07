<template>
 <div class='main'>

     
 
  <div class='item-contents'>
   
    <h2 class='title'></h2>
 
    <router-link to="/" @click.native="showTimeline()" class="back-to-timeline">タイムラインに戻る</router-link>

    <ul class='item-lists'>
        <li v-for="drink in filtredDrinks" :key="drink.id"  class="list" >
          
              <div class="user-info-timeline" >
                  <div v-if="drink.user_img">
                     <img class="user-img-timeline" v-bind:src="drink.user_img" > 
                  </div>
                   <div v-else>
                     <img class="user-img-timeline" src ="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnJlYXV0aWZ1bCUyMGdpcmx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"> 
                  </div>

                 
                  <div class="username-timeline">
                      {{drink.nickname}}
                  </div>
              </div>



            <div class='item-img-content'>
              <img class= "item-img" v-bind:src="drink.image" >
            </div>
            <div class='item-info'>
              <h3 class="item-name"> 
                {{drink.name }}
              </h3>
              <div class='item-price'>
                <span>{{ drink.price }}円<br>(税込み)</span>
              </div>
              <div class='item-explain'>
                {{drink.explain}}
              </div>
              <div class='item-tag'>

              </div>
              <div class="like-and-comment">
                 <likeButton :drinkId=drink.id></likeButton>
                 <i class="far fa-comment fa-lg"></i>
                <button v-on:click="show(drink)">詳細を表示</button>
              </div>
            </div>
                <modal v-bind:name="'display-drink-'+drink.id"
                 height="1000px" 
                 styles="background-color: bisque">
                  <drinkShow :drink=drink></drinkShow>
                </modal>
            <div v-if="drink.body_id === 2" class="body-light"></div>
            <div v-else-if="drink.body_id === 3" class="body-medium"></div>
            <div v-else-if="drink.body_id === 4" class="body-full"></div>
            <div v-else class="body-nothing"></div>

            <div v-if="drink.acidity_id === 2" class="acidity-low"></div>
            <div v-else-if="drink.acidity_id === 3" class="acidity-medium"></div>
            <div v-else-if="drink.acidity_id === 4" class="acidity-high"></div>
            <div v-else class="acidity-nothing"></div>
        </li>
      </ul> 
      </div>
   
</div>
</template>

<script>

import Vue from 'vue/dist/vue.esm.js'
import VModal from 'vue-js-modal'
import axios from 'axios';
import likeButton from '../like/likeButton.vue';
import drinkShow from  '../drinks/show.vue';

Vue.use(VModal)


export default {
  props: {
    user_id: {
      type: Number
    }
  },
  components: {
    likeButton,
    drinkShow
  },
  data: function(){
    return {
      filtredDrinks: [],
      drinks: "drinks",
      userName: ""
    }
  },
  created(){
    this.setDrink();
  },
  methods: {
    setDrink: function(){
      axios.get('/api/drinks')
      .then(response => {
        const drinks = response.data
        this.filtredDrinks = drinks.filter(drink => 
            drink.user_id === this.user_id)
      })
    },
    show: function(drink) {
        this.$modal.show(`display-drink-${drink.id}`);
    },
    hide: function () {
        this.$modal.hide(`display-drink-${drink.id}`);
    },
    showTimeline: function(){
       document.getElementById("timeline").style.visibility ="visible";
        document.getElementById("title").style.visibility ="visible";
    }
  },

}
</script>

<style scoped>
.back-to-timeline{
  color: white;
  background-color:#3c1900 ;
  padding: 5px;
  border-bottom: solid 4px black;
  border-radius: 3px;
  transition: background-color 5s ease-out;
}

.back-to-timeline:active{
  -webkit-transform: translateY(4px);
  transform: translateY(4px);/*下に動く*/
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);/*影を小さく*/
  border-bottom: none;
}

.back-to-timeline:hover{
 background: linear-gradient(270deg, black 0%, maroon 50%, #3c1900  100%);

}



.back-to-timeline a:visited{
  color: white;
  background-color:#3c1900 ;
  padding: 5px;
}

</style>