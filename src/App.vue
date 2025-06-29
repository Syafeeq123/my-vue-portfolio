<template>
   <div class="min-h-screen bg-black text-white">
    <header class="relative w-full h-[200px] text-white">
     <img
        src="./assets/profile.jpeg"
        alt="background"
        class="absolute w-full h-full object-cover z-0 pointer-events-none"
      />
       <div class="relative z-10 p-4 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between w-full space-y-4 md:space-y-0">
  <!--  Left: Logo + Name -->
  <div class="flex items-center space-x-2">
    <img :src="Profile" class="h-6 w-6 object-cover rounded-full" />
    <h1 class="text-sm font-bold">SYAFEEQ</h1>
  </div>

  <!--  Right: Navigation -->
  <ul class="hidden md:flex text-sm flex flex-row md:flex-row space-y-0 md:space-y-0 space-x-6 md:space-x-6 items-center">
    <li><router-link to="/home" class="hover:underline">Home</router-link></li>
    <li><router-link to="/parallax" class="hover:underline">Parallax Page</router-link></li>
    <li><a href="https://github.com/Syafeeq123" class="hover:underline">Github</a></li>
    <li><router-link to="/profile" class="hover:underline">Profile</router-link></li>
  </ul>
</div>

 <div class="relative z-10 min-h-screen w-full flex flex-col items-center text-center px-4">        
    <h1 class="relative z-10 text-xl font-bold text-white">PORTFOLIO</h1>
    <p class="relative z-10 mt text-white">This is my test portfolio</p>
    <ul class="flex flex-wrap justify-center gap-4 mt-4 text-sm text-white md:hidden">
  <li><router-link to="/home" class="hover:underline">Home</router-link></li>
  <li><router-link to="/parallax" class="hover:underline">Parallax Page</router-link></li>
  <li><a href="https://github.com/Syafeeq123" class="hover:underline">Github</a></li>
  <li><router-link to="/profile" class="hover:underline">Profile</router-link></li>
</ul>
  </div>
  <!-- Mobile Navigation (shown only on small screens) -->
    </header>

    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script setup>
import Profile from './assets/image.png';
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

</style>
