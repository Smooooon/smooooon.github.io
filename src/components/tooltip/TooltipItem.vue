<script setup lang="ts">
//import component
import IconItem from '../icons/IconItem.vue'

//import function/data
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { mdiInformationOutline } from '@mdi/js'

//props & emits
//properties
const showTooltip = ref<boolean>(false)
const container = ref<HTMLElement | null>(null)

//computed properties
//methods
function toggleTooltip(): void {
  showTooltip.value = !showTooltip.value
}

function handleClickOutside(event: MouseEvent): void {
  if (container.value && !container.value.contains(event.target as Node)) {
    showTooltip.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})

//watch functions
//lifecycle hooks
</script>

<template>
  <div ref="container" class="tooltip-wrapper">
    <div class="areaToToggle" @click="toggleTooltip">
      <p>Legende</p>
      <IconItem :path="mdiInformationOutline" size="30" />
    </div>
    <div class="tooltip" :class="{ visible: showTooltip }">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style scoped>
/************* Desktop style *************/
.tooltip-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.areaToToggle {
  display: flex;
  align-items: center;
  column-gap: 5px;
}

.tooltip {
  position: absolute;
  bottom: 100%;
  right: 0;
  display: flex;
  flex-wrap: wrap;
  width: 280px;
  background-color: var(--color-gray);
  color: var(--color-text);
  padding: 6px 12px;
  border-radius: 4px;
  /* white-space: nowrap; */ /* in original vorhanden */
  z-index: 10;
}

::v-deep(.tooltip > div) {
  display: flex;
  column-gap: 10px;
}

::v-deep(.tooltip > div > p:first-child) {
  min-width: 45px;
}

/* For toggle function */
.visible {
  visibility: visible !important;
}

/************* MediaQueries *************/
/* grosse Bildschirme */
@media screen and (max-width: 1920px) {
}

/* Bildschirme main Bereich + 2x 35px margin */
@media screen and (max-width: 1234px) {
  .tooltip {
    visibility: hidden;
    background-color: #333;
    color: white;
  }
}

/* Tabletversion */
@media screen and (max-width: 63em) {
}

/*  Handy */
@media screen and (max-width: 39em) {
  .tooltip {
    right: -100px;
  }
}
</style>
