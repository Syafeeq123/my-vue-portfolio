<template>
    <div class="flex items-center space-x-2">
  <ul class="text-xs flex space-x-4">
    <li><router-link to="/home" class="hover:underline">Home</router-link></li>
    <li><router-link to="/parallax" class="hover:underline">Parallax Page</router-link></li>
    <li><router-link to="/dashboard" class="hover:underline">Dashboard</router-link></li>
    <li><router-link to="/profile" class="hover:underline">Profile</router-link></li>
  </ul>
</div>
</template>

<script setup>
import profile from '../assets/profile.png'; // replace with your image path
</script>
