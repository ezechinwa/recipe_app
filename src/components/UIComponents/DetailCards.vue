<template>
      <div class="bg-white h-72 rounded-2xl shadow-2xl flex flex-col lg:flex-row border lg:border-0 ">

            <div class="relative w-full lg:w-1/3 h-72  rounded-2xl hover:cursor-pointer">
              <video class="object-cover rounded-lg lg:rounded-l-lg w-full h-72" src="https://josecuono.dev/video1.mp4" type="video/mp4"  muted  ></video>
              <div class="absolute flex justify-center items-center  top-0 left-0 z-10 w-full h-72 rounded-2xl">
                <i class="fa-regular fa-circle-play text-8xl text-gray-800  "></i>
              </div>
           </div>


        <div class="flex flex-col justify-between space-y-2 p-6">
           <div class="flex flex-col space-y-5">
             <h1 class="text-3xl">Instruction</h1>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores cum debitis deserunt, doloremque eius et ex harum in libero nihil praesentium, quam quisquam sapiente similique sint tenetur voluptate, voluptatibus.</p>
           </div>

          <div class="flex flex-col space-y-5">
            <h1 class="text-3xl">Ingredients + Measure</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores cum debitis deserunt, doloremque eius et ex harum in libero nihil praesentium, quam quisquam sapiente similique sint tenetur voluptate, voluptatibus.</p>
          </div>

        </div>





      </div>
</template>

<script>
export default {
  name: "DetailCards"
}
</script>

<style scoped>

</style>