<template>
    <div class="flex space-x-5 p-5 items-center hover:cursor-pointer hover:bg-gray-200">
      <img class="w-12 h-12" :src="strMealThumb" :alt="strMeal">
      <h1>{{ strMeal }}</h1>
    </div>
</template>

<script>
export default {
  name: "FavoriteItems",
  props: ['idMeal','strMeal','strMealThumb']
}
</script>

<style scoped>

</style>