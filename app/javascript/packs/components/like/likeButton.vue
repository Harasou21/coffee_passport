<template>
  <div>
    <div v-if="isLiked" @click="deleteLike()">
      <div class="iine__button">
        <i class="fas fa-heart"></i> {{ count }}
      </div>

    </div>
    <div v-else @click="registerLike()">
      <div class="iine__button">
        <i class="far fa-heart"></i> {{ count }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import { csrfToken } from 'rails-ujs'
// // CSRFトークンの取得とリクエストヘッダへの設定をしてくれます
// axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken()



export default {
   props: ["drinkId"],
   data(){
     return{
       likeList: []
       // いいね一覧を格納するための変数
     }
   },
   computed: {
     // データが変更されるたび動く
     // ここではlikeListが変更される度に、count,isLikedが再構築される
     count(){
       return this.likeList.length
       // いいね数を返す
     },
     isLiked(){
       // ログインユーザーが既にいいねしてるかを判定する
       if (this.likeList.length === 0){ return false}
            return Boolean(this.findLikeId())
     }
   },
   created: function(){
     // vueインスタンスの作成、初期化直後に実行される
     this.fetchLikeByDrinkId().then(result =>{
       console.log(result)
       this.likeList = result
     })
   },
   methods: {
    fetchLikeByDrinkId: async function(){
       // async function()
       // jsの非同期処理
        const response = await axios.get('/api/likes',{params: {drink_id:this.drinkId,user_id: user.id}})
        // await 
        // その投稿のいいね一覧を取得したい
        // もし処理が失敗したらプロセスから抜ける(処理をやめる？)
        return response.data


    },
     registerLike: async function(){
       // rails側のcreateアクションにリクエストするメソッド
       const response = await axios.post('/api/likes',{drink_id: this.drinkId,user_id: user.id})
       this.fetchLikeByDrinkId().then(result => {
        this.likeList = result
        
       })
     },
     deleteLike: async function(){
       // rails側のdestroyアクションにリクエストするメソッド
       const likeId = this.findLikeId()
       const response = await axios.delete(`/api/likes/${likeId}`,{params: {drink_id: this.drinkId,user_id: user.id}})
       this.likeList = this.likeList.filter(n => n.id !== likeId)
     },
     // ログインユーザーがいいねしているLikeモデルのidを返す
     findLikeId: function(){
       const like = this.likeList.find((like) => {
         return (like.user_id == user.id)
       })
       if (like) { return like.id }
     }
   }
}
</script>
