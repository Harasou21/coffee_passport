<template>
<div class='main' id="main">
      <div class="playing-button">
        <button class="playing-button-on" @click="pauseVideo" v-if="playing">BGMをOFF</button>
        <button class="playing-button-off" @click="playVideo" v-else>BGMをON</button>
      </div>


      
      <div id="show-suggest" class="show-suggest"  v-if="this.isSuggest">
        <button @click="showSuggest()">おすすめ商品の表示を許可</button>
      </div>
      <div class="show-suggest" v-else>
        <p>thanks!!</p>
      </div>
     
 
  <div class='item-contents' id="item-contents">
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
      <div class="pop-up" id="pop-up" v-if="popUpTemplate">
        <drinkShow :drink="this.drink"></drinkShow>
        <div class="suggest">
          <h1 class="suggest-text">このコーヒーを買いますか？</h1>
          <button @click="transitionForBuy" class="suggest-btn">買う</button>
          <button @click="hideSuggest" class="hide-suggest-btn">おすすめ商品を以後表示しない</button>
        </div>
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
      drink: "drink",
      popUpTemplate: false,
      user_id: 0,
      isSuggest: true,
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
    window.addEventListener('scroll', this.popUp);
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
    },
    popUp(){
      if( localStorage.getItem('suggest') !== "false" && window.scrollY > 200 && window.scrollY < 800 ){
        axios.get('/api/drinks/10')
        .then(response =>(
          this.drink = response.data
        ))
        this.popUpTemplate = true
        this.isSuggest = true
        document.getElementById("item-contents").style.opacity = 0.1
   
      }else if(window.scrollY> 900 || window.scrollY < 200){
        this.popUpTemplate = false
        document.getElementById("item-contents").style.opacity = 1.0
      }
    },
    transitionForBuy(){
      document.getElementById("buy-path").click()
    },
    showSuggest(){
     localStorage.setItem("suggest",true)
      this.isSuggest = false
    },
    hideSuggest(){
      this.popUpTemplate = false
      this.isSuggest = true
      document.getElementById("item-contents").style.opacity = 1.0
      document.getElementById("show-suggest").style.opacity = 1.0
      localStorage.setItem('suggest', false)
    }
  }
}



</script>

<style scoped>
.pop-up{
  position: absolute;
  top: 500px;
}

.suggest{
  text-align: center;
}

.suggest-text{
   
}

.suggest-btn{

}

</style>