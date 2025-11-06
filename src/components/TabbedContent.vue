<template>
  <div class="animate-fade-in-up mb-8 mx-auto max-w-7xl md:px-9">
    <div class="flex justify-center mb-8">
      <div class="flex-col rounded-full p-2 w-fit bg-white/10 border border-white/20 shadow-lg"
        style="backdrop-filter: blur(8px);">
        <button v-for="page in subpages" :key="page"
          class="tab px-6 py-3 rounded-full text-xl transition-all duration-300"
          :class="page === current ? 'bg-white/20 text-white shadow-lg' : 'bg-transparent text-sky-300'"
          @click="current = page">
          {{ page }}
        </button>
      </div>
    </div>
    <div class="relative w-full overflow-hidden">
      <div class="flex transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(page, index) in subpages" :key="index" class="w-full flex-shrink-0">
          <component :is="views[page]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { subpages, current, views } from '../logic/Tabs.ts';

const currentIndex = computed(() => subpages.indexOf(current.value));
</script>
