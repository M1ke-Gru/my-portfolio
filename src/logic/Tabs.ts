import { ref } from 'vue'

export const subpages = ["Experience", "Skills"]
export const current = ref(subpages[0])
import { defineAsyncComponent } from 'vue'

export const views = {
  Experience: defineAsyncComponent(() => import("../components/Experience.vue")),
  Skills: defineAsyncComponent(() => import("../components/Skills.vue")),
}
