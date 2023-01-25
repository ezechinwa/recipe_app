<!--<script setup>-->
<!--import HelloWorld from './components/HelloWorld.vue'-->
<!--</script>-->

<template>
  <div class="flex flex-col  h-screen">
    <NavBar/>
    <MainContent class="flex-1" />
  </div>
</template>

<style scoped>

</style>
<script setup>
import NavBar from "./components/NavBar.vue";
import MainContent from "./components/MainContent.vue";


</script>