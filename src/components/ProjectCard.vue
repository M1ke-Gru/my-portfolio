<template>
  <div
    class="group relative rounded-2xl border border-white/20 bg-white/10 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
    style="backdrop-filter: blur(10px);">
    <!-- Media -->
    <div class="relative overflow-hidden rounded-t-2xl">
      <img :src="img_url" alt="" class="w-full h-56 object-cover" />
      <!-- soft gradient, not harsh black -->
      <div
        class="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/30 opacity-90 group-hover:opacity-100 transition-opacity">
      </div>
    </div>

    <!-- Content on the glass panel (consistent with other sections) -->
    <div class="p-6">
      <h3 class="text-2xl font-bold text-white">{{ name }}</h3>
      <p class="mt-2 text-base text-text-secondary line-clamp-3">
        {{ short_description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  img_url: string
  short_description: string
}>()
</script>
