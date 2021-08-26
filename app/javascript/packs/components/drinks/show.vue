<template>

<div class='show-main'>

  <div class='item-contents'>
    <h2 class='title'></h2>
    <ul class='item-lists'>

      <li class='list'>

        <div class='item-img-content'>
          <button v-on:click="hide(drink)">戻る</button>
          <img class= "item-img" v-bind:src="drink.image" >
        </div>
        <div class='item-info'>
          <h3 class='item-name'>
            {{drink.name}} 
          </h3>
          <div class='item-price'>
            <span>{{drink.price}}円<br>(税込み)</span>
          </div>
          <div class='item-explain'>
             {{drink.explain}}
          </div>


          <table class="item-category">
            <tbody>
              <tr class="item-region">
                  <th class="region-title">産地 </th>
                  <td v-if="drink.region_id" class="region-name">{{drink.region_name}}</td>
              </tr>
                <tr class="item-body">
                  <th class="body-title">コク</th> 
                  <td v-if="drink.body_id" class="body-name">{{drink.body_name}}</td>
                </tr>
                <tr class="item-acidity">
                    <th class="acidity-title">酸味</th> 
                    <td v-if="drink.acidity_id" class="acidity-name">{{drink.acidity_name}}</td>
                </tr>
                <tr class="item-processing">
                    <th class="processing-title">加工法</th>
                     <td v-if="drink.processing_id" class="processing-name">{{drink.processing_name}}</td>
                </tr>
            </tbody>
          </table>
              <!-- この部分にいいねボタンを記述 -->
              <likeButton :drinkId=drink.id></likeButton>
        </div>
        <div class="item-delete">
        </div>
      </li>

    </ul>

    <div class="comment-container">
      <div id="comments-create">
        <!-- <%= render partial: 'comments/create', locals: {comment: @comment, drink: @drink} %> -->
      </div>
    </div>

    <div id="comments-index">
       <!-- <%= render partial: 'comments/index', locals: {comments: @comments,drink: @drink} %> -->
    </div>  

  </div>
</div>

</template>

<script>

import axios from 'axios';
import likeButton from '../like/likeButton.vue'

export default {
  props: ['drink'],
  components: {
      likeButton
  },
  methods: {
    hide : function (drink) {
      this.$modal.hide(`display-drink-${drink.id}`);
    }
  }
  // data: function (){
  //   return{
  //     drink: "drink"
  //   }
  // },
  // mounted () {
  //   this.setDrink();
  //   // this.setRegion();
  // },
  // methods: {
  //   setDrink: function(){
  //     axios.get('/api' + drink.id)
  //       .then(response => (
  //         this.drink = response.data
       
  //       ))
  //   },
    // setRegion: function(){
    //   switch(this.drink.region_id){
    //     case 1:
    //       this.drink.region.name = "---";
    //     case 2:
    //       this.drink.region.name = "マルチリージョン";
    //     case 3: 
    //       this.drink.region.name = "ラテンアメリカ";
    //                 console.log(this.drink.region.name)
    //     case 4:
    //       this.drink.region.name = "アフリカ";
    //     case 5:
    //       this.drink.region.name = "アジア、太平洋"
    //   }
    // }
}

</script>

