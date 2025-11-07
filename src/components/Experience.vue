<template>
  <div class="rounded-2xl p-10 bg-white/10 border border-white/20 shadow-lg mx-8 md:m-0"
    style="backdrop-filter: blur(8px);">
    <h1 class="text-3xl font-bold text-text-primary mb-8 text-center">Experience & Projects</h1>

    <div class="space-y-8">
      <!-- Real job -->
      <div class="border-l-4 border-emerald-400 pl-4">
        <h2 class="text-2xl font-semibold text-white mb-2">Werkstudent Software Development</h2>
        <p class="text-white/70 mb-6 text-xl">QASS | Apr 2024 - Jan 2025</p>
        <ul class="list-disc list-inside text-white/80 space-y-1">
          <li>Developed an logging and allert system to show info, error and other messages to the user,
            which is callable from both python backend and QML frontend.</li>
          <li>Implemented a calendar pop up for selection of date and time ranges.</li>
          <li>Created an important component of the python backend infrastructure, which allowed for easy
            maintainability for the rest of the project.</li>
        </ul>
      </div>

      <!-- Personal projects -->
      <div class="border-l-4 border-sky-400 pl-4">
        <h2 class="text-2xl font-semibold text-white mb-6">Personal Projects</h2>
        <ul class="list-disc list-inside text-white/80 space-y-1">
          <li class="mb-4">
            <a href="https://vitask.app" target="_blank" rel="noopener noreferrer"><strong>Vitask:</strong></a>
            Full-stack task
            manager (React + FastAPI) with JWT auth,
            optimistic UI and queueing
            tasks to be pushed to the backend if offline or not authenticated. <a href="https://vitask.app"
              target="_blank" rel="noopener noreferrer"><strong class="underline">Link</strong></a>
          </li>
          <li class="mb-4">
            <strong>Portfolio Website:</strong> Astro + Tailwind + Vue setup with responsive glassomorphic design &
            dynamic routing.
          </li>
          <li>
            <strong>Dormistry:</strong> Project, which me and my friend were building, for managing life in
            dorms,
            with implemented different priviledge levels and complex task assignment flows.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
strong {
  color: skyblue
}
</style>
