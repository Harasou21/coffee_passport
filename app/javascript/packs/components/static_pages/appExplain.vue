<template>
  


<div class="top-explain">
  <carousel :per-page="1"  autoplay=true  loop=true>
    <slide autoplayTimeout=1000>
      <div class="app-title">
          <img class="coffee-gif" :src="require('/public/assets/images/coffee_gif.gif')"> 
        <div class="app-text">
          <h3 class="top-explain-title" >Von Voyage!</h3>
          <p class="app-concept">Coffee Passportとはあなたが出会ったコーヒーの記録を共有できるサービスです</p>
        </div>
      </div>
    </slide>

    <slide autoplayTimeout=3000>
      <div class="explain-wrapper">
      <ruby>
        <h3 class="explain-wrapper-title">出会ったコーヒーをシェアしよう</h3>
        <rt class="explain-wrapper-title-en">share your favorite coffee</rt>
      </ruby>


        <p class="explain-wrapper-info">
        出会ったコーヒーの感想を記録して共有しましょう。
        その投稿が、素敵なコーヒーを求めてる誰かのヒントになるでしょう。
        </p>
        <img class="explain-post-img" :src="require('/public/assets/images/post.png')" >
      </div>
    </slide>


    <slide autoplayTimeout=3000>
        <div class="explain-wrapper">
        <ruby>
          <h3 class="explain-wrapper-title">コーヒーを探す旅へ</h3>
          <rt class="explain-wrapper-title-en">vayage to find coffee</rt>    
        </ruby>

        

          <p class="explain-wrapper-info">
          お気に入りのコーヒーに出会いたいときは、検索してみましょう。
          コーヒーの名前、コク、酸味、産地、加工法などで検索できます。
          </p>
        </div>
    </slide>

    <slide autoplayTimeout=3000>
      <div class="explain-wrapper">
      <ruby>
        <h3 class="explain-wrapper-title">素敵なコーヒーがあなたの手元に</h3>
        <rt class="explain-wrapper-title-en">special coffee will come to your house</rt>    
      </ruby>
        <p class="explain-wrapper-info">
          コーヒーを家でも楽しみたいなら、素敵なコーヒーのラインナップを
          取り揃えておりますので、ぜひお求めください。
        </p>
          <video :src="require('/public/assets/images/buy.mp4')" autoplay muted> -->
          </video> 
      </div>
    </slide>



    <slide>
        <div class="explain-wrapper">
        <ruby>
          <h3 class="explain-wrapper-title">いいねやコメントで盛り上がろう</h3>
          <rt class="explain-wrapper-title-en">smash that like button and comment </rt>
        </ruby>


          <p class="explain-wrapper-info">
            気に入った投稿に「いいね」を押したり、コメントして
            一杯のコーヒーが生み出すコミュニティに参加しましょう。
          </p>
        </div>   
    </slide>

  </carousel>

</div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  components: {
    Carousel,
    Slide
  }
}
</script>
