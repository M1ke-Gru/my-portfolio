<template>
  <div class="rounded-2xl p-8 mx-8 md:m-0 mb-8 bg-white/10 border border-white/20 shadow-lg"
    style="backdrop-filter: blur(8px);">
    <h1 class="text-3xl font-bold text-text-primary mb-8 text-center">Skills</h1>

    <div class="flex flex-col md:flex-row gap-6">
      <!-- Columns -->
      <div v-for="group in groups" :key="group.level" class="flex-1 rounded-xl p-5 ring-1 shadow-sm"
        :class="[group.meta.ring, group.meta.bg]">
        <!-- Header chip -->
        <div
          class="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold uppercase tracking-wide mb-4"
          :class="group.meta.chip">
          <span class="h-2 w-2 rounded-full" :class="group.meta.dot"></span>
          {{ group.title }}
        </div>

        <!-- List -->
        <ul class="space-y-2 text-lg text-white/80">
          <li v-for="skill in group.items" :key="skill.name" class="flex items-center gap-3">
            <span class="h-2.5 w-2.5 rounded-full shrink-0" :class="group.meta.dot"></span>
            <span class="hover:text-white/95 transition-colors">{{ skill.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
enum Level {
  Experienced = "Experienced",
  Proficient = "Proficient",
  Familiar = "Familiar",
}

type Skill = {
  name: string
  level_of_knowledge: Level
}

const skills: Skill[] = [
  // Programming Languages
  { name: "TypeScript", level_of_knowledge: Level.Proficient },
  { name: "Python", level_of_knowledge: Level.Experienced },
  { name: "JavaScript", level_of_knowledge: Level.Experienced },
  { name: "Java", level_of_knowledge: Level.Proficient },
  { name: "C", level_of_knowledge: Level.Familiar },

  // Backend
  { name: "FastAPI", level_of_knowledge: Level.Experienced },
  { name: "SQLAlchemy", level_of_knowledge: Level.Proficient },
  { name: "Pydantic", level_of_knowledge: Level.Proficient },
  { name: "PostgreSQL", level_of_knowledge: Level.Proficient },
  { name: "SQLite", level_of_knowledge: Level.Proficient },
  { name: "Docker", level_of_knowledge: Level.Proficient },
  { name: "Caddy", level_of_knowledge: Level.Familiar },

  // Frontend
  { name: "React", level_of_knowledge: Level.Proficient },
  { name: "Zustand", level_of_knowledge: Level.Experienced },
  { name: "Tailwind CSS", level_of_knowledge: Level.Experienced },
  { name: "Astro", level_of_knowledge: Level.Proficient },
  { name: "Vue", level_of_knowledge: Level.Proficient },
  { name: "HTML", level_of_knowledge: Level.Experienced },
  { name: "CSS", level_of_knowledge: Level.Experienced },

  // DevOps & Tooling
  { name: "Git", level_of_knowledge: Level.Experienced },
  { name: "Linux", level_of_knowledge: Level.Experienced },
  { name: "Docker Compose", level_of_knowledge: Level.Proficient },

  // Other
  { name: "REST APIs", level_of_knowledge: Level.Experienced },
  { name: "Authentication (JWT, OAuth)", level_of_knowledge: Level.Proficient },
  { name: "Algorithms & Data Structures", level_of_knowledge: Level.Proficient },
  { name: "AI / LLM Integration", level_of_knowledge: Level.Familiar },
]

// Visual theme per level
const levelMeta: Record<Level, {
  bg: string; ring: string; chip: string; dot: string;
}> = {
  [Level.Experienced]: {
    bg: "bg-gradient-to-br from-emerald-500/10 to-teal-500/10",
    ring: "ring-emerald-400/40",
    chip: "bg-emerald-400/15 text-emerald-200 ring-1 ring-emerald-300/30",
    dot: "bg-emerald-400",
  },
  [Level.Proficient]: {
    bg: "bg-gradient-to-br from-blue-500/10 to-indigo-500/10",
    ring: "ring-blue-400/40",
    chip: "bg-blue-400/15 text-blue-200 ring-1 ring-blue-300/30",
    dot: "bg-blue-400",
  },
  [Level.Familiar]: {
    bg: "bg-gradient-to-br from-zinc-400/10 to-slate-500/10",
    ring: "ring-zinc-400/40",
    chip: "bg-zinc-400/15 text-zinc-200 ring-1 ring-zinc-300/30",
    dot: "bg-zinc-300",
  },
}

// Build groups in a fixed order
const groups = Object.values(Level).map(level => ({
  level,
  title: level,
  items: skills.filter(s => s.level_of_knowledge === level),
  meta: levelMeta[level],
}))
</script>
