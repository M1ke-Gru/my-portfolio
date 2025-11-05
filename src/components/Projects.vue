<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 p-4">
    <ProjectCard name="Vitask" img_url="https://picsum.photos/seed/vitask/150"
      short_description="A task management app." />
    <ProjectCard name="Duty Scheduler" img_url="https://picsum.photos/seed/duty/150"
      short_description="A tool for scheduling duties." />
    <ProjectCard name="Calculator" img_url="https://picsum.photos/seed/calculator/150"
      short_description="A simple calculator." />
  </div>
</template>

<script setup lang="ts">
import ProjectCard from './ProjectCard.vue';
</script>
