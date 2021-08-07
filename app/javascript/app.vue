<template>
<ul>
  <li v-for="drink in drinks" :key="drink.id">
    {{drink.name}}
    {{drink.price}}
  </li>
</ul>
</template>

<script>
import axios from 'axios';

export default {
  data: function (){
    return{
      drinks: "drinks"
    }
  },
  mounted () {
    this.setDrink();
  },
  methods: {
    setDrink: function(){
      axios.get('/api' + location.pathname)
        .then(response => (
          this.drinks = response.data
        ))
    }
  }
}
</script>