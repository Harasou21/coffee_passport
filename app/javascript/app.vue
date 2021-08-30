<template>
  <div class='main'>
 
  <div class='item-contents'>
   
    <h2 class='title'>タイムライン</h2>
    <ul class='item-lists'>
        <li v-for="drink in drinks" :key="drink.id" class="list" >
              <div class="user-info-timeline">
                  <img class="user-img-timeline" v-bind:src="drink.user_img" > 
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

import axios from 'axios';
import likeButton from './packs/components/like/likeButton.vue';
import drinkShow from './packs/components/drinks/show.vue';


export default {
  components: {
      likeButton,
      drinkShow
  },
  data: function(){
    return {
      drinks: "drinks"
    }
  },
  created(){
    this.setDrink();
  },
  methods: {
    setDrink: function(){
      axios.get('/api/drinks')
      .then(response =>(
        this.drinks = response.data
      ))
    },
    show : function(drink) {
        this.$modal.show(`display-drink-${drink.id}`);
    },
    hide : function () {
      this.$modal.hide('display-drink-show');
    }
  }
}
</script>

