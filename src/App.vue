<template>
    <header class="w-full h-full bg-black text-white py-4 px-1 flex justify-between items-center text-sm">
  
     <!-- <img
        src="./assets/profile.jpeg"
        alt="background"
        class="absolute w-full h-full object-cover z-0 pointer-events-none"
      /> -->
  <!--  Left: Logo + Name -->
  <div class="flex items-center space-x-4">
    <img :src="Profile" class="h-10 w-10 object-cover rounded-full" />
    <h1 class="text-sm font-bold">SYAFEEQ</h1>
  </div>

   <div class="text-right">
  <!--  Right: Navigation website -->
  <ul class="hidden md:flex text-sm space-x-3 items-center text-right justify-end">
    <li><router-link to="/home"> <Icon icon="ci:house-01" class="tech-icon hover:underline" /></router-link></li>
    <li><router-link to="/parallax"> <Icon icon="ci:flag" class="tech-icon hover:underline" /></router-link></li>
    <li><a href="whatsapp://send?phone=60162276414&text=Hello%20I%20am%20interested%20in%20your%20product
" target="_blank"> <Icon icon="octicon:mark-github-24" class="tech-icon hover:underline" /></a></li>
    <li><router-link to="/profile"> <Icon icon="octicon:person-16" class="tech-icon hover:underline" /></router-link></li>
  </ul>
   </div>

    <!-- Navigation mobile -->
    <ul class="flex flex-wrap justify-center gap-3 text-sm text-white md:hidden">
  <li><router-link to="/home"> <Icon icon="ci:house-01" class="tech-icon hover:underline" /></router-link></li>
    <li><router-link to="/parallax"> <Icon icon="ci:flag" class="tech-icon hover:underline" /></router-link></li>
    <li><a href="whatsapp://send?phone=60162276414&text=Hello%20I%20am%20interested%20in%20your%20product
" target="_blank"> <Icon icon="octicon:mark-github-24" class="tech-icon hover:underline" /></a></li>
    <li><router-link to="/profile"> <Icon icon="octicon:person-16" class="tech-icon hover:underline" /></router-link></li>
</ul>
  <!-- Mobile Navigation (shown only on small screens) -->
    </header>

    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <footer class="w-full h-full bg-black text-white py-4 px-1 flex justify-between items-center text-sm">
    <div class="text-left">
      <p>© 2025 Syafeeq</p>
    </div>
   <div class="text-center"> 
      <p>All rights reserved.</p>
    </div>
     <div class="text-right">
      <div class="flex flex-wrap max-w-screen-xl mx-auto overflow-hidden space-x-3 items-center">
         <a href="https://instagram.com/ftsyafeeq" target="_blank">
       <Icon icon="skill-icons:instagram" class="tech-icon" /></a>
       <Icon icon="skill-icons:twitter" class="tech-icon" />
       <Icon icon="skill-icons:github-dark" class="tech-icon" />
       <Icon icon="skill-icons:discord" class="tech-icon" />
   </div>
    </div>
</footer>
</template>

<script setup>
import Profile from './assets/image.png'
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.tech-icon {
  font-size: 20px;
}
</style>