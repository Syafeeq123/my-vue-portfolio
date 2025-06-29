<template>
  <div class="p-10 min-h-screen bg-black relative z-10">
    <h1 class="text-2xl font-bold text-center text-orange-400 mb-10">Hover over the cards</h1>
    <div class="flex flex-wrap justify-center gap-4">
      <ParallaxCard data-image="https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <template #header><h1>PHP</h1></template>
        <template #content><p>web development.</p></template>
      </ParallaxCard>

      <ParallaxCard data-image="https://plus.unsplash.com/premium_photo-1685086785230-2233cf5d8f28?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <template #header><h1>HTML</h1></template>
        <template #content><p>the standard language for creating web pages.</p></template>
      </ParallaxCard>

      <!-- New Card: CSS -->
      <ParallaxCard data-image="https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <template #header><h1>CSS</h1></template>
        <template #content><p>Stylize your web with flair.</p></template>
      </ParallaxCard>

      <!-- New Card: JavaScript -->
      <ParallaxCard data-image="https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amF2YXNjcmlwdHxlbnwwfHwwfHx8MA%3D%3D">
        <template #header><h1>JavaScript</h1></template>
        <template #content><p>Make your pages interactive.</p></template>
      </ParallaxCard>
    </div>
  </div>
</template>

<script>
import ParallaxCard from '../components/ParallaxCard.vue';

export default {
  components: {
    ParallaxCard
  }
};
</script>
