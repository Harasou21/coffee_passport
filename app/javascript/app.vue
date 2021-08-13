<template>

<div id="id">
  {{drinks}}
  <img v-bind:src="drinks.image">
</div>

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