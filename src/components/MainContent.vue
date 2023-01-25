<template>
  <div class="w-full  flex flex-col lg:flex-row">
    <Transition  name="fade">
    <div class="w-full lg:w-1/5 bg-custom_gray-50 mt-0" v-if="showMenu">

        <div class="mt-16 px-6 flex flex-col space-y-10">
          <MenuItem title="Category" :items=getCategories />
          <MenuItem title="Area" :items=getAreas />
          <MenuItem title="Tags" :items=getTags />
        </div>

      <div class="h-56 w-full"></div>
    </div>
    </Transition>

    <Transition  name="fade">
    <div class="w-4/5 mx-10 bg-white">
<!--      <div class="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-16">-->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-16" >
<!--        'idMeal','strMeal','strMealThumb'-->
        <div  v-for="(meal,i) in getFoodItems">
          <FoodCards :idMeal=meal.id :strMeal=meal.strMeal :strMealThumb=meal.strMealThumb />
        </div>

        <DetailCards class=" col-span-1  md:col-span-2 lg:col-span-3" />


      </div>

<!--       <button @click="showitems">Show items</button>-->
      <div class="h-56 w-full"></div>
    </div>
    </Transition>


  </div>

</template>

<script>
import FoodCards from "./UIComponents/FoodCards.vue";
import DetailCards from "./UIComponents/DetailCards.vue";
import MenuItem from "./UIComponents/MenuItem.vue";

export default {
  name: "MainContent",
  components: {MenuItem, DetailCards, FoodCards},
  mounted(){
    console.log("getfooditems", this.getFoodItems)
  },

  computed:{
    showMenu() {
      return this.$store.getters.getMenuState
    },
    getFoodItems(){
      return this.$store.getters.getFoodItems
    },
    getCategories(){
      return this.$store.getters.getCategories
    },
    getAreas(){
      return this.$store.getters.getAreas
    },
    getTags(){
      return this.$store.getters.getTags
    }
  },
  data(){
    return {
      // showMenu: true,
      items: ['VEGETARIAN','FOOD','Water','Orange']
    }
  },
  methods:{
    showitems(){
      console.log(this.getFoodItems)
    }
  }
}
</script>

<style scoped>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>