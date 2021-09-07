<template>
  <div class='main' >
      <div class="playing-button">
        <button class="playing-button-on" @click="pauseVideo" v-if="playing">BGMをOFF</button>
        <button class="playing-button-off" @click="playVideo" v-else>BGMをON</button>
      </div>
     
 
  <div class='item-contents'>
   <router-view :user_id="user_id"></router-view>
    <h2 class='title' id="title">タイムライン</h2>
    <youtube :video-id="videoId" ref="youtube" @playerVars="playerVars" hidden/>


 
    <ul class='item-lists' id="timeline">
        <li v-for="drink in drinks" :key="drink.id"  class="list" >
          <router-link to="/user" @click.native="getUserId(drink.user_id)">
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
          </router-link>


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
  name: 'player',
  props: {
    src: "https://www.youtube.com/watch?v=02azSAMtZWU"
  },
  components: {
      likeButton,
      drinkShow,
  },
  data: function(){
    return {
      drinks: "drinks",
      user_id: 0,
      videoId: "QN1uygzp56s",
      playing: false,
      playerVars: {
        autoplay: 1
      }
    }
  },
  created(){

  },
  mounted: function(){
   // this.playVideo();
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
    },
    playVideo(){  // 再生処理
      this.$refs.youtube.player.playVideo()
      this.playing = true
    },
    pauseVideo(){ // 停止処理
     this.$refs.youtube.player.pauseVideo()
      this.playing = false
    },
    getUserId(user_id){
      this.user_id = user_id
      document.getElementById("timeline").style.visibility ="hidden";
            document.getElementById("title").style.visibility ="hidden";
       scrollTo(0, 0);
    }
  }
}
</script>

