
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

        <div class="flex flex-wrap md:flex-nowrap items-center gap-2 mt-4 justify-start md:justify-start">
          <button class="bg-orange-500 text-white px-3 py-2 rounded-md hover:bg-orange-600 transition">
            Got a project?
          </button>
          <button class="border border-white px-3 py-2 rounded-md hover:bg-white hover:text-black transition">
            My resume
          </button>
        
        </div>
      </div>
      <!-- Right: Profile -->
      <div class="flex-shrink-0 w-40 h-40 sm:w-30 sm:h-30 md:w-60 md:h-60">
        <div class="rounded-full overflow-hidden bg-white w-full h-full shadow-xl ring-2 ring-orange-400">
          <img :src="profile" alt="Profile" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>

    <!-- Skills Row -->
</template>

<script setup>
import profile from '../assets/profile.png';
</script>
