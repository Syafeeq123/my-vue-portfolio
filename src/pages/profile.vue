<template>  
  <div class="w-full min-h-screen bg-black flex justify-center text-center items-center text-white px-4">
    <div class="flex flex-col items-center space-y-6 max-w-3xl text-center">
        <div class ="flex flex-row items-center space-y-4 gap-12">
       <Icon icon="vscode-icons:file-type-php" class="big-icon" />
       <Icon icon="vscode-icons:file-type-html" :style="{ fontSize: '36px' }" />
       <Icon icon="vscode-icons:file-type-mysql" class="big-icon" />
       <Icon icon="vscode-icons:file-type-css" class="big-icon" />
       <Icon icon="vscode-icons:file-type-java" class="big-icon" />
       <Icon icon="vscode-icons:file-type-csharp" class="big-icon" />
         <Icon icon="vscode-icons:file-type-cpp2" class="big-icon" />
   </div>
      <h1 class="text-4xl font-bold text-orange-400">ABOUT ME</h1>
      <p class="text-lg">
        Hello! I'm Syafeeq, a student. who is still learning and gaining knowledge about software developer with a love for creating innovative solutions. 
        I specialize in web development, particularly with HTML, CSS, JavaScript, PHP and MySQL. 
        My goal is to build user-friendly applications that make a difference.
      </p>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>

<style scoped>
svg {
   font-size: 24px;
   line-height: 1em;
}

.big-icon {
   font-size: 72px;
}
</style>