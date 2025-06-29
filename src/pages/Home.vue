
 <template>
    <!-- 🧊 Hero Content -->
    <div class="relative z-10 w-full min-h-screen flex flex-row items-center justify-center px-4 gap-12 overflow-hidden">
      <!-- Left: Text -->
      <div class="flex-1 min-w-0 space-y-4 max-w-full">
        <h2 class="text-3xl sm:text-3xl md:text-5xl font-bold leading-tight">
          <span class="text-white">Hello<span class="text-red-500">.</span></span><br />
          <span class="text-orange-400">I'm Syafeeq</span><br />
          <span class="text-red-400 font-extrabold">Software Developer</span>
        </h2>

        <div class="flex flex-wrap sm:flex-nowrap items-center gap-2 mt-4">
          <button class="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
            Got a project?
          </button>
          <button class="border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition">
            My resume
          </button>
        
        </div>
      </div>
      <!-- Right: Profile -->
      <div class="flex-shrink-0 w-60 h-60 sm:w-60 sm:h-60 md:w-60 md:h-60">
        <div class="rounded-full overflow-hidden bg-white w-full h-full shadow-xl ring-2 ring-orange-400">
          <img :src="profile" alt="Profile" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>

    <!-- Skills Row -->
    <div class="relative z-10 flex justify-center mt-5 px-4">
      <ul class="flex flex-wrap justify-center gap-6 text-xl sm:text-2xl text-white text-center">
        <li><a href="https://github.com/Syafeeq123" class="hover:underline">Github</a></li>
        <li><router-link to="" class="hover:underline">HTML</router-link></li>
        <li><router-link to="" class="hover:underline">PHP</router-link></li>
        <li><router-link to="" class="hover:underline">SQL</router-link></li>
      </ul>
    </div>
</template>

<script setup>
import profile from '../assets/profile.png';
</script>
