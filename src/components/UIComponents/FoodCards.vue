<template>
    <div class="border rounded-b-lg rounded-t-lg shadow flex flex-col hover:shadow-2xl hover:cursor-pointer " :id="idMeal">
      <div class="relative">
        <img class="w-full h-64 max-h-64  rounded-t-lg object-cover" :src="strMealThumb" :alt="strMeal">

        <div class="absolute right-10 bottom-10  flex items-center justify-end ">
          <i class="text-2xl fa-regular fa-heart text-white z-50 hover:text-red-500 hover:cursor-pointer" @click="addFoodItems(idMeal,strMealThumb,strMeal)"></i>
        </div>
      </div>


        <p class="text-center w-full p-5 text-gray-500"> {{ strMeal }}</p>

    </div>
</template>

<script>
export default {
  name: "FoodCards",
  props: ['idMeal','strMeal','strMealThumb'],
  methods: {
    addFoodItems(idMeal,strMealThumb,strMeal){
        this.$store.dispatch('actionItemToFavorites',[idMeal,strMealThumb,strMeal])
    }
  }
}
</script>

<style scoped>

</style>