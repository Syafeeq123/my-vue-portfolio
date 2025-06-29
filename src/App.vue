<template>
   <div class="min-h-screen bg-black text-white">
    <header class="relative w-full h-[200px] text-white">
     <img
        src="./assets/profile.jpeg"
        alt="background"
        class="absolute w-full h-full object-cover z-0 pointer-events-none"
      />
       <div class="relative z-10 p-8 flex items-center justify-between w-full">
  <!--  Left: Logo + Name -->
  <div class="flex items-center space-x-2">
    <img :src="Profile" class="h-6 w-6 object-cover rounded-full" />
    <h1 class="text-sm font-bold">SYAFEEQ</h1>
  </div>

  <!--  Right: Navigation -->
  <ul class="text-sm flex space-x-4">
    <li><router-link to="/home" class="hover:underline">Home</router-link></li>
    <li><router-link to="/parallax" class="hover:underline">Parallax Page</router-link></li>
    <li><a href="https://github.com/Syafeeq123" class="hover:underline">Github</a></li>
    <li><router-link to="/profile" class="hover:underline">Profile</router-link></li>
  </ul>
</div>

 <div class="relative z-10 min-h-screen w-full flex flex-col items-center text-center">
                    
    <h1 class="text-xl font-bold text-white">PORTFOLIO</h1>
    
    <p class="relative z-10 mt text-white">This is my test portfolio</p>
  </div>
    </header>

    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script setup>
import Menu from "./components/Menu.vue";
import GooGooDolls from './assets/GGD_Iris.jpg';
import Profile from './assets/image.png';
import Hero from './components/Hero.vue';
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

</style>
