<template>
    <div class="flex space-x-5 p-5 items-center hover:cursor-pointer hover:bg-gray-200" @click="search_food(strMeal)">
      <img class="w-12 h-12" :src="strMealThumb" :alt="strMeal">
      <h1>{{ strMeal }}</h1>
    </div>
</template>

<script>
export default {
  name: "FavoriteItems",
  props: ['idMeal','strMeal','strMealThumb'],
  methods: {
    search_food(str_Meal){
      this.$store.dispatch('fetchSearchItem',{searched_item:str_Meal})
    }
  }
}
</script>

<style scoped>

</style>