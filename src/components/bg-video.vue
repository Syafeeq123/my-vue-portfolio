<template>
    <video
    :src="videoBg"
    autoplay
    loop
    muted
    playsinline
    class="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none">
    </video>
</template>

<script setup>
import videoBg from './assets/backk.mp4'
</script>