<template>
  <div class="flex flex-col space-y-3">
       <h1 class="text-3xl text-gray-700"> {{ title }}</h1>
        <div class="h-60 rounded-2xl border border-gray-500 shadow text-gray-500">
          <div class="flex flex-wrap">
            <div v-for="(item, index) in items">
              <div class="bg-white flex rounded-xl items-center mx-3 my-3 space-x-10 p-1">
                <i class="fa-solid fa-xmark hover:cursor-pointer" ></i>
                <button class="">
                  {{item}}
                </button>
              </div>
            </div>
          </div>
        </div>


<!--      <div class="rounded-2xl shadow border border-gray-500  space-x-3  h-60 flex overflow-auto flex-wrap justify-start">-->

<!--        <div v-for="(item, index) in items" class=" h-auto">-->
<!--          <div class="bg-white flex space-x-2">-->
<!--              <i class="fa-solid fa-xmark hover:cursor-pointer" ></i>-->
<!--              <button class="">-->
<!--                {{item}}-->
<!--              </button>-->
<!--          </div>-->

<!--          <div class="flex px-3 py-2 bg-white rounded items-center text-gray-500 space-x-2 " :key="index">-->
<!--              <i class="fa-solid fa-xmark hover:cursor-pointer" ></i>-->
<!--              <button class="">-->
<!--                {{item}}-->
<!--              </button>-->
<!--          </div>-->

<!--        </div>-->


<!--       </div>-->

  </div>
</template>

<script>
export default {
  name: "MenuItem",
  // props: ['title','items']
  props: {
    title: {
      type:  String,
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>

</style>