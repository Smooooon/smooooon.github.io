<script setup lang="ts">
//import component
//import function/data
import { computed } from 'vue'

//props
const props = defineProps({
  path: {
    type: String,
    required: true
  },
  w: {
    type: String,
    default: 'w-6'
  },
  h: {
    type: String,
    default: 'h-6'
  },
  size: {
    type: [String, Number],
    default: 16
  }
})

//properties
//computed properties
const spanClass = computed(() => `inline-flex justify-center items-center ${props.w} ${props.h}`)

//methods
//watch functions
//lifecycle hooks
</script>

<template>
  <span :class="spanClass" class="iconContainer">
    <svg viewBox="0 0 24 24" :width="size" :height="size" class="icon">
      <path fill="currentColor" :d="path" />
    </svg>
  </span>
</template>

<style scoped>
/************* Desktop style *************/
.iconContainer {
  display: flex;
}

/************* MediaQueries *************/
/* grosse Bildschirme */
@media screen and (max-width: 1920px) {
}

/* Bildschirme main Bereich + 2x 35px margin */
@media screen and (max-width: 1234px) {
}

/* Tabletversion */
@media screen and (max-width: 63em) {
}

/*  Handy */
@media screen and (max-width: 39em) {
}
</style>
