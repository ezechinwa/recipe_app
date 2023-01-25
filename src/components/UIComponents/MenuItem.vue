<template>
  <div class="flex flex-col space-y-3 ">
       <h1 class="text-3xl text-gray-700"> {{ title }}</h1>
        <div class="h-72 rounded-2xl border border-gray-500 shadow text-gray-500">
          <div class="flex flex-wrap">
            <div v-for="(item, index) in items">
              <div class="bg-white flex rounded-xl items-center mx-3 my-3 space-x-10 p-1">
                <i class="fa-solid fa-xmark hover:cursor-pointer" @click="removeItem(item)"></i>
                <button class="" @click="searchByFilter(item)">
                  {{item}}
                </button>
              </div>
            </div>
          </div>
        </div>



  </div>
</template>

<script>
export default {
  name: "MenuItem",
  // props: ['title','items']
  props: {
    searchTerm: {
      type: String
    },
    title: {
      type:  String,
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  methods:{
    removeItem(item){
      this.$store.dispatch('removeItemFromList',{searchTerm: this.searchTerm, itemName: item})
     // console.log('remove item from list', item)
    },
    searchByFilter(item){
      this.$store.dispatch('searchByFilter',{searchTerm: this.searchTerm, filterName: item})
    }
  }
}
</script>

<style scoped>

</style>