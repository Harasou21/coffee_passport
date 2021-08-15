<template>
  <div>
    <div v-if="isLiked" @click="deleteLike()">
      <div class="iine__button">
        <i class="fas fa-heart"></i> {{ count }}
      </div>

    </div>
    <div v-else @click="registerLike()">
      <div class="iine__button">
        <i class="fas fa-heart"></i> {{ count }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

console.log(user)
console.log(drink.id)

export default {
   props: ['userId', 'drinkId']
}
</script>
