<template>
  <nav class="w-full bg-yellow-50 flex flex-col lg:flex-row  lg:mb-0 h-50  items-center py-3">
    <div class="w-full lg:w-1/5  ">
      <i class=" fa-solid fa-bars text-xl w-10 ml-5  text-gray-500 hover:cursor-pointer hover:text-black mb:5 lg:mb-0" @click="toggleMenuBar"></i>
     </div>

    <div class="w-4/5 mx-10 md:w-full mt-5 mx-5 lg:mt-0">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div class="lg:col-span-2 ">

          <div class="relative border border-gray-400 rounded-xl flex-1 ">
            <input type="text" class="bg-transparent border-0 py-2 px-4 block w-full leading-normal mx-4" placeholder="SEARCH" v-model="search_item" v-on:keyup.enter="search_item_method" @input="search_item_method">
            <div class="absolute inset-y-0 m-2 flex items-center">
              <svg class="h-4 w-4 text-gray-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="flex flex-col relative">
          <div class="relative h-10 border border-gray-400 rounded-xl bg-transparent hover:cursor-pointer hover:bg-white hover:border-b-0 hover:rounded-none hover:rounded-t-lg" @mouseover="hover = true"  @mouseleave="hover = false">
            <button class="border-0 rounded-md py-2 px-4 block w-full leading-normal text-center bg-transparent hover:cursor-pointer disabled text-gray-500"> FAVOURITES </button>
            <div class="absolute right-10 inset-y-0 flex items-center justify-end ">
              <i class="fa-regular fa-heart text-gray-500"></i>
            </div>

          </div>

          <div class="flex flex-col bg-white rounded-none mt-0 border-l border-r border-b p-2 border-gray-400 rounded-b-lg absolute top-10 z-50 w-full overflow-scroll"  @mouseover="hover = true"
               @mouseleave="hover = false" v-show="favorites.length>0 && hover">
            <div v-for="(favorite , index) in favorites">
              <FavoriteItems :idMeal="favorite.idMeal" :strMeal="favorite.strMeal" :strMealThumb="favorite.strMealThumb"/>
            </div>
          </div>



        </div>
      </div>
   </div>


  </nav>
</template>

<script>
import FavoriteItems from "./UIComponents/FavoriteItems.vue";

export default {
  name: "NavBar",
  components: {FavoriteItems},
  data(){
    return {
      hover: false,
      showMenuItem: true,
      search_item: ''
    }
  },
  created() {
    this.$store.dispatch('fetchSearchItem',{searched_item:'Soup'})
  },
  computed:{
    favorites(){
      return this.$store.getters.getFavorites
    }
  },
  methods:{
    toggleMenuBar(){
      this.showMenuItem = !this.showMenuItem
      // console.log('toggleMenuBar',this.showMenuItem)
      // localStorage.setItem('toggleMenuBar', this.showMenuItem)
      this.$store.commit('mutateToggleState')

    },
    search_item_method(){
      this.$store.dispatch('fetchSearchItem',{searched_item:this.search_item})
    },
    showfavorites(){
      console.log('showfavorites',this.favorites)
    }
  }
}
</script>

<style scoped>
*:focus {
  outline: none;
}
</style>