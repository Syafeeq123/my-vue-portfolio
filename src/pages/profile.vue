<template>  
  <div class="w-full min-h-screen bg-black flex justify-center text-center items-center text-white px-4 py-12 overflow-x-hidden">
    <div class="w-full max-w-3xl mx-auto flex flex-col items-center space-y-6 text-center">
        <div class="flex flex-wrap justify-center gap-6 max-w-full overflow-hidden">
       <Icon icon="vscode-icons:file-type-php" class="tech-icon" />
       <Icon icon="vscode-icons:file-type-html" class="tech-icon" />
       <Icon icon="vscode-icons:file-type-mysql" class="tech-icon" />
       <Icon icon="vscode-icons:file-type-css" class="tech-icon" />
       <Icon icon="vscode-icons:file-type-java" class="tech-icon" />
       <Icon icon="vscode-icons:file-type-csharp" class="tech-icon" />
        <Icon icon="vscode-icons:file-type-cpp2" class="tech-icon" />
   </div>
      <h1 class="text-4xl font-bold text-orange-400">ABOUT ME</h1>
      <p class="text-base sm:text-lg leading-relaxed px-2">
        Hello! I'm Syafeeq, a student. who is still learning and gaining knowledge about software development with a love for creating innovative solutions. 
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
.tech-icon {
   font-size: 72px;
}
</style>